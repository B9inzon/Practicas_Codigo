const quizContainer = document.getElementById("quiz");
const startButton = document.getElementById("startBtn");

// Rewrite fetchTriviaQuestions() with async/await here 💖
//! Función con then/catch
// function fetchTriviaQuestions() {
//   return fetch("https://opentdb.com/api.php?amount=10")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to get trivia questions");
//       }
//       return response.json();
//     })
//     .then((data) => data.results);
// }

//todo Función con async/await
async function fetchTriviaQuestions(){
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data.results
        
    } catch (error) {
        throw Error(error.message)        
    }
}

function displayTriviaQuestions(questions) {
  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

    const radioGroupName = `question${index}`;

    const answers = [...question.incorrect_answers, question.correct_answer];

    answers.forEach((answer) => {
      const answerElement = document.createElement("div");
      answerElement.classList.add("answer");
      answerElement.innerHTML = `
        <label>
          <input id="question-${index}" type="radio" name="${radioGroupName}" value="${answer}">
          ${answer}
        </label>
      `;
      questionElement.appendChild(answerElement);
    });

    quizContainer.appendChild(questionElement); // Move this line outside the inner loop
  });
}

startButton.addEventListener("click", async () => {
  startButton.disabled = true;
  const questions = await fetchTriviaQuestions();
  displayTriviaQuestions(questions);
});
