// for making the cards

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






























// panels.forEach(panel => {
//     panel.addEventListener('click', ()=>{
//         removeClass();
//         panel.classList.add('active')
//     })
// });

// function removeClass(){
//     panels.forEach(panel=>{
//         panel.classList.remove('active')
//     })
// }

