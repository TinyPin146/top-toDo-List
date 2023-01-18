import * as util from './util.js';
import * as projects from './projects.js';
import * as tasks from './tasks';
import * as sortedTasks from './sortDueDate.js';

const buttonNewTask = document.querySelector('.button--new-task');
export const taskIntakePopup = document.querySelector('.wrapper--task-intake');
const addNewProjectInputBtn = document.querySelector('#add-new-project-btn');
const taskIntakeForm = document.querySelector('#task-intake-form');


function handleNewTaskBtn() {
    util.toggleHide(taskIntakePopup);
}

buttonNewTask.addEventListener('click', handleNewTaskBtn);
taskIntakePopup.addEventListener('click', util.toggleHideOnPopup);
addNewProjectInputBtn.addEventListener('click', projects.addProject);
taskIntakeForm.addEventListener('submit', tasks.addTask);

projects.addProject('Default');