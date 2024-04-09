import { createDropdown } from './utils';
import Task from './task';
import {projects, Project} from './project';
import { loadProject } from './view.project';

const sidebarToggle = document.querySelector('#sidebar-toggle');
const root = document.querySelector('html');
const sidebar = document.querySelector('#sidebar');
const dialog = document.querySelector('dialog');

export function loadSidebar() {
    // Add Logo
    const logo = document.createElement('div');
    logo.id='logo';
    const logoText = document.createTextNode("PlanPal");
    logo.appendChild(logoText);
    sidebar.appendChild(logo);

    // Add Navigations
    const nav = document.createElement('nav');
    const body = document.querySelector('body');

    nav.appendChild(createNavDiv("home", "Home", body.classList.contains('dark-theme')));
    nav.appendChild(createNavDiv("task", "My Tasks", body.classList.contains('dark-theme')));

    sidebar.appendChild(nav);

    // Add Projects dropdowns
    sidebar.appendChild(createProjectDropdown());
}

export function clearSidebar() {
    sidebar.innerHTML = '';
}

function createNavDiv(id, name, dark) {
    const div = document.createElement('div');
    div.classList.add('nav-entry');
    const button = document.createElement('button');
    button.id = id;
    if (dark)
        button.classList.add('dark-theme');
    const text = document.createTextNode(name);
    div.appendChild(button);
    div.appendChild(text);
    return div;
}

function createProjectDropdown() {
    const projectDiv = document.createElement('div');
    projectDiv.id = 'projects';

    const projectText = document.createElement('span');
    const projectTextNode = document.createTextNode('My Project');
    const addProjectBtn = document.createElement('button');
    addProjectBtn.id= 'add';

    addProjectBtn.addEventListener('click', () => {
        dialog.showModal();
    })

    if (document.querySelector('#content').classList.contains('dark-theme')) {
        addProjectBtn.classList.add('dark-theme');
    }
    
    projectText.appendChild(projectTextNode);
    projectText.appendChild(addProjectBtn);
    projectText.id = "projects-title";

    projectDiv.appendChild(projectText);
    projectDiv.appendChild(refreshProjectDropdown());
    return projectDiv;
}

export function refreshProjectDropdown() {
    let dropdowns = document.querySelector('#dropdowns');
    if (dropdowns == null) {
        dropdowns = document.createElement('div');
    }
    dropdowns.id="dropdowns";

    dropdowns.innerHTML = '';

    projects.forEach((project) => {
        const dropdown = createDropdown(project.getName(), project.getColor(),
                                    project.getTasks().map(task => task.getName()),
                                    project.getName()
                                    )
        dropdown.addEventListener('dblclick', () => {
            loadProject(project.getName());
        })
        dropdowns.appendChild(dropdown);
    })

    return dropdowns;
}


