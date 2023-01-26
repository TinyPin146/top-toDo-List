import {projects, Project, setGlobalActiveProject} from "./projects.js";
import { Task } from "./tasks.js";

export function populateStorage() {
    localStorage.clear();
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadProjectsInLclStorage() {
    if(localStorage.length > 0) {
        console.log(localStorage.length);
        console.log({message: 'localStorage. loadProInLCStorage', localStorage: localStorage.getItem('projects')});
        const projectsInLocalStorage = JSON.parse(localStorage.getItem('projects'));
        for (const project in projectsInLocalStorage) {
            const loadedProject = new Project(projectsInLocalStorage[project].name);
            projects[loadedProject.name] = loadedProject;
            setGlobalActiveProject(loadedProject.name)
            Project.addNewProjectToMenu(loadedProject);
            
            const loadedProjectTasks = projectsInLocalStorage[project].tasks;
            loadedProjectTasks.forEach(task => {
                const newTask = new Task(task.name, task.description, task.priority, task.dueDate);
                loadedProject.tasks.push(newTask);
                newTask.isCompleted = task.isCompleted;
                newTask.project = loadedProject.name;
            })
        }
        Project.updateDomWithProject();
    }
}