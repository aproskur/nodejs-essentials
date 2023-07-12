const readline = require("readline");
const { EventEmitter } = require("events");

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

module.exports = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const emitter = new EventEmitter();

    const questionsAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer.trim());
        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionsAnswered);
        } else {
            return(done(answers));
        }
    };

    rl.question(questions[0], questionsAnswered);
    return emitter
}