function answerBack() {
    let userElement = document.getElementById('user-input');
    const userInput = userElement.value;
    displayText(userInput, 'user-msg');
    const botAnswer = generateAnswer(userInput);
    userElement.value = "";
    displayText(botAnswer, 'bot-reply');
}

// function displayUserInput(userInput) {
//     document.getElementById('user-msg').innerHTML = userInput;
// }

// function displayBotReply(botReply) {
//     document.getElementById('bot-reply').innerHTML = botReply;
// }

function displayText(text, id) {
    document.getElementById(id).innerHTML = text;
}

function generateAnswer(text) {
    let answer;
    keywords.forEach((word, index) => {
        if(text.includes(word)) {
            answer = replies[index];
        }
    });
    return answer;
}