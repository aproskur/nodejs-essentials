process.stdout.write("Hello");

let questions = [
    "What is your name?",
    "What would you lie to do?",
    "What is your favorite programming language?"
];

let answers = [];

function ask(i=0) {
    process.stdout.write(`\n \n ${questions[i]}`)
    process.stdout.write(` > `)
}

ask();

process.stdin.on("data", function(data){
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        process.exit();
    }
})

process.on("exit", function() {
    process.stdout.write(`\n\n\n\n`);
    process.stdout.write(`Go ${answers[1]}  ${answers[0]} you can finish writing ${answers[2]}`);
})
