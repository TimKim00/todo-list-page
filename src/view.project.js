import { projects, Project } from "./project";
import Task from "./task";

const manager = document.querySelector('#manager');

export function loadProject(projectName) {
    let project = null;
    for (let proj of projects) {
        if (proj.getName() == projectName) {
            project = proj;
            break;
        }
    }

    loadProjectView(project);
}

function loadProjectView(project) {
    manager.innerHTML = '';

    const header = document.createElement('div');
    header.id = 'header';
    header.textContent = project.getName();

    manager.appendChild(header);

    project.getTasks().forEach(task => {
        manager.appendChild(loadTask(task));
    })
}

const dummyTask = new Task("Call Pang", "Hehe", new Date(), "High", "Name");

function loadTask(task) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-box');

    return taskDiv;

}