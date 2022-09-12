const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checker)

checker()

function checker() {
boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        const triggerBottom = window.innerHeight / 5 * 4

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    });
}





































