var menu = document.querySelector('.menu');
var ul = document.querySelector('.nav');

menu.addEventListener('click', ()=>{
    if(ul.classList.contains('ativo')){
        ul.classList.remove('ativo');  
    }else{
        ul.classList.add('ativo');
    }
})