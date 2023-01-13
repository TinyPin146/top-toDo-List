import { format } from 'date-fns';
import * as util from './util.js';
import * as projects from './addProjects.js'

const buttonNewTask = document.querySelector('.button--new-task');
const taskIntakePopup = document.querySelector('.wrapper--task-intake');
export const addNewProjectInputBtn = document.querySelector('#add-new-project-btn');

function handleNewTaskBtn() {
    util.toggleHide(taskIntakePopup);
}

buttonNewTask.addEventListener('click', handleNewTaskBtn);
taskIntakePopup.addEventListener('click', util.toggleHideOnPopup);
addNewProjectInputBtn.addEventListener('click', projects.addProject)