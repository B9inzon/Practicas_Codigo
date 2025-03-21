//! Este script se usó en el body del html
function myExternalScript(){
    document.getElementById('demo').innerHTML = "Cambando el texto desde un script externo"
}

function getDateFunction() {
  document.getElementById('demo1').innerHTML=Date()
}

// let x = 5;
// x = 7;
// x = x + x;
// console.log(x);


//todo metodos de JavaScript Objetos y Arrays
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

  //! Así se muestran las propiedades de un objeto mediante un loop
//   let text = "";
//   for(x in person){
//     text += person[x] + " ";
//   }

//! Así se muestran las propiedades de un objeto mediante Object.values()
// const myArray = Object.values(person)
// console.log(myArray);



//! Así se muestran las propiedades de un objeto mediante Object.entries()
// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for(let [fruit, amount] of Object.entries(fruits)) {
//     text += fruit + ": " + amount + " // "
// }
// console.log(text);

//! Así se muestran las propiedades de un objeto mediante JSON.stringify()

// let textP = JSON.stringify(person)

// console.log(JSON.stringify(person));

