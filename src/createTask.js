import { projectBody } from "./homepage";

export const showTaskForm = (e) => {
    const taskForm = document.createElement('form');
    const taskFormTitle = document.createElement('input');
    const taskDescription = document.createElement('input');
    const taskDueDate = document.createElement('input');
    const dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let today = year + "-" + month + "-" + day;
    taskDueDate.type = 'date';
    taskDueDate.min="2022-01-01";
    taskDueDate.value = today;
    const taskButtonDiv = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    taskButtonDiv.append(submitButton, cancelButton);
    taskForm.append(taskFormTitle, taskDescription, taskDueDate, taskButtonDiv);
    projectBody.appendChild(taskForm);
}
