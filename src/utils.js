import { loadProject } from "./view.project";

function createDropdown(title, color, contents, titleId = null, contentClass = null, contentId = null) {
    const dropDown = document.createElement('div');
    dropDown.classList.add('dropdown');
    if (titleId)
        dropDown.id = titleId;

    const dropDownButton = document.createElement('div');
    dropDownButton.classList.add('dropdown-btn');
    dropDownButton.style.borderLeft = `3px solid ${color}`;

    const dropDownSpan = document.createElement('span');
    dropDownSpan.textContent = title;

    const dropSymbol = document.createElement('button');
    dropSymbol.id = "drop-symbol";

    if (document.querySelector('#content').classList.contains('dark-theme')) {
        dropSymbol.classList.add('dark-theme');
    }

    dropDownButton.appendChild(dropDownSpan);
    dropDownButton.appendChild(dropSymbol);

    dropDownButton.addEventListener('click', () => {

    })

    const dropDownContent = document.createElement('div');
    dropDownContent.classList.add('dropdown-content');

    contents.forEach((contentName) => {
        const content = document.createElement('div');
        content.textContent = contentName;
        if (contentClass)
            content.classList.add(contentClass);
        if (contentId)
            content.id = contentId;
        content.addEventListener('dblclick', () => {
            loadProject(title);
        })
        dropDownContent.appendChild(content);
    })

    dropDown.appendChild(dropDownButton);
    dropDown.appendChild(dropDownContent);

    return dropDown;
}

export { createDropdown };