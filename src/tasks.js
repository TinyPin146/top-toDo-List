import { projects, activeProjectGlobal } from "./projects.js";
import { toggleHide } from "./util.js";
import { taskIntakePopup } from "./index.js";
import { populateStorage } from "./localStorage.js";

class Task {
    constructor(name, desc, prio, dueDate) {
        this.name = name;
        this.description = desc;
        this.priority = prio;
        this.dueDate = dueDate;
        this.isCompleted = false;
        this.project = activeProjectGlobal.name;
        this.boundTaskUncomplete = this.taskUncomplete.bind(this);
        this.boundTaskComplete = this.taskComplete.bind(this);
        this.boundHandleTaskMod = this.taskModUpdateHandle.bind(this);
    }

    get getTaskDomElem() {
        return document.querySelector(`.${this.name}`);
    }
    get getTaskCardElem() {
        return Task.createTaskHTML(this)
    }
    set setNewName(newValue) {
        if (!!newValue) this.name = newValue;
    }
    set setNewDescription(newValue) {
        if (!!newValue) this.description = newValue;
    }
    set setNewPriority(newValue) {
        if (!!newValue) this.priority = newValue;
    }
    set setNewDueDate(newValue) {
        if (!!newValue) this.dueDate = newValue
    }
    set setCompletion(newValue) {
        this.isCompleted = newValue;
    }

    attachEventListener() {
        // * taskCard
        const taskDomElem = this.getTaskDomElem;
        // * Complete icon & eventListener
        const taskIconCompleteBtn = taskDomElem.querySelector('.taskIcon-complete--btn');
        taskIconCompleteBtn.addEventListener('click', this.boundTaskComplete); 
        // * Delete icon & eventListener
        const taskIconDeleteBtn = taskDomElem.querySelector('.taskIcon-delete--btn');
        taskIconDeleteBtn.addEventListener('click', this.taskDelete.bind(this));
        // * Mod icon & eventListener
        const taskIconModifyBtn = taskDomElem.querySelector('.taskIcon-modify--btn');
        taskIconModifyBtn.addEventListener('click', this.taskModify.bind(this));
    }

    checkCompletion() {
        console.log('running completion check');
        if (this.isCompleted) this.taskComplete();
    }

    taskComplete() {
        this.setCompletion = true;
        const taskCard = this.getTaskDomElem;
        const taskIconCompleteBtn = taskCard.querySelector('.taskIcon-complete--btn');
        const undoTaskBtn = taskCard.querySelector('.undo-task--btn');

        taskIconCompleteBtn.removeEventListener('click', this.boundTaskComplete);
        taskCard.classList.toggle('done');
        
        undoTaskBtn.classList.toggle('hidden');
        undoTaskBtn.addEventListener('click', this.boundTaskUncomplete);
        populateStorage();
    } 

    taskUncomplete() {
        this.setCompletion = false;
        const taskCard = this.getTaskDomElem;
        const undoTaskBtn = taskCard.querySelector('.undo-task--btn');
        const taskIconCompleteBtn = taskCard.querySelector('.taskIcon-complete--btn');

        undoTaskBtn.removeEventListener('click', this.boundTaskUncomplete);
        taskCard.classList.toggle('done');
        
        undoTaskBtn.classList.toggle('hidden');
        taskIconCompleteBtn.addEventListener('click', this.boundTaskComplete);
        populateStorage();
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
        projects[this.project].tasks.splice(indexOfTask, 1)
        this.getTaskDomElem.parentElement.removeChild(this.getTaskDomElem);
        populateStorage();
    }

    taskModify(e) {
        const taskCard = this.getTaskDomElem;
        const taskModFormWrapper = taskCard.querySelector('.task-modify-form-wrapper');
        const taskModForm = taskCard.querySelector('#task-modify-form')
        taskModFormWrapper.classList.toggle('hidden');
        taskModForm.addEventListener('submit', this.boundHandleTaskMod)
    }

    taskModUpdateHandle(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const taskCard = this.getTaskDomElem;
        const taskModFormWrapper = taskCard.querySelector('.task-modify-form-wrapper');

        taskCard.classList.remove(`${this.name}`)
        this.setNewName = formData.get('task-name');
        taskCard.classList.add(`${this.name}`)

        this.setNewDescription = formData.get('task-description');
        this.setNewPriority = formData.get('priority');
        this.setNewDueDate = formData.get('due-date');
        this.updateTaskContentDOM(this);
        taskModFormWrapper.classList.toggle('hidden');
        populateStorage();
    }

    updateTaskContentDOM(taskObj) {
        const taskCard = taskObj.getTaskDomElem;
        const taskCardTaskContent = document.querySelector('.task-content');

        taskCard.removeChild(taskCardTaskContent);
        const updatedTaskContent = `
        <div class="task-content">
            <h4>${taskObj.name}</h4>
            <p class="task-desc">${taskObj.description}</p>
            <p>${taskObj.priority}</p>
            <p>${taskObj.dueDate}</p>
        </div>
        `;
        taskCard.insertAdjacentHTML('afterbegin', updatedTaskContent);
    }

    static createTaskHTML(taskObj) {
        const priorityIcon = getPriorityIcon(taskObj.priority);
        function getPriorityIcon(priority) {
            switch (priority) {
                case 'low': 
                    return '🔽';
                case 'normal':
                    return '▶️';
                case 'medium':
                    return '🔼';
                case 'high':
                    return '⏫' 
            }
        }
        const taskTemplate = `
        <li class="task ${taskObj.name}" data-priority="${taskObj.priority}">
            <div class="task-content">
                <h4>${taskObj.name}</h4>
                <p class="task-desc">${taskObj.description}</p>
                <p>${priorityIcon}</p>
                <p>${taskObj.dueDate}</p>
            </div>
            <div class="task-menu">
                <button class="taskIcon-complete--btn taskIcon--btn">
                    ✅
                </button>
                <button class="taskIcon-delete--btn taskIcon--btn">
                    ❌
                </button>
                <button class="taskIcon-modify--btn taskIcon--btn">
                    🔻
                </button>
            </div>
            <div>
                <button class="undo-task--btn hidden">Undo task</button>
            </div>
            <div class="task-modify-form-wrapper hidden">
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
                <button id="task-mod-confirm-btn" type="submit">Confirm</button>
            </div>
                </form>
        </div>
    
        </li>
        `;
        return taskTemplate;
    } 

    static updateDomWithNewTask(taskObj) {
    const currentTaskTemplate = taskObj.getTaskCardElem;
        document.querySelector('.project-tasks').insertAdjacentHTML('beforeend', currentTaskTemplate);
    }
}

export function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTask = new Task(formData.get('task-name'), formData.get('task-description'), formData.get('priority'), formData.get('due-date'));
    activeProjectGlobal.tasks.push(newTask);
    populateStorage();

    Task.updateDomWithNewTask(newTask);
    newTask.attachEventListener();
    toggleHide(taskIntakePopup);
}