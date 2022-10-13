const jokeContainer = document.getElementById('joke')
const jokesChanger = document.getElementById('jokesBtn')

generateJokes()

jokesChanger.addEventListener('click', generateJokes)

async function generateJokes() {

    const configuration = {
        headers:{
            Accept: 'application/json'
        }
    }

    let joker = await fetch('https://icanhazdadjoke.com', configuration )
    let data = await joker.json()
    jokeContainer.innerHTML = data.joke



    // fetch('https://icanhazdadjoke.com', configuration )
    // .then((res) => res.json())
    // // .then((data) => {
    //     jokeContainer.innerHTML = data.joke
    // }
    }
