import { createProject, changeTitle } from "./projectFunctions";
import { makeTaskForm, cancelButton, deleteTask, editTaskDate, editTaskTitle, editTaskDescription, taskForm } from "./taskFunctions";

export let currentProject; 

export const homepage = document.createElement('div');
homepage.classList.add('homepage');

const inbox = createProject('Inbox');
const today = createProject('Today');
const thisWeek = createProject('This week');

export const taskAdder = document.createElement('div');
taskAdder.classList.add('task-adder');
const taskAdderIcon = document.createElement('i');
taskAdderIcon.classList.add('fa-solid');
taskAdderIcon.classList.add('fa-plus');
const taskAdderText = document.createElement('p');
taskAdderText.textContent = 'Add task';
taskAdder.append(taskAdderIcon, taskAdderText);

export const projectBody = document.createElement('div');
projectBody.classList.add('project-body');
export const projectTitleDiv = document.createElement('div');
export const projectTitle = document.createElement('h2');
projectTitleDiv.appendChild(projectTitle);
export const projectTasks = document.createElement('div');
projectTasks.classList.add('project-tasks');

const renderTasks = (project) => {
    if (!project == []) {
        for (let i = 0; i < project.length; i++) {
            const taskBox = document.createElement('div');
            taskBox.classList.add('task-box');
            const taskTitle = document.createElement('p');
            taskTitle.classList.add('task-title');
            const taskIcon = document.createElement('i');
            taskIcon.classList.add('fa-solid');
            taskIcon.classList.add('fa-xmark');
            const taskDescription = document.createElement('p');
            const taskDate = document.createElement('p');
            taskTitle.textContent = project[i].title;
            taskDescription.textContent = project[i].description;
            taskDate.textContent = project[i].date;
            const taskInfo = document.createElement('div');
            const taskText = document.createElement('div');
            taskText.classList.add('task-text')
            taskText.append(taskTitle, taskDescription);
            taskInfo.classList.add('task-info');
            taskInfo.append(taskDate,taskIcon);
            taskBox.append(taskText, taskInfo);
            projectTasks.appendChild(taskBox);
            
            const currentTask = {
                projectName : project,
                taskIndex: i
            }

            taskIcon.addEventListener('click', deleteTask);
            taskTitle.addEventListener('click', () => { editTaskTitle(taskText, taskTitle, taskDescription, currentTask) });
            taskDate.addEventListener('click', () => { editTaskDate(taskInfo, taskDate, taskIcon, currentTask) });
            taskDescription.addEventListener('click', () => { editTaskDescription(taskText, taskDescription, taskTitle, currentTask) });
        }
    } 
}

const renderProject = (projectName) => {
    if (projectBody.contains(taskForm)) {
        projectBody.removeChild(taskForm);
    }
    currentProject = projectName;
    const project = JSON.parse(localStorage.getItem(projectName));
    projectBody.append(projectTitleDiv, projectTasks, taskAdder);
    projectTitle.textContent = projectName;
    if (projectName == 'Inbox' || projectName == 'Today' || projectName == 'This week') {
        projectTitle.removeEventListener('click', changeTitle);
    } else {
        projectTitle.addEventListener('click', changeTitle);
    }
    taskAdder.addEventListener('click', makeTaskForm);
    renderTasks(project);
    return projectBody;
};

export const makeHomepage = (projectName) => {
    homepage.appendChild(renderProject(projectName));
    return homepage;
}
export const hideForm = (e) => {
    projectBody.textContent = '';
    projectTasks.textContent = '';
    homepage.appendChild(renderProject(currentProject));
}

cancelButton.addEventListener('click', hideForm);
