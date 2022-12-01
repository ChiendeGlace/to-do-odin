import { section } from './index';
import { makeHomepage, projectTasks, projectTitle, projectTitleDiv, currentProject } from './homepage.js';
import { makeSidebar, sidebarForm, sidebarProjectsAdder, sidebarCreatedProjects } from "./sidebar";

export const changeProject = (e) => {
    const projectName = e.target.textContent;
    projectTasks.textContent = '';
    section.textContent = '';
    section.appendChild(makeSidebar());
    section.appendChild(makeHomepage(projectName));
    sidebarCreatedProjects.textContent = '';
    renderSidebarProjects();
}


export const createProject = (name) => {
    const projectName = name;
    const project = JSON.parse(localStorage.getItem(name)) || [];
    localStorage.setItem(`${projectName}`, JSON.stringify(project));
    return project;
}


const projectForm = document.createElement('form');
projectForm.classList.add('project-form');
export const projectFormInput = document.createElement('input');
projectFormInput.minLength = '3';
projectFormInput.placeholder = 'Project Name';
projectFormInput.required = 'true';
const projectButtonDiv = document.createElement('div');
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
export const cancelButton = document.createElement('button');
cancelButton.textContent = 'Cancel';
projectButtonDiv.append(submitButton, cancelButton);

const hideForm = (e) => {
    sidebarForm.textContent = '';
}

const createProjectForm = () => {
    projectForm.append(projectFormInput, projectButtonDiv)
    return projectForm;
}

export const makeProjectForm = (e) => {
    sidebarForm.appendChild(createProjectForm());
}

const warning = document.createElement('div');
const warningMessage = document.createElement('p');
warningMessage.textContent = 'Are you sure you want to delete the project?';
const projectCancelButton = document.createElement('button');
projectCancelButton.textContent = 'No';
const acceptButton = document.createElement('button');
acceptButton.textContent = 'Yes';
const buttonDiv = document.createElement('div');
buttonDiv.append(acceptButton, projectCancelButton);
warning.append(warningMessage, buttonDiv);

const makeProjectWarning = (projectBox, projectIcon, projectTitle, projectMenu) => {
    projectBox.textContent = '';
    projectBox.appendChild(warning);
}

const hideWarning = (e) => {
    sidebarCreatedProjects.textContent = '';
    renderSidebarProjects();
};

const deleteProject = (projectName) => {
    let arrayIndex;
    const sidebarProjects = JSON.parse(localStorage.getItem('Sidebar')) || [];
    for (let i = 0; i < sidebarProjects.length; i++) {
        if (sidebarProjects[i] == projectName) {
            arrayIndex = i;
        }
    }
    sidebarProjects.splice(arrayIndex, 1);
    localStorage.setItem('Sidebar', JSON.stringify(sidebarProjects));
    localStorage.removeItem(`${projectName}`);
    sidebarCreatedProjects.textContent = '';
    renderSidebarProjects();
};

export const renderSidebarProjects = () => {
    const sidebarProjects = JSON.parse(localStorage.getItem('Sidebar')) || [];
    if (sidebarProjects.length > 0) {
        for (let i = 0; i < sidebarProjects.length; i++) {
            const sidebarProjectBox = document.createElement('div');
            sidebarProjectBox.classList.add('sidebar-project-box');
            const sidebarProjectIcon = document.createElement('i');
            sidebarProjectIcon.classList.add('fa-solid');
            sidebarProjectIcon.classList.add('fa-folder');
            const sidebarProjectTitle = document.createElement('p');
            sidebarProjectTitle.style.cursor = 'pointer';
            sidebarProjectTitle.textContent = sidebarProjects[i];
            const sidebarProjectMenu = document.createElement('i');
            sidebarProjectMenu.style.cursor = 'pointer';
            sidebarProjectMenu.classList.add('fa-solid');
            sidebarProjectMenu.classList.add('fa-xmark');
            sidebarProjectBox.append(sidebarProjectIcon, sidebarProjectTitle, sidebarProjectMenu);
            sidebarCreatedProjects.appendChild(sidebarProjectBox);
            sidebarProjectTitle.addEventListener('click', changeProject);
            sidebarProjectMenu.addEventListener('click', () => makeProjectWarning(sidebarProjectBox, sidebarProjectIcon, sidebarProjectTitle, sidebarProjectMenu));
            acceptButton.addEventListener('click', () => deleteProject(sidebarProjectTitle.textContent));
        }
    }
}


const appendProject = (e) => {
    e.preventDefault();
    createProject(projectFormInput.value);
    const sidebarProjectList = JSON.parse(localStorage.getItem('Sidebar')) || [];
    sidebarProjectList.push(projectFormInput.value);
    localStorage.setItem('Sidebar', JSON.stringify(sidebarProjectList));
    renderSidebarProjects();
    hideForm();
}

export const projectTitleForm = document.createElement('input');
projectTitleForm.classList.add('blue-one');
projectTitleForm.minLength = '3';
projectTitleForm.placeholder = 'Project Name';
projectTitleForm.required = 'true';

export const changeTitle = (e) => {
    let index;
    let arrayIndex;
    const project = JSON.parse(localStorage.getItem(currentProject));
    const sidebarProjectList = JSON.parse(localStorage.getItem('Sidebar')) || [];
    projectTitleDiv.textContent = '';
    projectTitleDiv.appendChild(projectTitleForm);
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == currentProject) {
            index = i;
        }
    }
    for (let i = 0; i < sidebarProjectList.length; i++) {
        if (sidebarProjectList[i] == currentProject) {
            arrayIndex = i;
        }
    }
    projectTitleForm.addEventListener('change', () => {
        if (projectTitleForm.value.length >= 3) {
            localStorage.setItem(`${projectTitleForm.value}`, JSON.stringify(project));
            localStorage.removeItem(currentProject);
            sidebarProjectList[arrayIndex] = projectTitleForm.value;
            localStorage.setItem('Sidebar', JSON.stringify(sidebarProjectList));
            sidebarCreatedProjects.textContent = '';
            renderSidebarProjects();
            currentProject = projectTitleForm.value;
            projectTitleDiv.textContent = '';
            projectTitle.textContent = projectTitleForm.value;
            projectTitleDiv.appendChild(projectTitle);
        } 
    })
    projectTitleForm.addEventListener('mouseout', () => {
        setTimeout(() => {
            projectTitleDiv.textContent = '';
            projectTitleDiv.appendChild(projectTitle);
          }, "250");
    })
}

sidebarProjectsAdder.addEventListener('click', makeProjectForm);
cancelButton.addEventListener('click', hideForm);
projectForm.addEventListener('submit', appendProject); 
projectCancelButton.addEventListener('click', hideWarning);