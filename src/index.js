import "./scss/main.scss";
import { makeHomepage } from "./homepage";
import { inboxText, todayText, thisWeekText, makeSidebar, sidebar} from "./sidebar";
import { changeProject, createProject, projectForm, projectTitleForm, projectCancelButton, acceptButton, cancelButton as v, submitButton as s } from "./projectFunctions";
import { taskForm, submitButton, cancelButton } from "./taskFunctions";

export const section = document.querySelector('section');
section.appendChild(makeSidebar());
section.appendChild(makeHomepage('Inbox'));

const sidebarProjectList = createProject('Sidebar');

todayText.addEventListener('click', changeProject);
inboxText.addEventListener('click', changeProject);
thisWeekText.addEventListener('click', changeProject);

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');

sessionStorage.setItem('mode', 'light');

const switchDarkMode = (e) => {
    if (sessionStorage.getItem('mode') == 'light') {
        sessionStorage.setItem('mode', 'dark');
        header.classList.remove('light-mode2');
        header.classList.add('dark-mode2');
        footer.classList.remove('light-mode2');
        footer.classList.add('dark-mode2');
        container.classList.remove('light-mode1');
        container.classList.add('dark-mode1');  
        sidebar.classList.remove('light-mode1');
        sidebar.classList.add('dark-mode1'); 
        buttons.forEach(button => button.classList.remove('light-mode2'));
        buttons.forEach(button => button.classList.add('dark-mode2'));
        submitButton.classList.add('dark-mode2');
        submitButton.classList.remove('light-mode2');
        cancelButton.classList.add('dark-mode2');
        cancelButton.classList.remove('light-mode2');
        projectTitleForm.classList.remove('blue-one');
        projectTitleForm.classList.add('dark-mode1');
        projectCancelButton.classList.add('dark-mode2');
        projectCancelButton.classList.remove('light-mode2');
        acceptButton.classList.add('dark-mode2');
        acceptButton.classList.remove('light-mode2');
        v.classList.add('dark-mode2');
        v.classList.remove('light-mode2');
        s.classList.add('dark-mode2');
        s.classList.remove('light-mode2');
    } else {
        sessionStorage.setItem('mode', 'light');
        header.classList.add('light-mode2');
        header.classList.remove('dark-mode2');
        footer.classList.add('light-mode2');
        footer.classList.remove('dark-mode2');
        container.classList.add('light-mode1');
        container.classList.remove('dark-mode1'); 
        sidebar.classList.add('light-mode1');
        sidebar.classList.remove('dark-mode1'); 
        buttons.forEach(button => button.classList.add('light-mode2'));
        buttons.forEach(button => button.classList.remove('dark-mode2'));
        submitButton.classList.remove('dark-mode2');
        submitButton.classList.add('light-mode2');
        cancelButton.classList.remove('dark-mode2');
        cancelButton.classList.add('light-mode2');
        projectTitleForm.classList.remove('dark-mode1');
        projectTitleForm.classList.add('blue-one');
        projectCancelButton.classList.remove('dark-mode2');
        projectCancelButton.classList.add('light-mode2');
        acceptButton.classList.remove('dark-mode2');
        acceptButton.classList.add('light-mode2');
        v.classList.remove('dark-mode2');
        v.classList.add('light-mode2');
        s.classList.remove('dark-mode2');
        s.classList.add('light-mode2');
    }
}
const darkModeButton = document.querySelector('#dark-mode');
darkModeButton.addEventListener('click', switchDarkMode);