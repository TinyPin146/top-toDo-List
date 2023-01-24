import { attachEventListener } from "./util.js";
import { menuNames } from "./sortDueDate.js";
import { populateStorage } from "./localStorage.js";
import { updateDomWithSortedTasks } from "./sortDueDate.js";

export let projects = {};
export let activeProjectGlobal;
export const contentHolder = document.querySelector('.content-holder');
const addNewProjectInput = document.querySelector('#add-new-project');
const projectsMenuUl = document.querySelector('.projects-menu');

export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    static addNewProjectToMenu(projectObj) {
        addNewProjectInput.value = '';
        projectsMenuUl.insertAdjacentHTML('beforeend', `<div id="${projectObj.name}-project-menu-div" class="project-menu-li">
            <li id="${projectObj.name}-project-menu-li">${projectObj.name}</li>
        </div>`);
        attachEventListener(document.querySelector(`#${projectObj.name}-project-menu-li`), 'click', Project.updateDomWithProject);
        const currentProjMenuElem = projectsMenuUl.querySelector(`#${projectObj.name}-project-menu-div`) 
        if (currentProjMenuElem.firstElementChild.textContent !== 'Default') {
            const projDeleteBtnTemplate = `<div><button class="project-delete" id="${projectObj.name}-project-delete" type="button">Del</button></div>`;
            currentProjMenuElem.insertAdjacentHTML('beforeend', projDeleteBtnTemplate);
            attachEventListener(document.querySelector(`#${projectObj.name}-project-delete`), 'click', Project.deleteProject);
        }
    }
    
    static updateDomWithProject(e) { // TODO DRYify!
        if (contentHolder.querySelector('.project')) contentHolder.removeChild(contentHolder.querySelector('.project'));
        if (contentHolder.querySelector('.sorted')) contentHolder.removeChild(contentHolder.querySelector('.sorted'));
        const activeProject = (e === undefined ? projects.Default : projects[e.currentTarget.textContent]);
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

    static deleteProject(e) {
        const projectToDelete = e.currentTarget.parentElement.parentElement.firstElementChild.textContent
        const projectMenuElemID = projectsMenuUl.querySelector(`#${e.currentTarget.parentElement.parentElement.id}`)
        delete projects[projectToDelete];
        populateStorage();
        Project.updateDomWithProject();
        Project.removeProjectFromMenu(projectMenuElemID);
    }
    static removeProjectFromMenu(projectMenuElemID) {
        projectsMenuUl.removeChild(projectMenuElemID)
    }
}

export function addProject(name, taskList) {
    const newProjectName = addNewProjectInput.value;
    if (Object.keys(projects).length === 0) {
        addNewProjToProjectObj(name);
        populateStorage();
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
        populateStorage();
    } 
}

export function setGlobalActiveProject(projectName) {
    activeProjectGlobal = projectName;
}