import "./scss/main.scss";
import { makeHomepage } from "./homepage";
import { inboxText, todayText, thisWeekText, makeSidebar, sidebar} from "./sidebar";
import { changeProject, createProject, projectForm } from "./projectFunctions";
import { taskForm } from "./taskFunctions";

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
const body = document.querySelector('body');


const switchDarkMode = (e) => {
    if (header.classList.contains('light-mode2')) {
        header.classList.remove('light-mode2');
        header.classList.add('dark-mode2');
        footer.classList.remove('light-mode2');
        footer.classList.add('dark-mode2');
        buttons.forEach(button => button.classList.add('dark-mode2'));
        container.classList.remove('light-mode1');
        container.classList.add('dark-mode1');  
        sidebar.classList.remove('light-mode1');
        sidebar.classList.add('dark-mode1'); 
    } else {
        header.classList.add('light-mode2');
        header.classList.remove('dark-mode2');
        footer.classList.add('light-mode2');
        footer.classList.remove('dark-mode2');
        buttons.forEach(button => button.classList.remove('dark-mode2'));
        container.classList.add('light-mode1');
        container.classList.remove('dark-mode1'); 
        sidebar.classList.add('light-mode1');
        sidebar.classList.remove('dark-mode1'); 
    }
}
const darkModeButton = document.querySelector('#dark-mode');
darkModeButton.addEventListener('click', switchDarkMode);
