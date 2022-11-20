import { createProject } from "./createProject";

const homepage = document.createElement('div');
homepage.classList.add('homepage');

const inbox = createProject('Inbox');
const today = createProject('Today');
const thisWeek = createProject('This week');


const taskAdder = document.createElement('div');
taskAdder.classList.add('task-adder');
const taskAdderIcon = document.createElement('i');
taskAdderIcon.classList.add('fa-solid');
taskAdderIcon.classList.add('fa-plus');
const taskAdderText = document.createElement('p');
taskAdderText.textContent = 'Add task';
taskAdder.append(taskAdderIcon, taskAdderText);

const projectBody = document.createElement('div');
projectBody.classList.add('project-body');
const projectTitle = document.createElement('h2');
const projectTasks = document.createElement('div');
projectTasks.classList.add('project-tasks');

projectBody.append(projectTitle, projectTasks, taskAdder);

const renderProject = (projectName) => {
    const project = JSON.parse(localStorage.getItem(projectName));
    projectTitle.textContent = projectName;
    // replace with renderTasks function;
    if (!project == []) {
        for (let i = 0; i < project.length; i++) {
            const taskBox = document.createElement('div');
            const taskTitle = document.createElement('p');
            taskTitle.textContent = 'random title';
            taskBox.appendChild(taskTitle);
            projectTasks.appendChild(taskBox);
        }
    }
    return projectBody;
};


export const makeHomepage = () => {
    homepage.appendChild(renderProject('Inbox'));
    return homepage;
}