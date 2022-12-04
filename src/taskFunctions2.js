import { makeSidebar } from "./sidebar";
import { section } from "./index";
import { currentProject, projectTasks, makeHomepage } from "./homepage";

export const displayCompletion = (taskDate, taskTitle, taskDescription, taskCheckOff) => {
    taskDate.style.color = '#15803d';
    taskDate.style.fontWeight = 'bold';
    taskTitle.style.textDecoration = 'line-through';
    taskTitle.style.textDecorationColor = '#15803d';
    taskTitle.style.textDecorationThickness = '2px';
    taskDescription.style.textDecoration = 'line-through';
    taskDescription.style.textDecorationColor = '#15803d';
    taskDescription.style.textDecorationThickness = '2px';
    taskCheckOff.classList.add('fa-sharp');
    taskCheckOff.classList.add('fa-solid');
    taskCheckOff.classList.remove('fa-regular');
    taskCheckOff.style.color = '#15803d';
}

export const displayNotCompleted = (taskDate, taskTitle, taskDescription, taskCheckOff) => {
    taskDate.style.color = 'black';
    taskDate.style.fontWeight = 'normal';
    taskTitle.style.textDecoration = 'none';
    taskDescription.style.textDecoration = 'none';
    taskCheckOff.classList.remove('fa-sharp');
    taskCheckOff.classList.remove('fa-solid');
    taskCheckOff.classList.add('fa-regular');
    taskCheckOff.style.color = 'black';
}

export const changeTaskCompletion = (currentTask, projectName) => {
    if (projectName == 'Inbox') {
        let whatProject;
        let realProject;
        const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
        whatProject = inboxProject[currentTask.taskIndex].whereFrom;
        realProject = JSON.parse(localStorage.getItem(whatProject));
        if (inboxProject[currentTask.taskIndex].completed == true) {
            inboxProject[currentTask.taskIndex].completed = false;
        } else {
            inboxProject[currentTask.taskIndex].completed = true; 
        }
        for (let i = 0; i < realProject.length; i++) {
            if (currentTask.taskName == realProject[i].title) {
                if (realProject[i].completed == true) {
                    realProject[i].completed = false;
                } else {
                    realProject[i].completed = true; 
                }
            }
        }
        localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
    } else if (projectName !== 'Inbox') {
        const project = JSON.parse(localStorage.getItem(currentProject));
        const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
        if (project[currentTask.taskIndex].completed == true) {
            project[currentTask.taskIndex].completed = false;
        } else {
            project[currentTask.taskIndex].completed = true; 
        }
        for (let i = 0; i < inboxProject.length; i++) {
            if (currentTask.taskName == inboxProject[i].title && inboxProject[i].whereFrom == currentProject) {
                if (inboxProject[i].completed == true) {
                    inboxProject[i].completed = false;
                } else {
                    inboxProject[i].completed = true; 
                }
            }
        }
        localStorage.setItem(`${currentProject}`, JSON.stringify(project));
        localStorage.setItem('Inbox', JSON.stringify(inboxProject));
    }
    projectTasks.textContent = '';
    section.textContent = '';
    section.appendChild(makeSidebar());
    section.appendChild(makeHomepage(currentProject));
}

export const displayPriority= (taskPriority, taskTitle, taskDescription) => {
    taskPriority.classList.add('fa-solid');
    taskPriority.classList.remove('fa-regular');
    taskPriority.style.color = '#eab308';
    taskTitle.style.fontWeight = 'bold';
    taskTitle.style.color = '#eab308';
}

export const displayNotPrioritized = (taskPriority, taskTitle, taskDescription) => {
    taskPriority.classList.remove('fa-solid');
    taskPriority.classList.add('fa-regular');
    taskPriority.style.color = 'black';
    taskTitle.style.fontWeight = 'normal';
    taskTitle.style.color = 'black';
}


export const changeTaskPriority = ( currentTask, projectName) => {
    if (projectName == 'Inbox') {
        let whatProject;
        let realProject;
        const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
        let taskCopy = inboxProject[currentTask.taskIndex];
        whatProject = inboxProject[currentTask.taskIndex].whereFrom;
        realProject = JSON.parse(localStorage.getItem(whatProject));
        if (inboxProject[currentTask.taskIndex].priority) {
            inboxProject[currentTask.taskIndex].priority = false;
            inboxProject.splice(currentTask.taskIndex, 1);
            inboxProject.push(taskCopy);
            localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        } else {
            inboxProject[currentTask.taskIndex].priority = true; 
            inboxProject.splice(currentTask.taskIndex, 1);
            inboxProject.unshift(taskCopy);
            localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        }
        let realIndex;
        for (let i = 0; i < realProject.length; i++) {
            if (realProject[i].title == currentTask.taskName) {
                realIndex = i
            }
        }
        if (realProject[realIndex].priority == true) {
            realProject[realIndex].priority = false;
            realProject.splice(realIndex, 1);
            realProject.push(taskCopy);
            localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
        } else {
            realProject[realIndex].priority = true; 
            realProject.splice(realIndex, 1);
            realProject.unshift(taskCopy);
            localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
        }  
    } else {
        const project = JSON.parse(localStorage.getItem(currentProject));
        let taskCopy = project[currentTask.taskIndex];
        const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
        if (project[currentTask.taskIndex].priority == true) {
            project[currentTask.taskIndex].priority = false;
            project.splice(currentTask.taskIndex, 1);
            project.push(taskCopy);
            localStorage.setItem(`${currentProject}`, JSON.stringify(project));
        } else {
            project[currentTask.taskIndex].priority = true; 
            project.splice(currentTask.taskIndex, 1);
            project.unshift(taskCopy);
            localStorage.setItem(`${currentProject}`, JSON.stringify(project));
        }
        let inboxIndex;
        for (let i = 0; i < inboxProject.length; i++) {
            if (inboxProject[i].title == currentTask.taskName && inboxProject[i].whereFrom == currentProject) { 
                inboxIndex = i;
            }
        }
        if (inboxProject[inboxIndex].priority == true) {
            inboxProject[inboxIndex].priority = false;
            inboxProject.splice(inboxIndex, 1);
            inboxProject.push(taskCopy);
            localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        } else {
            inboxProject[inboxIndex].priority = true; 
            inboxProject.splice(inboxIndex, 1);
            inboxProject.unshift(taskCopy);
            localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        }
    }  
    projectTasks.textContent = '';
    section.textContent = '';
    section.appendChild(makeSidebar());
    section.appendChild(makeHomepage(currentProject));
}