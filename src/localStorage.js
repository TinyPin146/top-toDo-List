import { addProject, projects, Project, activeProjectGlobal} from "./projects.js";

export function populateStorage() {
    localStorage.clear();
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadProjectsInLclStorage() {
    if(localStorage.getItem('projects')) {
        const projectsInLocalStorage = JSON.parse(localStorage.getItem('projects'));
        for (const project in projectsInLocalStorage) {
            const loadedProject = new Project(projectsInLocalStorage[project].name);
            console.log("🚀 ~ file: localStorage.js:12 ~ loadProjectsInLclStorage ~ newProject", loadedProject)
            projects[loadedProject.name] = loadedProject;    
            Project.addNewProjectToMenu(loadedProject);
            Project.updateDomWithProject();

            console.log(loadedProject.tasks);
        }
    }
}
document.addEventListener('DOMContentLoaded', loadProjectsInLclStorage);