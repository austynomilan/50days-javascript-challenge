const toggler = document.querySelectorAll('.faq-toggle')

toggler.forEach(tog=>{
    tog.addEventListener('click', ()=>{
        tog.parentNode.classList.toggle('active')
    })
})

