const container = document.querySelector('.container');

const left = document.querySelector('.left');


const right = document.querySelector('.right');

left.addEventListener('mouseenter', ()=>{
    container.classList.add('hover-act1')
})

left.addEventListener('mouseleave', ()=>{
    container.classList.remove('hover-act1')
})

right.addEventListener('mouseenter', ()=>{
    container.classList.add('hover-act2')
})


right.addEventListener('mouseleave', ()=>{
    container.classList.remove('hover-act2')
})