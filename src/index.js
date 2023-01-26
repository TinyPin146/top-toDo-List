import * as util from './util.js';
import * as projects from './projects.js';
import * as tasks from './tasks';
import * as sortedTasks from './sortTasks.js';
import {loadProjectsInLclStorage} from './localStorage.js'

const buttonNewTask = document.querySelector('.button--new-task');
export const taskIntakePopup = document.querySelector('.wrapper--task-intake');
const addNewProjectInputBtn = document.querySelector('#add-new-project-btn');
const taskIntakeForm = document.querySelector('#task-intake-form');
export const defaultProjectName = 'My Projectspace'; 

buttonNewTask.addEventListener('click', () => util.toggleHide(taskIntakePopup));
taskIntakePopup.addEventListener('click', util.toggleHideOnPopup);
addNewProjectInputBtn.addEventListener('click', projects.addProject);
taskIntakeForm.addEventListener('submit', tasks.addTask);

if (localStorage.length > 0) {
    loadProjectsInLclStorage();
} else {
    projects.addProject(defaultProjectName);
}