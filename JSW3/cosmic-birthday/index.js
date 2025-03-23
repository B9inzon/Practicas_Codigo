const apodContainer = document.getElementById("apod-container");

//! Función con async/await
async function fetchAPOD(date) {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`
    );
    if (!response.ok) {
      apodContainer.innerHTML =
        "An error occurred while fetching the APOD data.";
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    apodContainer.innerHTML = `
        <img id="apod-image" src="${data.url}" alt="${data.title}" width="600">
        <div id="apod-info">
        <h2 id="apod-title">${data.title}</h2>
        <p>${data.explanation}</p>
        </div>`;
  } catch (error) {
    throw Error(error.message);
  }
}

document.getElementById("birthdayForm").addEventListener("submit", function (event){
    event.preventDefault();
    const birthday = document.getElementById('birthday').value;
    const errorMessage = document.getElementById('error-message');
    const apodContainer = document.getElementById('apod-container');
    const minDate = new Date("1995-06-16");

    if(new Date(birthday) < minDate){
        errorMessage.textContent =
        "Entrada inválida: Por favor ingrese una fecha posterior a Junio 126 de 1995.";
        apodContainer.innerHTML = "";
    } else {
        errorMessage.textContent = "";
        fetchAPOD(birthday);
    }
});
