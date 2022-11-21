import { makeHomepage } from "./homepage";

const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');

const sidebarDefault = document.createElement('div');
sidebarDefault.classList.add('sidebar-default');

const inboxLabel = document.createElement('div');
const inboxIcon = document.createElement('i');
inboxIcon.classList.add('fa-solid');
inboxIcon.classList.add('fa-inbox');
const inboxText = document.createElement('p');
inboxText.textContent = 'Inbox';
inboxLabel.append(inboxIcon, inboxText);

const todayLabel = document.createElement('div');
const todayIcon = document.createElement('i');
todayIcon.classList.add('fa-solid');
todayIcon.classList.add('fa-calendar-day');
const todayText = document.createElement('p');
todayText.textContent = 'Today';
todayLabel.append(todayIcon, todayText);

const thisWeekLabel = document.createElement('div');
const thisWeekIcon = document.createElement('i');
thisWeekIcon.classList.add('fa-solid');
thisWeekIcon.classList.add('fa-calendar-week');
const thisWeekText = document.createElement('p');
thisWeekText.textContent = 'This week';
thisWeekLabel.append(thisWeekIcon, thisWeekText);

sidebarDefault.append(inboxLabel, todayLabel, thisWeekLabel);

const sidebarProjects = document.createElement('div');
sidebarProjects.classList.add('sidebar-projects');
const sidebarProjectsTitle = document.createElement('h2');
sidebarProjectsTitle.textContent = 'Projects';

const sidebarProjectsAdder = document.createElement('div');
sidebarProjectsAdder.classList.add('sidebar-projects-adder');
const projectsAdderIcon = document.createElement('i');
projectsAdderIcon.classList.add('fa-solid');
projectsAdderIcon.classList.add('fa-plus');
const projectsAdderText = document.createElement('p');
projectsAdderText.textContent = 'Add project';
sidebarProjectsAdder.append(projectsAdderIcon, projectsAdderText);

sidebarProjects.append(sidebarProjectsTitle, sidebarProjectsAdder);

export const makeSidebar = () => {
    sidebar.append(sidebarDefault, sidebarProjects);
    return sidebar;
}

const headerI = document.querySelector('#header-i');
const section = document.querySelector('section');
const changeStatus = (e) => {
    if (section.childElementCount == 2) {
        section.textContent = '';
        section.appendChild(makeHomepage());
    } else {
        section.textContent = '';
        section.appendChild(makeSidebar());
        section.appendChild(makeHomepage());
    }
};
headerI.addEventListener('click', changeStatus);