const panels = document.querySelectorAll('.panel');


panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removeCLasses();
        panel.classList.add('active');
        
    })
})

function removeCLasses(){
panels.forEach(panel=>{
  panel.classList.remove('active')
})
}
































