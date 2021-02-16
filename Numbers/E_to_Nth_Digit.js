const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = () => {
    rl.question("Enter the amount of decimals to generate for E: ", answer => {
        if(/\d+/g.test(answer) === false) {
            console.log("You have to enter a number.");
            return question();
        }
        let num = parseInt(answer.match(/\d+/g).map(Number));
        if (num > 30) {
            console.log("The number is too high, the limit is 30.");
            return question();
        }
        console.log(Math.E.toFixed(num));
        return question();
    })
}
question();