import { section } from "./index";
import { currentProject, projectBody, hideForm, projectTasks, makeHomepage } from "./homepage";
import { makeSidebar } from "./sidebar";

export const taskForm = document.createElement('form');
taskForm.classList.add('task-form')
const taskFormTitle = document.createElement('input');
taskFormTitle.minLength = '5';
taskFormTitle.placeholder = 'Title: Shopping';
taskFormTitle.required = 'true';
const taskFormDescription = document.createElement('input');
taskFormDescription.placeholder = 'Details: e.g. do shopping tomorrow 6pm';
taskFormDescription.classList.add('task-form-description');
taskFormDescription.required = 'true';
const taskDueDate = document.createElement('input');
taskDueDate.required = 'true';
const dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let today = year + "-" + month + "-" + day;
taskDueDate.type = 'date';
taskDueDate.min="2022-01-01";
taskDueDate.value = today;
const taskButtonDiv = document.createElement('div');
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
export const cancelButton = document.createElement('button');
cancelButton.textContent = 'Cancel';
taskButtonDiv.append(submitButton, cancelButton);

const createTaskForm = () => {
    taskForm.append(taskFormTitle, taskFormDescription, taskDueDate, taskButtonDiv);
    return taskForm;
}

const taskFactory = (title, description, date) => {
    let priority = false;
    let completed = false;
    return { title, description, date, priority, completed };
};


export const makeTaskForm = (e) => {
    projectBody.appendChild(createTaskForm());
}
const createTask = (e) => {
    e.preventDefault();
    const project = JSON.parse(localStorage.getItem(currentProject));
    const newTask = taskFactory(taskFormTitle.value, taskFormDescription.value, taskDueDate.value);
    project.push(newTask);
    localStorage.setItem(`${currentProject}`, JSON.stringify(project));
    projectTasks.textContent = '';
    hideForm()
};

export const deleteTask = (currentTask) => {
        let whatProject;
        let realProject;
        let currentTaskName = currentTask.taskName;
        const project = JSON.parse(localStorage.getItem(currentProject));
        if (currentProject == 'Inbox') {
            whatProject = project[currentTask.taskIndex].whereFrom; 
            realProject = JSON.parse(localStorage.getItem(whatProject));
            for (let i = 0; i < realProject.length; i++) {
                if (currentTaskName == realProject[i].title) {
                    realProject.splice(i, 1);
                }
            }
            localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
        }
        if (currentProject !== 'Inbox') {
            const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
            for (let i = 0; i < inboxProject.length; i++) {
                if (currentTaskName == inboxProject[i].title) {
                    inboxProject.splice(i, 1);
                }
            }
            localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        }
        for (let i = 0; i < project.length; i++) {
            if (currentTaskName == project[i].title) {
                project.splice(i, 1);
            }
        }
        localStorage.setItem(`${currentProject}`, JSON.stringify(project));
        projectTasks.textContent = '';
        section.textContent = '';
        section.appendChild(makeSidebar());
        section.appendChild(makeHomepage(currentProject));      
};

export const editTaskDate = (event, parentNode, dateNode, iconNode, currentTask) => {
    let whatProject;
    let realProject;
    const project = JSON.parse(localStorage.getItem(currentProject));
    parentNode.textContent = '';
    parentNode.append(taskDueDate, iconNode);
    taskDueDate.addEventListener('change', () => {
        project[currentTask.taskIndex].date = taskDueDate.value;
        if (currentProject == 'Inbox') {
            whatProject = project[currentTask.taskIndex].whereFrom;
            realProject = JSON.parse(localStorage.getItem(whatProject));
            for (let i = 0; i < realProject.length; i++) {
                if (currentTask.taskName == realProject[i].title) {
                    realProject[i].date = taskDueDate.value;
                }
            }
            localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
        }
        if (currentProject !== 'Inbox') {
            const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
            for (let i = 0; i < inboxProject.length; i++) {
                if (currentTask.taskName == inboxProject[i].title) {
                    inboxProject[i].date = taskDueDate.value;
                }
            }
            localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        }
        localStorage.setItem(`${currentProject}`, JSON.stringify(project));
        projectTasks.textContent = '';
        section.textContent = '';
        section.appendChild(makeSidebar());
        section.appendChild(makeHomepage(currentProject));
    });

    document.addEventListener('click', (e) => {
        if (e.target !== event.target && e.target !== taskDueDate) {
            setTimeout(() => {
                parentNode.textContent = '';
                parentNode.append(dateNode, iconNode);
              }, "250");
        }
    })
};

