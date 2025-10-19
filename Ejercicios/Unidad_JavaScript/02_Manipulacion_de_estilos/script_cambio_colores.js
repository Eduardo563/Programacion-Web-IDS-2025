
const redMode = document.getElementById('btn-red');
const blueMode = document.getElementById('btn-blue');
const greenMode = document.getElementById('btn-green');
const restore = document.getElementById('btn-restore');


redMode.addEventListener('click',function(){
    document.body.style.setProperty('--bg-color','red')
    document.body.style.setProperty('--text-color','black')
    document.body.style.setProperty('--box-shadow-color','none')
});

blueMode.addEventListener('click',function(){
    document.body.style.setProperty('--bg-color','blue')
    document.body.style.setProperty('--text-color','white')
    document.body.style.setProperty('--box-shadow-color','none')
});

greenMode.addEventListener('click',function(){
    document.body.style.setProperty('--bg-color','green')
    document.body.style.setProperty('--text-color','white')
    document.body.style.setProperty('--box-shadow-color','none')
});

restore.addEventListener('click',function(){
    document.body.style.removeProperty('--bg-color')
    document.body.style.setProperty('--text-color','black')
    document.body.style.setProperty('--box-shadow-color','#9E9E9E')
})