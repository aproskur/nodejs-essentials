const readline = require("readline");

//wrapper around standard input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?"
];

function collectAnswers(questions, done) {
    const answers = [];

    const questionsAnswered = answer => {
        answers.push(answer.trim());
        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionsAnswered);
        } else {
            return(done(answers));
        }
    };

    rl.question(questions[0], questionsAnswered);
}

collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
});

