// TODO A felhaszn. hozzáadja a taskot, ezután az megjelenik az oldalon és egy projekt részévé válik.
// ! Kell egy task és egy projektgenerátor és valami, ami a taskokat hozzárendeli és berakja a taskok alá

import { projects, activeProjectGlobal } from "./projects.js";
import { toggleHide } from "./util.js";
import { taskIntakePopup } from "./index.js";

class Task {
    constructor(name, desc, prio, dueDate) {
        this.name = name;
        this.description = desc;
        this.priority = prio;
        this.dueDate = dueDate;
        this.project = activeProjectGlobal.name;
    }

    attachEventListener() {
        // * taskCard
        const taskDomElem = document.querySelector(`.${this.name}`);
        // * Complete icon & eventListener
        const taskIconCompleteBtn = taskDomElem.querySelector('.taskIcon-complete--btn');
        taskIconCompleteBtn.addEventListener('click', this.taskComplete.bind(this)); 
        // * Delete icon & eventListener
        const taskIconDeleteBtn = taskDomElem.querySelector('.taskIcon-delete--btn');
        taskIconDeleteBtn.addEventListener('click', this.taskDelete.bind(this));
        // * Mod icon & eventListener
        const taskIconModifyBtn = taskDomElem.querySelector('.taskIcon-modify--btn');
        taskIconModifyBtn.addEventListener('click', this.taskModify.bind(this));

    }

    get getTaskDomElem() {
        return document.querySelector(`.${this.name}`);
    }

    taskComplete(e) {
        const taskCard = e.currentTarget.closest(`.${this.name}`);
        taskCard.classList.toggle('done');

        // let undoneBtn = `<button type="button" class="taskIcon-uncomplete--btn">Undo task</button>`
        // this.getTaskDomElem.insertAdjacentHTML('beforeend', undoneBtn);
        // undoneBtn = this.getTaskDomElem.querySelector('.taskIcon-uncomplete--btn');
        // undoneBtn.addEventListener('click', this.taskUncomplete.bind(this));
        // undoneBtn.style.opacity = 1;
    } 

    taskDelete() {
        const confirmDelete = confirm('Are you sure to delete this task item?');
        if (!confirmDelete) return;

        const indexOfTask = projects[this.project].tasks.map(task => {
            return task.name
        })
        .findIndex(taskName => {
            return taskName === this.name;
        });
        projects[this.project].tasks.splice(indexOfTask, 0);
        this.getTaskDomElem.parentElement.removeChild(this.getTaskDomElem);
    }

    taskModify(e) {
        console.log(e);
        Task.insertModifyingForm(this.getTaskDomElem);
    }

    taskUncomplete(e) {
        console.log(e);
    }

    static updateDomWithNewTask(taskObj) {
        const currentTaskTemplate = createTaskHTML(taskObj);
        document.querySelector('.project-tasks').insertAdjacentHTML('beforeend', currentTaskTemplate);
        console.log(projects);
    }

    static insertModifyingForm(taskElem) {
        const formTemplate = `
        <div class="task-modify-form-wrapper">
            <form action="./index.html" method="post" id="task-modify-form">
            <div class="text--task-name">
                <label for="task-name">Name</label>
                <input type="text" name="task-name" id="task-name">
            </div>
            <div class="text--task-description">
                <label for="task-description">Description</label>
                <input type="text" name="task-description" id="task-description">
            </div>
            <div class="radio--priority-wrapper">
                <div class="radio--low-priority radio-element">
                    <label for="low-priority">Low 🔽</label>
                    <input type="radio" name="priority" id="low-priority" value="low" required>
                </div>
                <div class="radio--normal-priority radio-element">
                    <label for="normal-priority">Normal</label>
                    <input type="radio" name="priority" id="normal-priority" value="normal" required checked>
                </div>
                <div class="radio--medium-priority radio-element">
                    <label for="medium-priority">Medium 🔼</label>
                    <input type="radio" name="priority" id="medium-priority" value="medium" required>
                </div>
                <div class="radio--high-priority">
                    <label for="high-priority">High ⏫</label>
                    <input type="radio" name="priority" id="high-priority" value="high" required>
                </div>
            </div>
            <div class="date--due-date">
                <label for="due-date">Due date:</label>
                <input type="date" name="due-date" id="due-date">
            </div>
            <div class="div--confirm-buttons">
                <button id="task-confirm-btn" type="submit">Confirm</button>
            </div>
                </form>
        </div>

        `;
        taskElem.insertAdjacentHTML('beforeend', formTemplate)
    }
}

export function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTask = new Task(formData.get('task-name'),formData.get('task-description'),formData.get('priority'), formData.get('due-date'));
    activeProjectGlobal.tasks.push(newTask);

    Task.updateDomWithNewTask(newTask);
    newTask.attachEventListener();
    toggleHide(taskIntakePopup);
}

export function createTaskHTML(taskObj) {
    const taskTemplate = `
    <li class="task ${taskObj.name}">
        <div class="task-content">
            <h4>${taskObj.name}</h4>
            <p class="task-desc">${taskObj.description}</p>
            <p>${taskObj.priority}</p>
            <p>${taskObj.dueDate}</p>
        </div>
        <div class="task-menu">
            <button class="taskIcon-complete--btn taskIcon--btn">
                <p>✅</p>
            </button>
            <button class="taskIcon-delete--btn taskIcon--btn">
                <p>❌</p>
            </button>
            <button class="taskIcon-modify--btn taskIcon--btn">
                <p>🔻</p>
            </button>
        </div>
    </li>
    `;
    return taskTemplate;
} 


/* 
* Unused elements
    ! <svg class="taskIcon-complete" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37zm603 685l-136-136l-659 659l-275-275l-136 136l411 411l795-795z"/></svg>
    ! <svg class="taskIcon-delete" xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.7 16.3q.275.275.7.275q.425 0 .7-.275l2.9-2.9l2.925 2.925q.275.275.688.262q.412-.012.687-.287q.275-.275.275-.7q0-.425-.275-.7L13.4 12l2.925-2.925q.275-.275.262-.688q-.012-.412-.287-.687q-.275-.275-.7-.275q-.425 0-.7.275L12 10.6L9.075 7.675Q8.8 7.4 8.388 7.412q-.413.013-.688.288q-.275.275-.275.7q0 .425.275.7l2.9 2.9l-2.925 2.925q-.275.275-.262.687q.012.413.287.688ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
    ! <svg class="taskIcon-modify" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M456 231a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0z"/></svg>


*/