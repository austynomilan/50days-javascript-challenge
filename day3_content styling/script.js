let container = document.querySelector('.container')

let close = document.getElementById('close')

let open = document.getElementById('open')

showNav = () =>{
    if(container.classList.contains('show-nav')){
        container.classList.remove('show-nav')
    }else{container.classList.add('show-nav')}
}

open.addEventListener('click',showNav )
close.addEventListener('click',showNav )