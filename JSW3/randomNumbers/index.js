
function randomNumberPromise(){
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() *50) + 1;
        if(randomNumber < 25) {
            resolve(randomNumber)
        } else {
            reject("El número es mayor al límite")
        }
    })
} 

const generateBtn = document.getElementById('generateButton');
const showNumber = document.getElementById('showNumber');

generateBtn.addEventListener("click", () => {
    randomNumberPromise()
    .then((number) => {
        showNumber.innerHTML= `Número generado: ${number}`
    })
    .catch((err) =>{
        showNumber.innerHTML = `<span style="color:red;">${err}</span>`
    })
})



