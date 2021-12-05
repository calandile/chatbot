function answerBack() {
    // Hide bot answer
    document.getElementById('bot-row').setAttribute('hidden', 'any');
    let userElement = document.getElementById('user-input');
    const userInput = userElement.value;
    const botAnswer = generateAnswer(userInput.toLowerCase());
    userElement.value = "";

    setTimeout(() => {
        displayUserInput(userInput);
    }, 700);
    setTimeout(() => {
        displayBotReply(botAnswer);
    }, 2500);
}

function generateAnswer(text) {
    let answer = "What?";
    library.forEach(row => {
        if (text.includes(row[0])) {
            answer = row[1];
        }
    });
    return answer;
}

function displayUserInput(userInput) {
    document.getElementById('user-msg').innerHTML = userInput;
    document.getElementById('user-row').removeAttribute('hidden');
}

function displayBotReply(botReply) {
    document.getElementById('bot-reply').innerHTML = botReply;
    document.getElementById('bot-row').removeAttribute('hidden');
}