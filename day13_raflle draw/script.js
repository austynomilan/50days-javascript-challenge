const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keydown', (e)=>{
    createTags(e.target.value)
})

function createTags(e){
    const tags = e.split(',').filter(tag=>tag.trim() !== '').map(tag=>tag.trim())

    tagsElement.innerHTML = ''

    tags.forEach(tag => {
      const tagEl =  document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerText = tag 
      tagsElement.appendChild(tagEl)

    });
}