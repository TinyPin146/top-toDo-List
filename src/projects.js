import { attachEventListener } from "./util.js";
import { menuNames } from "./sortTasks.js";
import { populateStorage } from "./localStorage.js";
import { updateDomWithSortedTasks } from "./sortTasks.js";
import { defaultProjectName } from "./index.js";

export let projects = {};
export let activeProjectGlobal;
export const contentHolder = document.querySelector('.content-holder');
const addNewProjectInput = document.querySelector('#add-new-project');
const projectsMenuUl = document.querySelector('.projects-menu');

export class Project {
    constructor(name) {
        this.name = name;
        this.nameWithoutSpace = name.replace(/\s/g, "");
        this.tasks = [];
    }

    static addNewProjectToMenu(projectObj) {
        const projectName = projectObj.name;
        const projectNameRemovedSpace = projectObj.nameWithoutSpace;
        addNewProjectInput.value = '';
        projectsMenuUl.insertAdjacentHTML('beforeend', `<div id="${projectNameRemovedSpace}-project-menu-div" class="project-menu-li">
            <li id="${projectNameRemovedSpace}-project-menu-li">${projectName}</li>
        </div>`);
        attachEventListener(document.querySelector(`#${projectNameRemovedSpace}-project-menu-li`), 'click', Project.updateDomWithProject);
        const currentProjMenuElem = projectsMenuUl.querySelector(`#${projectNameRemovedSpace}-project-menu-div`) 
        if (currentProjMenuElem.firstElementChild.textContent !== defaultProjectName) {
            const projDeleteBtnTemplate = `<div><button class="project-delete" id="${projectNameRemovedSpace}-project-delete" type="button">Del</button></div>`;
            currentProjMenuElem.insertAdjacentHTML('beforeend', projDeleteBtnTemplate);
            attachEventListener(document.querySelector(`#${projectNameRemovedSpace}-project-delete`), 'click', Project.deleteProject);
        }
    }
    
    static updateDomWithProject(e) { // TODO DRYify!
        if (contentHolder.querySelector('.project')) contentHolder.removeChild(contentHolder.querySelector('.project'));
        if (contentHolder.querySelector('.sorted')) contentHolder.removeChild(contentHolder.querySelector('.sorted'));
        const activeProject = (e === undefined ? projects[defaultProjectName] : projects[e.currentTarget.textContent]);
        activeProjectGlobal = activeProject;
        const projectDiv = document.createElement('div');
        projectDiv.classList.add(`project`, `project-${activeProject.nameWithoutSpace}`);
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