
import { resolve } from "./math.js";
import { showHistorial } from "./historial.js";
import { writeOperation } from "./evaluate.js";

const panel = document.getElementById('panel');
const buttons = document.querySelectorAll('.button');
const resultContainer = document.getElementById('result-container');

buttons.forEach( (button) => {
    button.addEventListener('click', function(){
        actions(button.id);
    })
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
    }
    actions(e.key);
})

function calc(){
    if (panel.value === '' || panel.value === 'ERROR'){
        return;
    }
    const expression = panel.value;

    const result = resolve(expression);
    panel.value = result
    showHistorial(expression,result,resultContainer);
}

function actions(key){
    if(key === 'c'){
        panel.value = '0';
        return;
    }
    if(key === 'reset'){
        resultContainer.innerHTML = '';
        panel.value = '0';
        return;
    }
    if ((key === '=' || key === 'Enter') &&  panel.value !== ''){
        calc();
        return;
    }
    if (/^[0-9+\-*/.]$/.test(key)){
        panel.value = writeOperation(key,panel.value);
    }
}