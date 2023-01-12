import { format } from 'date-fns';

const buttonNewTask = document.querySelector('.button--new-task');
const taskIntakePopup = document.querySelector('.wrapper--task-intake');

function handleNewTaskBtn() {
    toggleHide(taskIntakePopup);
}

function toggleHide(el) {
    el.classList.toggle('hidden');
}

function toggleHideOnPopup(e) {
    if (this !== e.target) return;
    e.target.classList.toggle('hidden')
}

buttonNewTask.addEventListener('click', handleNewTaskBtn);
taskIntakePopup.addEventListener('click', toggleHideOnPopup);