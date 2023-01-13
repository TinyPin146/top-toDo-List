import { format } from 'date-fns';
import * as util from './util.js';
import * as projects from './addProjects.js';
import * as tasks from './addTasks';

const buttonNewTask = document.querySelector('.button--new-task');
export const taskIntakePopup = document.querySelector('.wrapper--task-intake');
const addNewProjectInputBtn = document.querySelector('#add-new-project-btn');
const taskConfirmBtn = taskIntakePopup.querySelector('#task-confirm-btn');
const taskIntakeForm = document.querySelector('#task-intake-form');


function handleNewTaskBtn() {
    util.toggleHide(taskIntakePopup);
}

buttonNewTask.addEventListener('click', handleNewTaskBtn);
taskIntakePopup.addEventListener('click', util.toggleHideOnPopup);
addNewProjectInputBtn.addEventListener('click', projects.addProject);
taskIntakeForm.addEventListener('submit', tasks.addTask);

projects.addProject('Default');
