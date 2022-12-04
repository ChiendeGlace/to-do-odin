import { createProject, changeTitle } from "./projectFunctions";
import { makeTaskForm, cancelButton, deleteTask, editTaskDate, editTaskTitle, editTaskDescription, taskForm} from "./taskFunctions";
import { displayCompletion, displayNotCompleted, changeTaskCompletion, changeTaskPriority, displayNotPrioritized, displayPriority} from "./taskFunctions2";

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

const renderTasks = (project, projectName) => {
    if (!project == []) {
        for (let i = 0; i < project.length; i++) {
            const taskBox = document.createElement('div');
            taskBox.setAttribute("id", "task-box");
            taskBox.classList.add('light-mode-white');
            const taskTitle = document.createElement('p');
            taskTitle.classList.add('task-title');
            const taskIcon = document.createElement('i');
            taskIcon.classList.add('fa-solid');
            taskIcon.classList.add('fa-xmark');
            const taskDescription = document.createElement('p');
            const taskDate = document.createElement('p');
            taskTitle.textContent = project[i].title;
            taskTitle.style.cursor = 'pointer';
            taskDescription.textContent = project[i].description;
            taskDescription.style.cursor = 'pointer';
            taskDate.textContent = project[i].date;
            taskDate.style.cursor = 'pointer';
            const taskInfo = document.createElement('div');
            const taskText = document.createElement('div');
            taskText.classList.add('task-text');
            const taskTitleHolder = document.createElement('div');
            taskTitleHolder.appendChild(taskTitle);
            taskTitleHolder.classList.add('task-title-holder');
            const taskFunctionals = document.createElement('div');
            taskFunctionals.classList.add('task-functionals')
            const taskPriority = document.createElement('i');
            taskPriority.classList.add('fa-regular');
            taskPriority.classList.add('fa-star');
            taskPriority.style.cursor = 'pointer';
            const taskCheckOff = document.createElement('i');
            taskCheckOff.classList.add('fa-regular');
            taskCheckOff.classList.add('fa-circle-check');
            taskCheckOff.style.cursor = 'pointer';
            taskFunctionals.append(taskPriority, taskCheckOff);
            if (projectName == 'Inbox') {
                const whereFrom = document.createElement('p');
                whereFrom.textContent = `(From: ${project[i].whereFrom})`;
                taskTitleHolder.appendChild(whereFrom);
            }
            taskText.append(taskTitleHolder, taskDescription);
            taskInfo.classList.add('task-info');
            taskInfo.append(taskDate,taskIcon);
            taskBox.append(taskFunctionals, taskText, taskInfo);
            taskIcon.style.cursor = 'pointer';
            projectTasks.appendChild(taskBox);
            
            const currentTask = {
                taskName: taskTitle.textContent,
                projectName : project,
                taskIndex: i
            }
            const changeTaskTitle = (e) => {editTaskTitle(e, taskText, taskTitleHolder, taskDescription, currentTask)};
            const changeTaskDate = (e) => {editTaskDate(e, taskInfo, taskDate, taskIcon, currentTask)};
            const changeTaskDescription = (e) => {editTaskDescription(e, taskText, taskDescription, taskTitleHolder, currentTask)};
            const editTaskPriority = (e) => {changeTaskPriority(currentTask, projectName)}

            taskIcon.addEventListener('click', () => deleteTask(currentTask));
            taskTitle.addEventListener('click', changeTaskTitle);
            taskDate.addEventListener('click', changeTaskDate);
            taskDescription.addEventListener('click', changeTaskDescription);
            taskCheckOff.addEventListener('click', () => { changeTaskCompletion(currentTask, projectName)});
            taskPriority.addEventListener('click', editTaskPriority);

            if (project[i].completed == true) {
                displayCompletion(taskDate, taskTitle, taskDescription, taskCheckOff);
                taskPriority.removeEventListener('click', editTaskPriority);
                taskTitle.removeEventListener('click', changeTaskTitle);
                taskDate.removeEventListener('click', changeTaskDate);
                taskDescription.removeEventListener('click', changeTaskDescription);
            } else {
                displayNotCompleted(taskDate, taskTitle, taskDescription, taskCheckOff);
                taskPriority.addEventListener('click', editTaskPriority);
                taskTitle.addEventListener('click', changeTaskTitle);
                taskDate.addEventListener('click', changeTaskDate);
                taskDescription.addEventListener('click', changeTaskDescription);
            }
            if (project[i].priority == true) {
                displayPriority(taskPriority, taskTitle, taskDescription);
            } else {
                displayNotPrioritized(taskPriority, taskTitle, taskDescription);
            }
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
    if (projectName == 'Inbox') {
        projectBody.removeChild(taskAdder);
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
    projectTitle.textContent = projectName;
    if (projectName == 'Inbox' || projectName == 'Today' || projectName == 'This week') {
        projectTitle.removeEventListener('click', changeTitle);
    } else {
        projectTitle.addEventListener('click', changeTitle);
        projectTitle.style.cursor = 'pointer';
    }
    taskAdder.addEventListener('click', makeTaskForm);
    renderTasks(project, projectName);
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
