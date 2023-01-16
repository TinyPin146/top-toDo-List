import { attachEventListener } from "./util.js";
import { createTaskHTML } from "./tasks.js";

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
}

export function addProject(name) {
    const newProjectName = addNewProjectInput.value;
    if (Object.keys(projects).length === 0) {
        addNewProjToProjectObj(name);
        return;
    };
    if (addNewProjectInput.value === '') return;
    addNewProjToProjectObj();
    function addNewProjToProjectObj(name = newProjectName) {
        const newProject = new Project(name);
        projects[newProject.name] = newProject;    
        addNewProjectToMenu(newProject);
        updateDomWithProject();
    }
}

function addNewProjectToMenu(projectObj) {
    addNewProjectInput.value = '';
    projectsMenuUl.insertAdjacentHTML('beforeend', `<li id="${projectObj.name}">${projectObj.name}</li>`);
    attachEventListener(document.querySelector(`#${projectObj.name}`), 'click', updateDomWithProject);
}

function updateDomWithProject(e) {
    contentHolder.innerHTML = '';
    const activeProject = e === undefined ? projects.Default : projects[e.target.id];
    activeProjectGlobal = activeProject;
    const projectDiv = document.createElement('div');
    projectDiv.classList.add(`project`, `project-${activeProject.name}`);
    const template = `
            <h3>${activeProject.name}</h3>
            <ul class="project-tasks"></ul>    
    `;
    projectDiv.insertAdjacentHTML('afterbegin', template);
    activeProject.tasks.forEach(taskObj => {
        const currTaskHTML = createTaskHTML(taskObj);
        projectDiv.querySelector('.project-tasks').insertAdjacentHTML('beforeend', currTaskHTML);
    });
    contentHolder.insertAdjacentElement('afterbegin', projectDiv);
}

