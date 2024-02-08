// Readline allows us the get the usersInput and print the outpout to the user.

// require the module
const Readline = require('readline');
// create an instance using createInterface method it will take an object . 
// and we save it in a variable so we can use it later 
// rl = readline.
const rl = Readline.createInterface({input: process.stdin, output: process.stdout});
// generate an add operation with two random number betwen 1 and 10.
let num2 = Math.floor((Math.random() * 10) + 1);
let num1 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;
// we will ask the user what two number added together are equal to. using  '.question' method.
rl.question(`What is ${num1} + ${num2}? \n`, (usersInput)=>{
    // check if the user input is correct.
    // i use .trim()function to remove space and white spaces.
    if (usersInput.trim() == answer) {
        console.log("Your answer is :", usersInput);
        // i use .close() to end execution after the user answer.
        rl.close();
    }
    // if the userInput is not correct
    else{
        // use .setprompt to notify the user that the answer is false.
        rl.setPrompt("Incorrect Answer Try Again.\n");
        // now i call the prompt function.
        rl.prompt();
       
        // This function is called whenever the user enters a line of input
        rl.on('line', (usersInput) =>{
            if (usersInput == answer) {
                rl.close();
            }
                // If the input doesn't match the 'answer'
            else{
                // Set a new prompt indicating the incorrect answer
                rl.setPrompt(`Your answer ${usersInput} is incorrect try again \n`);
                // Display the prompt to encourage the user to try again
                rl.prompt();
            }

        });
    }
});
// this function will only execute when we close the readline interface.
rl.on('close', ()=>{
    console.log("Correct Answer!");
});
