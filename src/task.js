import { compareAsc, format } from "date-fns";

export default class Task {
    constructor(title, desc, due, priority, project) {
        this.title = title;
        this.description = desc;
        this.due = format(due, "MM/dd/yyyy");
        this.priority = priority;
        this.projectName = project;
        this.complete = false;
    }

    // Returns 1 if we are not due yet. 0 if it's due today. -1 if it's past due.
    pastDue() {
        return compareAsc(this.due, format(new Date(), "MM/dd/yyyy"));
    }
    
    // Equality funciton
    static areEqual(task1, task2) {
        return task1.title == task2.title && task1.project == task2.project;
    }

    // Setter methods
    isComplete(complete) {
        this.complete = complete;
    }

    setDescription(desc) {
        this.description = desc;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setDue(due) {
        this.due = format(due, "MM/dd/yyyy");;
    }

    changeName(name) {
        this.name = name;
    } 

    // Getter methods 
    getName() {return this.title}
    getDesc() {return this.description}
    getDue() {return this.due}
    getPriority() {return this.priority}
    getProjectName() {return this.projectName}
    getComplete() {return this.complete}

    
}