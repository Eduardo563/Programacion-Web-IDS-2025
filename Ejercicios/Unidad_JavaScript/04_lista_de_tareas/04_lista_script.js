
const add = document.getElementById("add-button");
const taskContainer = document.querySelector('.list-container');
const taskText = document.querySelector('.write');

let tasks = [];

recoverTasks();

add.addEventListener('click', function(){
    const text = taskText.value.trim();
    if(text !== ""){
        createTask(text);
    }
})

function createTask(content){
    const task = {
        id: Date.now().toString(),
        content,
        mark: false
    };
    tasks.push(task);
    saveTask();
    recoverTasks();
}

function saveTask(){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function deleteTask(id){
    tasks = tasks.filter(task =>
        task.id !== id);
    saveTask();
    recoverTasks();
}

function switchMark(id){
    const m = tasks.find(task =>
        task.id === id);
    if (m.mark){
        m.mark = false;
    }
    else{
        m.mark = true;
    }
    saveTask();
    recoverTasks();
}


function recoverTasks(){
    const info = localStorage.getItem('tasks');
    if (info) {
        tasks = JSON.parse(info);
    }
    else{
        tasks = [];
    }

    taskContainer.innerHTML = '';

    tasks.forEach(task => {
        const newTask = document.createElement('li');
        newTask.classList.add('list-element');
        newTask.dataset.id = task.id;

        const check = document.createElement('input');
        check.type = 'checkbox';
        check.className = 'checkbox';
        check.checked = task.mark;
        check.addEventListener('change', e =>{
            switchMark(task.id);
        })

        const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.textContent = task.content;
        if(task.mark){
            paragraph.classList.add('mark');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add('button-delete');
        deleteBtn.addEventListener('click', e => {
            deleteTask(task.id);
        })

        newTask.append(check,paragraph,deleteBtn)
        taskContainer.appendChild(newTask);
        document.getElementById('text').value = '';
    });
}
