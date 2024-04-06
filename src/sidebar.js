const sidebarToggle = document.querySelector('#sidebar-toggle');
const root = document.querySelector('html');
const sidebar_ = document.querySelector('#sidebar');

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

function loadSidebar() {
    const nav = document.createElement('nav');

    nav.appendChild(createNavDiv("home", "Home"));
    nav.appendChild(createNavDiv("task", "My task"))


    sidebar.appendChild(nav);
}

function clearSidebar() {
    sidebar.innerHTML = '';
}

function createNavDiv(id, name) {
    const div = document.createElement('div');
    div.classList.add('nav-entry');
    const button = document.createElement('button');
    button.id = id;
    const text = document.createTextNode(name);
    div.appendChild(button);
    div.appendChild(text);
    return div;
}