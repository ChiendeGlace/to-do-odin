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
    return { title, description, date };
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

export const deleteTask = (e) => {
    const currentTaskName = e.target.parentNode.parentNode.firstChild.firstChild;
    const project = JSON.parse(localStorage.getItem(currentProject));
    for (let i = 0; i < project.length; i++) {
        if (currentTaskName.textContent == project[i].title) {
            project.splice(i, 1);
        }
    }
    localStorage.setItem(`${currentProject}`, JSON.stringify(project));
    projectTasks.textContent = '';
    section.textContent = '';
    section.appendChild(makeSidebar());
    section.appendChild(makeHomepage(currentProject));
};

export const editTaskDate = (parentNode, dateNode, iconNode, currentTask) => {
    const project = JSON.parse(localStorage.getItem(currentProject));
    parentNode.textContent = '';
    parentNode.append(taskDueDate, iconNode);
    taskDueDate.addEventListener('change', () => {
        project[currentTask.taskIndex].date = taskDueDate.value;
        localStorage.setItem(`${currentProject}`, JSON.stringify(project));
        projectTasks.textContent = '';
        section.textContent = '';
        section.appendChild(makeSidebar());
        section.appendChild(makeHomepage(currentProject));
    });
    taskDueDate.addEventListener('mouseout', () => {
        setTimeout(() => {
            parentNode.textContent = '';
            parentNode.append(dateNode, iconNode);
          }, "250");
    })
};

export const editTaskTitle = (parentNode, taskTitle, taskDescription, currentTask) => {
    const project = JSON.parse(localStorage.getItem(currentProject));
    parentNode.textContent = '';
    parentNode.append(taskFormTitle, taskDescription);
    taskFormTitle.addEventListener('change', () => {
        project[currentTask.taskIndex].title = taskFormTitle.value;
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

export const editTaskDescription = (parentNode, taskDescription, taskTitle, currentTask) => {
    const project = JSON.parse(localStorage.getItem(currentProject));
    parentNode.textContent = '';
    parentNode.append(taskTitle, taskFormDescription);
    taskFormDescription.addEventListener('change', () => {
        project[currentTask.taskIndex].description = taskFormDescription.value;
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

