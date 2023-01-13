// TODO A felhaszn. hozzáadja a taskot, ezután az megjelenik az oldalon és egy projekt részévé válik.
// ! Kell egy task és egy projektgenerátor és valami, ami a taskokat hozzárendeli és berakja a taskok alá

import { projects, activeProjectGlobal } from "./addProjects.js";
import { toggleHide } from "./util.js";
import { taskIntakePopup } from "./index.js";


class Task {
    constructor(name, desc, prio, dueDate) {
        this.name = name;
        this.description = desc;
        this.priority = prio;
        this.dueDate = dueDate;
    }
}

export function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTask = new Task(formData.get('task-name'),formData.get('task-description'),formData.get('priority'), formData.get('due-date'));
    console.log({projects, activeProjectGlobal});
    activeProjectGlobal.tasks.push(newTask);

    updateDomWithNewTask(newTask);
    toggleHide(taskIntakePopup);
}

function updateDomWithNewTask(taskObj) {
    const taskTemplate = `
    <li class="task ${taskObj.name}">
        <h4>${taskObj.name}</h4>
        <p>${taskObj.description}</p>
        <p>${taskObj.priority}</p>
        <p>${taskObj.dueDate}</p>
    </li>
    `;

    document.querySelector('.project-tasks').insertAdjacentHTML('beforeend', taskTemplate);
}