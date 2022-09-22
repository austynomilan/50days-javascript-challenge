const jokeContainer = document.getElementById('joke')
const jokesChanger = document.getElementById('jokesBtn')

generateJokes()

jokesChanger.addEventListener('click', generateJokes)

function generateJokes() {

    const configuration = {
        headers:{
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', configuration )
    .then((res) => res.json())
    .then((data) => {
        jokeContainer.innerHTML = data.joke
    }
    )}