export const editTaskTitle = (event, parentNode, taskTitle, taskDescription, currentTask) => {
    let whatProject;
    let realProject;
    const project = JSON.parse(localStorage.getItem(currentProject));
    parentNode.textContent = '';
    parentNode.append(taskFormTitle, taskDescription);
    taskFormTitle.addEventListener('change', () => {
        project[currentTask.taskIndex].title = taskFormTitle.value;
        if (currentProject == 'Inbox') {
            whatProject = project[currentTask.taskIndex].whereFrom;
            realProject = JSON.parse(localStorage.getItem(whatProject));
            for (let i = 0; i < realProject.length; i++) {
                if (currentTask.taskName == realProject[i].title) {
                    realProject[i].title = taskFormTitle.value;
                }
            }
            localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
        }
        if (currentProject !== 'Inbox') {
            const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
            for (let i = 0; i < inboxProject.length; i++) {
                if (currentTask.taskName == inboxProject[i].title) {
                    inboxProject[i].title = taskFormTitle.value;
                }
            }
            localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        }
        localStorage.setItem(`${currentProject}`, JSON.stringify(project));
        projectTasks.textContent = '';
        section.textContent = '';
        section.appendChild(makeSidebar());
        section.appendChild(makeHomepage(currentProject));
    });
    document.addEventListener('click', (e) => {
        if (e.target !== event.target && e.target !== taskFormTitle) {
            setTimeout(() => {
                parentNode.textContent = '';
                parentNode.append(taskTitle, taskDescription);
              }, "250");
        }
    })
};

export const editTaskDescription = (event, parentNode, taskDescription, taskTitle, currentTask) => {
    let whatProject;
    let realProject;
    const project = JSON.parse(localStorage.getItem(currentProject));
    parentNode.textContent = '';
    parentNode.append(taskTitle, taskFormDescription);
    taskFormDescription.addEventListener('change', () => {
        project[currentTask.taskIndex].description = taskFormDescription.value;
        if (currentProject == 'Inbox') {
            whatProject = project[currentTask.taskIndex].whereFrom;
            realProject = JSON.parse(localStorage.getItem(whatProject));
            for (let i = 0; i < realProject.length; i++) {
                if (currentTask.taskName == realProject[i].title) {
                    realProject[i].description = taskFormDescription.value;
                }
            }
            localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
        }
        if (currentProject !== 'Inbox') {
            const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
            for (let i = 0; i < inboxProject.length; i++) {
                if (currentTask.taskName == inboxProject[i].title) {
                    inboxProject[i].description = taskFormDescription.value;
                }
            }
            localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        }
        localStorage.setItem(`${currentProject}`, JSON.stringify(project));
        projectTasks.textContent = '';
        section.textContent = '';
        section.appendChild(makeSidebar());
        section.appendChild(makeHomepage(currentProject));
    });
    document.addEventListener('click', (e) => {
        if (e.target !== event.target && e.target !== taskFormDescription) {
            setTimeout(() => {
                parentNode.textContent = '';
                parentNode.append(taskTitle, taskDescription);
              }, "250");
        }
    })
};

export const changeTaskCompletion = (currentTask, projectName) => {
    if (projectName == 'Inbox') {
        let whatProject;
        let realProject;
        const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
        whatProject = inboxProject[currentTask.taskIndex].whereFrom;
        realProject = JSON.parse(localStorage.getItem(whatProject));
        if (inboxProject[currentTask.taskIndex].completed) {
            inboxProject[currentTask.taskIndex].completed = false;
        } else {
            inboxProject[currentTask.taskIndex].completed = true; 
        }
        for (let i = 0; i < realProject.length; i++) {
            if (realProject[i].completed) {
                realProject[i].completed= false;
            } else {
                realProject[i].completed = true; 
            }
        }
        localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
    } else {
        const project = JSON.parse(localStorage.getItem(currentProject));
        const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
        if (project[currentTask.taskIndex].completed) {
            project[currentTask.taskIndex].completed = false;
        } else {
            project[currentTask.taskIndex].completed = true; 
        }
        for (let i = 0; i < inboxProject.length; i++) {
            if (inboxProject[i].completed) {
                inboxProject[i].completed= false;
            } else {
                inboxProject[i].completed = true; 
            }
        }
        localStorage.setItem(`${currentProject}`, JSON.stringify(project));
        localStorage.setItem('Inbox', JSON.stringify(inboxProject));
    }
}

taskForm.addEventListener('submit', createTask);

