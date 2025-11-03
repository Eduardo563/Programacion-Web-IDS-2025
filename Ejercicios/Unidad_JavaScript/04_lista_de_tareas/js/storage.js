
export function saveTask(tasks){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

export function recoverTasks(){
    return JSON.parse(localStorage.getItem('tasks') || '[]');
}