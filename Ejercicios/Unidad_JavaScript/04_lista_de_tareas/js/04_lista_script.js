import { createTaskElement,showTasks,taskValidation } from "./ui.js";
import { createTask } from "./tasks-actions.js";

const add = document.getElementById("add-button");
const taskText = document.querySelector('.write');

add.addEventListener('click', (e) =>{
    if(taskValidation()){
        console.log('que pedo');
        const task = createTask(taskText.value.trim());
        createTaskElement(task);
    }
})

window.onload = () =>{
    showTasks();
}

