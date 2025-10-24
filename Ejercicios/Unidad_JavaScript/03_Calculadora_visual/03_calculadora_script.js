
const panel = document.getElementById('panel');
const buttons = document.querySelectorAll('.button');
const resultContainer = document.getElementById('result-container');

buttons.forEach( (button) => {
    button.addEventListener('click', function(){
        if(button.id === 'c'){
            panel.value = '0';
            return;
        }
        if(button.id === 'reset'){
            resultContainer.innerHTML = '';
            panel.value = '';
        }
    
        if(panel.value === '0' || panel.value === 'ERROR'){
            panel.value = button.id
        }
        else{
            if(button.id !== 'reset' && button.id !== '='){
                panel.value += button.id;
            } 
        }

        if (button.id === '=' && panel.value !== ''){
            solve();
        }
    })
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'c'){
        panel.value = '0';
        return;
    }
    if(panel.value === '0'){
        panel.value = e.key
    }
    else{
        if (/^[0-9+\-*/.]$/.test(e.key)){
            panel.value += e.key
        }
    } 
    if (e.shiftKey && e.key === '=' && panel.value !== ''){
        solve();
    }
})

function solve (){
    let expression = panel.value
    try{
        let result = eval(panel.value);
        if (result == 'Infinity'){
            result = 'ERROR';
        }
        panel.value = result;
        showHistorial(expression,result);
    }
    catch{
        panel.value = 'ERROR'; 
    }  
}

function showHistorial (operation,result) {
    if(operation !== ''){
        const completeExpression = operation +'='+ result;
        const pastExpression = resultContainer.lastElementChild;
        if(!pastExpression || pastExpression.textContent !== completeExpression){
            const historial = document.createElement('div');
            historial.classList.add('historial-container');
            historial.textContent = completeExpression;
            resultContainer.appendChild(historial);
        }
        
    }
}