
export function writeOperation(pressed, value){
    if(value === '0' || value === 'ERROR'){
        return pressed;
    }
    return value + pressed;
}