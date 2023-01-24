export function toggleHide(el) {
    el.classList.toggle('hidden');
}

export function toggleHideOnPopup(e) {
    if (this !== e.target) return;
    e.target.classList.toggle('hidden')
}

export function attachEventListener(elem, event, cbFunc) {
    elem.addEventListener(event, cbFunc);
}

export function getAllProjectTaskElems(projects) {
    let allTasks = [];
    Object.values(projects).forEach(project => {
        project.tasks.forEach(task => {
            allTasks.push(task.taskCardElem);
        });
    });
    return allTasks;
}

export function getAllProjectTasks(projects) {
    let allTasks = [];
    Object.values(projects).forEach(project => {
        project.tasks.forEach(task => {
            allTasks.push(task);
        });
    });
    return allTasks;
}