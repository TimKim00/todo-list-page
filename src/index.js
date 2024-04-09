import './style.css';
import { loadSidebar, clearSidebar } from "./sidebar";
import { addProject } from './project';

const sidebarToggle = document.querySelector('#sidebar-toggle');
const root = document.querySelector('html');
const sidebar = document.querySelector('#sidebar');

sidebarToggle.addEventListener('click', () => {
    if (root.style.getPropertyValue('--sidebar-width') == "0px") {
        root.style.setProperty('--sidebar-width', "calc(18% - 1rem)");
        sidebarToggle.style.marginLeft = "1rem";
        loadSidebar();
        sidebar.style.paddingRight = "1rem";
        setTimeout(() => {
            sidebar.style.minWidth = "12rem";
        }, 500);
    } else {
        clearSidebar();
        root.style.setProperty('--sidebar-width', "0px");
        sidebarToggle.style.marginLeft = "0px";
        sidebar.style.minWidth = "0px";
        sidebar.style.paddingRight = "0px";
    }
});

document.querySelector('#close').addEventListener('click', (event) => {
    addProject(event);
    event.preventDefault();
})
