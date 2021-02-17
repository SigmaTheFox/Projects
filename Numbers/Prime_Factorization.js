const readline = require("readline")

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Create function to recall
const question = () => {
    /* 
    Declare an Array with 10 prime numbers to check if the entered number is divisible.
    Declare an empty response Array to push the prime numbers to.
    Declare a divisible Boolean set to true by default to stop the while loop.
    */
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        res = [],
        divisible = true;

    // Display the prompt in console and wait for respnse.
    rl.question("Enter a number to get the Prime Factors of: ", num => {
        // Check if the entered text includes numbers.
        if (/\d+/g.test(num) === false) {
            console.log("You have to enter a number.");
            return question(); // Restart the prompt
        }
        // Get the first numbers found in the prompt answer (eg. "23fn009" will result in 23).
        num = parseInt(num.match(/\d+/g).map(Number));

        // Loop until divisible is false
        while (divisible === true) {
            // Loop through the primes Array
            for (i = 0; i < primes.length; i++) {
                // Continue if the number is divisible by a prime number without any remainder.
                if (num % primes[i] === 0) {
                    /* 
                    Push the prime number to the response Array.
                    Set the num variable to the result of diving the initial value by the
                    prime number.
                    Break the loop and continue with the new result.
                    */
                    res.push(primes[i]);
                    num = num / primes[i];
                    break;
                }
                /*
                If the number isn't divisible anymore push the final result to the response Array,
                set the divisible boolean to false and break the loop.
                */
                res.push(num)
                divisible = false;
                break;
            }
        }
        console.log(res.join(" x ")) // Join the array entries with an "x" and display in console
        return question()
    })
}
question()