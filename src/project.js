import Task from './task';
import { compareAsc, format } from "date-fns";
import { refreshProjectDropdown } from './sidebar';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export class Project {
    constructor(name, category, color, due, tasks=[]) {
        this.name = capitalize(name);
        this.category = category;
        this.color = color;
        this.due = format(due, "MM/dd/yyyy");;
        this.complete = false;
        this.tasks = tasks;
    }

    pushProject() {
        projects.push(this);
    }

    // Setter methods
    setColor (color) {
        this.color = color;
    }

    setName(name) {
        this.name = name;
    }

    setCategory(category) {
        this.category = category;
    }

    setComplete(complete) {
        this.complete = complete;
    }

    setDue(due) {
        this.due = format(due, "MM/dd/yyyy");;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        this.tasks = this.tasks.filter(item => !Task.areEqual(item, task));
    }

    // Getter methods
    getName() {
        return this.name;
    }

    getCategory() {
        return this.category;
    }

    getColor() {
        return this.color;
    }

    isComplete() {
        return this.complete;
    }

    getTasks() {
        return this.tasks;
    }

    getDue() {
        return this.due;
    }
}

export function addProject() {
    const titleInput = document.querySelector('#add-proj-title');
    const dueInput = document.querySelector('#add-proj-due');

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct the CSS color string
    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    const project = new Project(titleInput.value, 'category', randomColor, new Date(dueInput.value));
    project.pushProject();
    document.querySelector('dialog').close();

    titleInput.value = '';
    dueInput.value = '';

    refreshProjectDropdown();
}

export const projects = [new Project('name', 'category', 'black', new Date(), [new Task('demo', 'hi', new Date(), 'high', 'name')])];
