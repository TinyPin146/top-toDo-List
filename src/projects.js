import { attachEventListener } from "./util.js";
import { createTaskHTML } from "./tasks.js";
import { menuNames } from "./sortDueDate.js";

export let projects = {};
export let activeProjectGlobal;
const addNewProjectInput = document.querySelector('#add-new-project');
const projectsMenuUl = document.querySelector('.projects-menu');
const contentHolder = document.querySelector('.content-holder');


class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    static addNewProjectToMenu(projectObj) {
        addNewProjectInput.value = '';
        projectsMenuUl.insertAdjacentHTML('beforeend', `<li id="${projectObj.name}">${projectObj.name}</li>`);
        attachEventListener(document.querySelector(`#${projectObj.name}`), 'click', Project.updateDomWithProject);
    }
    
    static updateDomWithProject(e) { // TODO DRYify!
        if (contentHolder.querySelector('.project')) contentHolder.removeChild(contentHolder.querySelector('.project'));
        if (contentHolder.querySelector('.sorted')) contentHolder.removeChild(contentHolder.querySelector('.sorted'));
        const activeProject = (e === undefined ? projects.Default : projects[e.target.id]);
        activeProjectGlobal = activeProject;
        const projectDiv = document.createElement('div');
        projectDiv.classList.add(`project`, `project-${activeProject.name}`);
        const template = `
                <h3>${activeProject.name}</h3>
                <ul class="project-tasks"></ul>    
        `;
        projectDiv.insertAdjacentHTML('afterbegin', template);
        activeProject.tasks.forEach((taskObj) => {
            const currTaskHTML = taskObj.getTaskCardElem;
            projectDiv.querySelector('.project-tasks').insertAdjacentHTML('beforeend', currTaskHTML);
            setTimeout(() => {
                taskObj.attachEventListener();
                taskObj.checkCompletion();
            }, 5);
        });
        contentHolder.insertAdjacentElement('afterbegin', projectDiv);
    }
}

export function addProject(name, taskList) {
    const newProjectName = addNewProjectInput.value;
    if (Object.keys(projects).length === 0) {
        addNewProjToProjectObj(name);
        return;
    };
    if (menuNames.includes(name)) {
        updateDomWithSortedTasks(name, taskList);
        return;
    }
    if (addNewProjectInput.value === '') return;
    addNewProjToProjectObj();
    function addNewProjToProjectObj(name = newProjectName) {
        const newProject = new Project(name);
        projects[newProject.name] = newProject;    
        Project.addNewProjectToMenu(newProject);
        Project.updateDomWithProject();
    } 
}

function updateDomWithSortedTasks(name, taskList) {
    contentHolder.innerHTML = '';
    const projectDiv = document.createElement('div');
    projectDiv.classList.add(`sorted`, `sorted-${name}`);
    const template = `
        <h3>${name}</h3>
        <ul class="sorted-tasks"></ul>    
    `;
    projectDiv.insertAdjacentHTML('afterbegin', template);
    const taskUL = projectDiv.querySelector('.sorted-tasks');
    taskList.forEach(taskElem => {
        taskUL.insertAdjacentHTML('beforeend', taskElem.getTaskCardElem);
        setTimeout(() => {
            taskElem.attachEventListener();
            taskElem.checkCompletion();
        }, 5)
    })
    contentHolder.insertAdjacentElement('afterbegin', projectDiv);
}