let projects = {};
const addNewProjectInput = document.querySelector('#add-new-project');
const projectsMenuUl = document.querySelector('.projects-menu');

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
}

export function addProject(e) {
    if (addNewProjectInput.value === '') return;
    const newProject = new Project(addNewProjectInput.value);
    projects[newProject.name] = newProject;
    console.log(projects);
    addNewProjectToDom(newProject);
}

function addNewProjectToDom(projectObj) {
    addNewProjectInput.value = '';
    console.log(projectObj.name);
    projectsMenuUl.insertAdjacentHTML('beforeend', `<li>${projectObj.name}</li>`)
}