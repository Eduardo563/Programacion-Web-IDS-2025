
const add = document.getElementById("add-button");
const taskContainer = document.getElementById("list-container");
add.addEventListener('click', e => {
    let text = document.getElementById("text").value;
    if (text !== ""){
        let newTask = document.createElement('li');
        newTask.classList.add('list-element');

        let check = document.createElement('input');
        check.type = 'checkbox';
        check.id = 'check';
        check.addEventListener('change', e => {
            newTask.classList.toggle('mark');
        })
        
        let paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.textContent = text;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Eliminar"
        deleteBtn.classList.add('button-delete');
        deleteBtn.addEventListener('click', e => {
            newTask.remove();
        })

        newTask.append(check,paragraph,deleteBtn)
        taskContainer.appendChild(newTask);

        document.getElementById('text').value = '';
    }

})
