const tagsEL = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keydown', (e)=>{
createTag(e.target.value)

if(e.key == 'Enter'){
    setTimeout(()=>{
        e.target.value = ''

        randomSelect()

    }, 10)
}
})

function createTag(e){
    const tags = e.split(',').filter(tag =>tag.trim() !== '').map(tag=>tag.trim())

    tagsEL.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEL.appendChild(tagEl)

    });
}

function highlight(tag){
    tag.classList.add('highlight')
}

function unHighlight(tag){
    tag.classList.remove('highlight')
}

function pickRandomTag(){
const tags = document.querySelectorAll('.tag')
return tags[Math.floor(Math.random() * tags.length)]

}


function randomSelect(){

    const times = 30;

  const interval =  setInterval(()=>{
        const randomTag = pickRandomTag()

        highlight(randomTag)
        setTimeout(()=>{
            unHighlight(randomTag)
        }, 100)
    }, 100)


    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlight(randomTag)
        }, 100)

    }, times*100)
}














































// const tagsElement = document.getElementById('tags')
// const textarea = document.getElementById('textarea')

// textarea.focus()

// textarea.addEventListener('keydown', (e)=>{
//     createTags(e.target.value)
    
//     if (e.key == "Enter"){
//         setTimeout(()=>{
//             // e.target.value = ''

//             randomSelect()
//         }, 10)
//     }
// })

// function createTags(e){
//     const tags = e.split(',').filter(tag=>tag.trim() !== '').map(tag=>tag.trim())

//     tagsElement.innerHTML = ''

//     tags.forEach(tag => {
//       const tagEl =  document.createElement('span')
//       tagEl.classList.add('tag')
//       tagEl.innerText = tag 
//       tagsElement.appendChild(tagEl)

//     });
// }

// function randomSelect(){
//     const times = 30

//     const interval = setInterval(()=>{
//         const randomTag = pickRandomTag()

//         highlightTag(randomTag)

//         setTimeout(()=>{
//             UnHighlightTag(randomTag)
//         }, 100)

//     },100)

//     setTimeout(()=>{
//         clearInterval(interval)

//         setTimeout(()=>{
//             const randomTag = pickRandomTag()

//             highlightTag(randomTag)
//         }, 100)
//     }, times * 100)
// }

// function pickRandomTag(){
//     const tags = document.querySelectorAll('.tag')
//     return tags[Math.floor(Math.random() * tags.length)]

// }

// function highlightTag(tag){
//     tag.classList.add('highlight')
// }

// function UnHighlightTag(tag){
//     tag.classList.remove('highlight')
// }