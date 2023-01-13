import { addNewProjectInput } from "./index.js";
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
}

export function addProject(e) {
    const addNewProjectInput = document.querySelector('#add-new-project');
    console.log(e.type);
}

