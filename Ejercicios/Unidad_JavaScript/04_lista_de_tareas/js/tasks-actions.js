import { saveTask, recoverTasks } from"./storage.js";

let tasks = recoverTasks();

export function createTask(content){
    const task = {
        id: Date.now().toString(),
        content,
        mark: false
    };
    tasks.push(task);
    saveTask(tasks);
    return task;
}

export function deleteTask(id){
    tasks = tasks.filter(task => task.id != id);
    saveTask(tasks);
}

export function switchMark(id){
    const m = tasks.find(task =>
        task.id === id);
    if (m.mark){
        m.mark = false;
    }
    else{
        m.mark = true;
    }
    saveTask(tasks);
}

export function getTasks(){
    return tasks;
}