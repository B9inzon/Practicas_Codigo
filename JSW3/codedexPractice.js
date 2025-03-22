//! SE DEFINE UN OBJETO DE DOS ARRAYS DE OBJETOS { [ {} ], [ {} ] }
const goodreadsInfo = {
  currentlyReading: [
    {
      title: "Halo - Silent Storm",
      author: "Troy Denning",
    },
  ],

  wantToRead: [
    {
      title: "Halo - Fall of Reach Comic",
      author: "Reed Ruiz",
    },
  ],
};

//! SE DEFINE UNA ARROW FUNCTION PARA AGREGAR OBJETOS MEDIANTE SPREAD OPERATOR ...OBJECT
const addNewBooks = (books, additionalBookObjects = []) => {
  return [...books, ...additionalBookObjects];
};
//! SE USA LA FUNCION PARA AGREGAR UN OBJETO ADICIONAL AL ARRAY currentlyReading
goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading, [
  {
    title: "El problema de los tres cuerpos",
    author: "Liu Cixin",
  },
]);

//! SE USA LA FUNCION PARA AGREGAR EL ARRAY ADICIONAL AL ARRAY wantToRead
goodreadsInfo.wantToRead = addNewBooks(goodreadsInfo.wantToRead, [
  {
    title: "Halo - Oblivion",
    author: "Troy Denning",
  },
]);

//! SE CREA UNA FUNCION PARA MOSTRAR LA INFO DE CADA OBJETO EN CURRENTLYREADING Y WANTTOREAD
const showGoodreadsInfo = (info) => {
  const currentlyReading = info.currentlyReading; //! <---- Se define una constante para la lista currentlyReading
  const wantToRead = info.wantToRead; //! <---- Se define una constante para la lista wantToRead

  console.log("Currently Reading:"); //! <---- Se muestra la info de cada libro(objeto) en currentlyReading
  for (let book of currentlyReading) {
    console.log(`${book.title} by ${book.author}`);
  }

  console.log();
  console.log("Want To Read:"); //! <---- Se muestra la info de cada libro(objeto) en wantToRead
  for (let book of wantToRead) {
    console.log(`${book.title} by ${book.author}`);
  }
};

showGoodreadsInfo(goodreadsInfo);
