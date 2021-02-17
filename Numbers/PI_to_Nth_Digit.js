const readline = require("readline")

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Function to recall
const question = () => {
    // Ask how many decimals the user wants
    rl.question("Enter the amount of decimals to generate for PI: ", num => {
        // Check if the answer has numbers, if not ask the questioon again
        if(/\d+/g.test(num) === false) {
            console.log("You have to enter a number.");
            return question();
        }

        // Get the first numbers found in the prompt answer (eg. "23fn009" will result in 23).
        num = parseInt(num.match(/\d+/g).map(Number));
        
        // Limit of how many decimals the program will show
        if (num > 30) {
            console.log("The number is too high, the limit is 30.");
            return question();
        }
        // Show PI with the amount of decimals entered
        console.log(Math.PI.toFixed(num));
        return question();
    })
}
question();