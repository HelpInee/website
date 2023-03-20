const jokeel = document.getElementById('joke')
const jokeBtn = document.getElementByid('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke(){
    const response = await featch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json'}
    })

    const data = await response.json()
    jokeEl.innerHTML = data.joke
}