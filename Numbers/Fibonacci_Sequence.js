const readline = require("readline")

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// Function to call once the user chose if they want the sequence to end on the Nth number
const numQuestion = stop => {
    // Declare F Array with the initial two numbers.
    let F = [0, 1];

    // Ask for the number for the sequence
    rl.question("Enter a number: ", num => {
        // Check if the entered text has numbers
        if (/\d+/g.test(num) === false) {
            console.log("You have to enter a number.");
            return numQuestion();
        }

        // Get the first numbers found in the prompt answer (eg. "23fn009" will result in 23).
        num = parseInt(num.match(/\d+/g).map(Number));
        
        // Loop until "i" is equal to "num"
        for (i = 2; i < num; i++) {
            /* 
            If the user chose to stop the sequence at Nth number
            and the final number pushed to the "F" Array is equal to the entered number
            break the loop
            */
            if (stop === true && F.slice(-1) == num) break;
            // Push the sum of the last two numbers to the "F" Array
            F.push(parseInt(F.slice(-2)) + parseInt(F.slice(-1)))
        }
        // Display the joined "F" Array in console and stop the program
        console.log(F.join(" "))
        process.exit()
    })
}

// Function or the first question
const stopQuestion = () => {
    // Ask if the user wants the sequence to stop at Nth number
    rl.question("Do you want the sequence to end if it reaches the specified number?\nYes - No\n", answer => {
        // Get the user's response
        let stop = answer.match(/\bye?s?\b|\bno?\b/gi)[0]
        // Check if the answer has "yes" (E and S optional) or "no" (O optional)
        if (/\bye?s?\b|\bno?\b/gi.test(answer) === false) {
            console.log("You have to enter Yes or No.");
            return stopQuestion(); // Restart the question
        }
        // If the answer is "yes" call numQuestion with true, otherwise call it with false
        if (/\bye?s?\b/gi.test(stop)) return numQuestion(true);
        return numQuestion(false)
    })
}
stopQuestion();