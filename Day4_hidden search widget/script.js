let search = document.querySelector('.search');

let inputs = document.querySelector('.inputs');
console.log(inputs)
search.addEventListener('click', ()=>{
    if(inputs.classList.contains('visible')){
        inputs.classList.remove('visible')
    }else{
        inputs.classList.add('visible')
    }
})