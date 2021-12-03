const dictionary = {
    "hi": "What's up?",
    "hello": "Hello my friend",
    "bye": "OK bye",

};

function answerBack() {
    let userInput = document.getElementById('user-input').value;
    console.log(userInput);
    console.log(generateAnswer(userInput));
}


function generateAnswer(humanInput) {
    let answersArray = findAnswerInDictionary(humanInput);
    if (!answersArray) {
        return "I didn't understand you."
    } else {
        return answersArray[0];
    }
}

function findAnswerInDictionary(phrase) {
    let answers = [];
    const words = phrase.toLowerCase().split(/(,| )+/);
    words.forEach(word => {
        if (word in dictionary) {
            answers.push(dictionary[word]);
        }
    });
    return answers;
}
