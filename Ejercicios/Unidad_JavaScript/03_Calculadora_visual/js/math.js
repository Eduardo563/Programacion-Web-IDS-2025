
export function resolve(operation){
    try{
        let result = eval(operation);
        if (result == 'Infinity' || result == '-Infinity'){
            return result = 'ERROR';
        }
        return String(result);
    }
    catch{
        throw new Error('ERROR');
    }  
}