const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numQuestion = stop => {
    let F = [0, 1];
    rl.question("Enter a number: ", num => {
        if (/\d+/g.test(num) === false) {
            console.log("You have to enter a number.");
            return numQuestion();
        }
        num = parseInt(num.match(/\d+/g).map(Number));
        for (i = 2; i < num; i++) {
            if (stop === true) {
                if (F.slice(-1) == num) break;
            }
            F.push(parseInt(F.slice(-2)) + parseInt(F.slice(-1)))
        }
        console.log(F.join(" "))
        process.exit()
    })
}

const stopQuestion = () => {
    rl.question("Do you want the sequence to end if it reaches the specified number?\nYes - No\n", answer => {
        let stop = answer.match(/\bye?s?\b|\bno?\b/gi)[0]
        if (/\bye?s?\b|\bno?\b/gi.test(answer) === false) {
            console.log("You have to enter Yes or No.");
            return stopQuestion();
        }
        if (/\bye?s?\b/gi.test(stop)) return numQuestion(true);
        return numQuestion(false)
    })
}
stopQuestion();