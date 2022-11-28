import "./scss/main.scss";
import { makeHomepage } from "./homepage";
import { inboxText, todayText, thisWeekText, makeSidebar } from "./sidebar";
import { changeProject, createProject } from "./projectFunctions";

export const section = document.querySelector('section');
section.appendChild(makeSidebar());
section.appendChild(makeHomepage('Inbox'));

const sidebarProjectList = createProject('Sidebar');

todayText.addEventListener('click', changeProject);
inboxText.addEventListener('click', changeProject);
thisWeekText.addEventListener('click', changeProject);
