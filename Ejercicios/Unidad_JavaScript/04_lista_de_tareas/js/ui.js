import { deleteTask,switchMark,getTasks } from "./tasks-actions.js";

const taskContainer = document.querySelector('.list-container');
const taskText = document.querySelector('.write');

export function showTasks(){
    taskContainer.innerHTML = '';
    let tasks = getTasks();
    tasks.forEach(task => {
        createTaskElement(task);
    });
}

export function createTaskElement(task){
    const newTask = document.createElement('li');
    newTask.classList.add('list-element');
    newTask.id = task.id;

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = task.content;

    let checkbox = createCheckbox(task, paragraph);

    let deleteBtn = createDeleteBtn();

    newTask.append(checkbox,paragraph,deleteBtn);

    taskText.value = '';

    taskContainer.append(newTask);
}


function createDeleteBtn(){
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add('button-delete');
    deleteBtn.addEventListener('click', e => {
        e.currentTarget.parentElement.remove();
        deleteTask(e.currentTarget.parentElement.id);
    })

    return deleteBtn;
}

function createCheckbox(task,textParagraph){
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'checkbox';
    check.checked = task.mark;
    if(task.mark){
        textParagraph.classList.add('mark');
    }

    check.addEventListener('change', e =>{
        switchMark(task.id);
        let paragraph = e.target.parentElement.getElementsByTagName('p')[0];
        if(paragraph){
            if(e.target.checked){
                paragraph.classList.add('mark');
            }
            else{
                paragraph.classList.remove('mark')
            }
        }
    })

    return check;
}

export function taskValidation(){
    let text = taskText.value.trim();
    if(!text){
        taskText.focus();
        return false
    }
    else{
        return true;
    }
}