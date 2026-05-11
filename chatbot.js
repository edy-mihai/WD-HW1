let questions = [
    {
        question: "What does HTML stand for?",
        options: {
            a: "HyperText Markup Language",
            b: "Home Tool Markup Language"
        },
        correctAnswer: "a",
        correctResponse: "Nailed it! You are a web dev natural.",
        incorrectResponse: "Not quite! It stands for HyperText Markup Language."
    },
    {
        question: "Who is widely considered to be the first computer programmer?",
        options: {
            a: "Alan Turing",
            b: "Ada Lovelace"
        },
        correctAnswer: "b",
        correctResponse: "Spot on! She wrote the first algorithm back in the 1840s.",
        incorrectResponse: "Actually, it was Ada Lovelace!"
    },
    {
        question: "What does 'CPU' stand for?",
        options: {
            a: "Computer Personal Unit",
            b: "Central Processing Unit"
        },
        correctAnswer: "b",
        correctResponse: "Exactly! It is the brain of the computer.",
        incorrectResponse: "Close, but it actually stands for Central Processing Unit."
    },
    {
        question: "Which major tech company bought GitHub in 2018?",
        options: {
            a: "Microsoft",
            b: "Google"
        },
        correctAnswer: "a",
        correctResponse: "Correct! Microsoft acquired it for $7.5 billion.",
        incorrectResponse: "Ah, it was actually Microsoft!"
    },
    {
        question: "What is the primary purpose of CSS?",
        options: {
            a: "To style and design web pages",
            b: "To store database information"
        },
        correctAnswer: "a",
        correctResponse: "You got it! CSS makes the web look beautiful.",
        incorrectResponse: "Nope! CSS is just for styling. Databases use languages like SQL."
    }
];

let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");
let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        let botResponse = document.createElement("div");
        botResponse.classList.add("message");
        botResponse.classList.add("bot-message");
        botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question} <br> a) ${currentQuestion.options.a} <br> b) ${currentQuestion.options.b}`;
        chatContainer.appendChild(botResponse);
        chatContainer.scrollTop = chatContainer.scrollHeight; 
    }
    else {
        let botResponse = document.createElement("div");
        botResponse.classList.add("message");
        botResponse.classList.add("bot-message");
        botResponse.innerHTML = `<strong>Bot:</strong> That's all the questions I have! Thanks for playing.`;
        chatContainer.appendChild(botResponse);
        userInput.disabled = true;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

displayQuestion();

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let userAnswer = userInput.value.toLowerCase();
    let userResponse = document.createElement("div");
    userResponse.classList.add("message");
    userResponse.classList.add("user-message");
    userResponse.innerHTML = `<strong>You:</strong> ${userAnswer}`;
    chatContainer.appendChild(userResponse);
    let currentQuestion = questions[currentQuestionIndex];
    let botFeedback = document.createElement("div");
    botFeedback.classList.add("message");
    botFeedback.classList.add("bot-message");
    if (userAnswer === currentQuestion.correctAnswer) {
        botFeedback.innerHTML = `<strong>Bot:</strong> ${currentQuestion.correctResponse}`;
    }
    else {
        botFeedback.innerHTML = `<strong>Bot:</strong> ${currentQuestion.incorrectResponse}`;
    }
    chatContainer.appendChild(botFeedback);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    userInput.value = "";
    currentQuestionIndex++;
    displayQuestion();
});



