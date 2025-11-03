
export function showHistorial(operation,result,resultContainer){
    if(operation !== '' && result !== 'ERROR'){
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