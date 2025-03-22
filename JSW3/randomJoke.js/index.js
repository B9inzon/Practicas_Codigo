const jokeContainer = document.getElementById('jokeContainer');
const getJokeBtn = document.getElementById('getJokeBtn');

//! Forma de encadenamiento de promesas .then()/.catch()
// function fetchJoke() {
//     fetch ("https://official-joke-api.appspot.com/random_joke")
//     .then((resp) => {
//         return resp.json()
//     })
//     .then((data) => {
//         const joke = `<p>${data.setup}</p><p>${data.punchline}</p>`
//         jokeContainer.innerHTML = joke
//     })
//     .catch((err) => {
//         jokeContainer.innerHTML = `<span style="color:red;">${err}</span>`
//     })
// }

// getJokeBtn.addEventListener("click", fetchJoke);


//! Forma async/await
async function fetchJoke() {
    try {
        const response = await fetch ("https://official-joke-api.appspot.com/random_joke");
        if(!response.ok){
            // throw new Error (`Something went wrong: ${error.message}`)  
            throw new Error(`HTTP error! Status: ${response.status}`);
        }      
        const data = await response.json()
        const joke = `<p>${data.setup}</p><p>${data.punchline}</p>`
        jokeContainer.innerHTML = joke
    } catch (err) {
        jokeContainer.innerHTML = `<span style="color:red;">${err}</span>`
    }
}

getJokeBtn.addEventListener("click", fetchJoke);