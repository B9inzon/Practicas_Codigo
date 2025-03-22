
//! Función generadora de numeros random más larga y con constantes intermedias, 
//! más costo en canto a procesamiento
//! Mejor para entender de donde sale el número aleatorio
function getRandomNumber () {
    const random = Math.random()
    const multiplied = random * 10
    const rounded = Math.floor(multiplied)
    const result = rounded + 1
    return result
}

console.log(getRandomNumber())
console.log(getRandomNumber())
console.log(getRandomNumber())
console.log(getRandomNumber())

//! Esta es la misma función, pero mucho mas compacta y con menos costo en cuanto a procesamiento.
//! La usan los programadores más experimentados.
const randomNumber = Math.floor(Math.random() *10) + 1