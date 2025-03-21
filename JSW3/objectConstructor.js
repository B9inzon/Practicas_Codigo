
//! Creamos la función contructora
function Person(first, last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.ayeColor = eye
    //this.nationality = "Colombian" //! <---- valores por defecto
    this.fullName = function() {
        return this.firstName + " " + this.lastName; //! <---- Métodos de funciones contructoras
    }
}

// Person.nationality = "Colombian" //! <---- Esto no funciona
//Person.prototype.nationality = "Colombian" //! <---- Para agreagr una nueva propiedad a una función constructora


const myFather = new Person("Manuel","Pinzón",54,"Brown",) //! <---- Se crea un nuevo objeto mediante new Person()
const mySelf = new Person("Manuel","Pinzón",54,"Brown",)   //! <---- Se crea un nuevo objeto mediante new Person()
const myMother = new Person("Sally", "Doe", 44, "Brown")   //! <---- Se crea un nuevo objeto mediante new Person()
// myFather.nationality = "Colombian"

//todo AGREGANDO UN NUEVO MÉTDO A LA FUNCIÓN CONSTRUCTORA
{
    Person.changeName = function (name) { //! <---- Esto está mal
        this.lastName = name              //! <---- Esto está mal
    }                                     //! <---- Esto está mal

    Person.prototype.changeName = function (name) { //todo <---- SE DEBE HACER ASÍ
        
        this.lastName = name                        //todo <---- SE DEBE HACER ASÍ
    }
}

//todo AGREGANDO UN MÉTODO A UN OBJETO EXISTENTE
// myMother.changeName = function (name) { //! <---- Se agrega el nuevo método 
//     this.lastName = name
// }

myMother.changeName("Rally") //! <---- Se cambia el nombre mediante el método
console.log("My mother is " + myMother.fullName());


console.log("My father is " + myFather.fullName())

// console.log("The nationality of my father is " + myFather.nationality);
// console.log("My nationality is " + mySelf.nationality);
