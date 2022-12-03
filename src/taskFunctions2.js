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
            if (currentTask.taskName == inboxProject[i].title) {
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
        } else {
            inboxProject[currentTask.taskIndex].priority = true; 
        }
        for (let i = 0; i < realProject.length; i++) {
            if (realProject[i].title == currentTask.taskName) {
                if (realProject[i].priority == true) {
                    realProject[i].priority = false;
                    realProject.splice(i, 1);
                    realProject.push(taskCopy);
                } else {
                    realProject[i].priority = true; 
                    realProject.splice(i, 1);
                    realProject.unshift(taskCopy);
                }  
            }
        }
        localStorage.setItem('Inbox', JSON.stringify(inboxProject));
        localStorage.setItem(`${whatProject}`, JSON.stringify(realProject));
    } else {
        const project = JSON.parse(localStorage.getItem(currentProject));
        let taskCopy = project[currentTask.taskIndex];
        const inboxProject = JSON.parse(localStorage.getItem('Inbox'));
        if (project[currentTask.taskIndex].priority == true) {
            project[currentTask.taskIndex].priority = false;
            project.splice(currentTask.taskIndex, 1);
            project.push(taskCopy);
        } else {
            project[currentTask.taskIndex].priority = true; 
            project.splice(currentTask.taskIndex, 1);
            project.unshift(taskCopy);
        }
        for (let i = 0; i < inboxProject.length; i++) {
            if (inboxProject[i].taskName == currentTask.taskName) {
                if (inboxProject[i].priority == true) {
                    inboxProject[i].priority = false;
                } else {
                    inboxProject[i].priority = true; 
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