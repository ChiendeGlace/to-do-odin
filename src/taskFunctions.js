import { section } from "./index";
import { currentProject, projectBody, hideForm, projectTasks, makeHomepage } from "./homepage";
import { makeSidebar } from "./sidebar";

export const taskForm = document.createElement('form');
taskForm.classList.add('light-mode-white');
taskForm.setAttribute("id", "task-form");
export const taskFormTitle = document.createElement('input');
taskFormTitle.minLength = '5';
taskFormTitle.placeholder = 'Title: Shopping';
taskFormTitle.required = 'true';
export const taskFormDescription = document.createElement('input');
taskFormDescription.placeholder = 'Details: e.g. do shopping tomorrow 6pm';
taskFormDescription.classList.add('task-form-description');
taskFormDescription.minLength = '5';
taskFormDescription.required = 'true';
export const taskDueDate = document.createElement('input');
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
export const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
export const cancelButton = document.createElement('button');
cancelButton.textContent = 'Cancel';
taskButtonDiv.append(submitButton, cancelButton);

const createTaskForm = () => {
    taskFormTitle.value = '';
    taskFormDescription.value = '';
    taskDueDate.value = '';
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
    for (let i = 0; i < project.length; i++) {
        if (project[i].name == taskFormTitle.value) {
            alert("Task names cannot repeat! Please change it.");
            hideForm()
            return 
        } 
    }
    const newTask = taskFactory(taskFormTitle.value, taskFormDescription.value, taskDueDate.value);
    project.push(newTask);
    localStorage.setItem(`${currentProject}`, JSON.stringify(project));
    projectTasks.textContent = '';
    hideForm();
    if (currentProject !== 'Inbox') {
        let project = JSON.parse(localStorage.getItem('Inbox'));
        project = [];
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) != 'Sidebar' && localStorage.key(i) != 'Inbox') {
                const projectTasks = JSON.parse(localStorage.getItem(localStorage.key(i)));
                projectTasks.forEach(projectTask => projectTask.whereFrom = localStorage.key(i));
                project = project.concat(...projectTasks);
            } 
            localStorage.setItem('Inbox', JSON.stringify(project));
        }
        for (let i = 0; i < project.length; i++) {
            if (project[i].priority == true) {
                console.log('hi');
                let taskCopy = project[i];
                project.splice(i, 1);
                project.unshift(taskCopy);
                localStorage.setItem('Inbox', JSON.stringify(project));
            }
        }

    }
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
                if (currentTaskName == inboxProject[i].title && inboxProject[i].whereFrom == currentProject) {
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

export const editTaskDate = (event, parentNode, dateNode, iconNode, currentTask, taskTitle, taskDescription, changeTaskTitle, changeTaskDescription) => {
    taskDueDate.value = '';
    if (projectBody.lastChild.id == 'task-form') {
        projectBody.removeChild(taskForm);
    }
    taskTitle.removeEventListener('click', changeTaskTitle);
    taskDescription.removeEventListener('click', changeTaskDescription);
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
                if (currentTask.taskName == inboxProject[i].title && inboxProject[i].whereFrom == currentProject) {
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
        taskTitle.addEventListener('click', changeTaskTitle);
        taskDescription.addEventListener('click', changeTaskDescription);
    });
    taskDueDate.addEventListener('mouseout', () => {
        setTimeout(() => {
            parentNode.textContent = '';
            parentNode.append(dateNode, iconNode);
          }, "250");
    })
};

export const editTaskTitle = (event, parentNode, taskTitle, taskDescription, currentTask, taskDate, changeTaskDescription, changeTaskDate) => {
    taskFormTitle.value = '';
    if (projectBody.lastChild.id == 'task-form') {
        projectBody.removeChild(taskForm);
    }
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
                if (currentTask.taskName == realProject[i].title && taskFormTitle.value.length > 5) {
                    realProject[i].title = taskFormTitle.value;
                }
            }
            localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
        }
        if (currentProject !== 'Inbox') {
            const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
            for (let i = 0; i < inboxProject.length; i++) {
                if (currentTask.taskName == inboxProject[i].title && inboxProject[i].whereFrom == currentProject && taskFormTitle.value.length > 5) {
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
    taskFormTitle.addEventListener('mouseout', () => {
        setTimeout(() => {
            parentNode.textContent = '';
            parentNode.append(taskTitle, taskDescription);
          }, "250");
    })
};

export const editTaskDescription = (event, parentNode, taskDescription, taskTitle, currentTask, taskTitle2, taskDate, changeTaskTitle, changeTaskDate) => {
    taskFormDescription.value = '';
    if (projectBody.lastChild.id == 'task-form') {
        projectBody.removeChild(taskForm);    if (projectBody.lastChild.id == 'task-form') {
            projectBody.removeChild(taskForm);
        }
    }
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
                if (currentTask.taskName == realProject[i].title && taskFormDescription.value.length > 5) {
                    realProject[i].description = taskFormDescription.value;
                }
            }
            localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
        }
        if (currentProject !== 'Inbox') {
            const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
            for (let i = 0; i < inboxProject.length; i++) {
                if (currentTask.taskName == inboxProject[i].title && inboxProject[i].whereFrom == currentProject && taskFormDescription.value.length > 5) {
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
    taskFormDescription.addEventListener('mouseout', () => {
        setTimeout(() => {
            parentNode.textContent = '';
            parentNode.append(taskTitle, taskDescription);
          }, "250");
    })
};

taskForm.addEventListener('submit', createTask);

