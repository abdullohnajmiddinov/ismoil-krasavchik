const questions = [
    { question: "7 + 5 = ?", answer: 12 },
    { question: "10 - 3 = ?", answer: 7 },
    { question: "4 * 2 = ?", answer: 8 },
    { question: "16 / 4 = ?", answer: 4 },
    { question: "9 + 6 = ?", answer: 15 },
    { question: "12 - 4 = ?", answer: 8 },
    { question: "14 / 2 = ?", answer: 7 },
    { question: "8 * 3 = ?", answer: 24 },
    { question: "47 - 12 = ?", answer: 35 },
    { question: "15 + 13 = ?", answer: 28 }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("submitAnswer").addEventListener("click", checkAnswer);
document.getElementById("retryButton").addEventListener("click", restartGame);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    document.getElementById("resultText").innerText = '';
    document.getElementById("answerInput").classList.remove("hidden"); // Input maydonini ko'rsatish
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("questionText").innerText = questions[currentQuestionIndex].question;
        document.getElementById("submitAnswer").classList.remove("hidden");
        document.getElementById("resultText").innerText = '';
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answerInput").value);
    let resultText = '';

    if (userAnswer === questions[currentQuestionIndex].answer) {
        score++;
        resultText = 'To‘g‘ri!';
    } else {
        resultText = `Notog‘ri! To‘g‘ri javob: ${questions[currentQuestionIndex].answer}`;
    }

    document.getElementById("resultText").innerText = resultText; // Natijani ko'rsatish
    document.getElementById("answerInput").value = '';
    currentQuestionIndex++;
    
    setTimeout(displayQuestion, 1000); // Savolni yangilashdan oldin 1 soniya kutish
}

function endGame() {
    document.getElementById("questionText").innerText = '';
    document.getElementById("submitAnswer").classList.add("hidden");
    document.getElementById("answerInput").classList.add("hidden"); // Input maydonini yashirish
    document.getElementById("resultText").innerText = `O'yin tugadi! Natija: ${score} / ${questions.length}`;
    document.getElementById("retryButton").classList.remove("hidden");
}

function restartGame() {
    document.getElementById("retryButton").classList.add("hidden");
    document.getElementById("answerInput").value = '';
    document.getElementById("answerInput").classList.remove("hidden"); // Input maydonini ko'rsatish
    startGame();
}
    