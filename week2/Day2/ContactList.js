// a Node.js application that allows users to store and retrieve contacts.
//  Each contact should have a name and a phone number. 
const EventEmitter = require("events");
const readline = require("readline");
let contacts = [];
const eventEmitter = new EventEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function prompt(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (userInput) =>{
            resolve(userInput);
        })
    })
}
rl.question('enter "add" to add a contact \nenter "find" to find a contact\n', async (input) => {
    if (input == "add") {
      const name = await prompt(`enter your name\n`);
      const phoneNumber = await prompt(`enter your phone number\n`);
      eventEmitter.emit("add", name, phoneNumber);
    } else if (input == "find") {
      const lookingfor = await prompt("enter the name you wanna find");
      eventEmitter.emit("find", lookingfor);
    }
  }
);
eventEmitter.on("add", (name, phoneNumber) => {
  contacts[name] = phoneNumber;
  console.log(contacts);
  console.log(
    `Contact ${name} with phone number ${phoneNumber} added successfully.`
  );
});

eventEmitter.on("ViewAllContacts", ()=>{
   console.log(contacts);
});
// Simulate an event occurrence
eventEmitter.on("find", (lookingfor) => {
  if (x in contacts === lookingfor) {
    console.log(`Contact found - ${x}: ${contacts[x]}`);
  } else {
    console.log(`Contact ${x} not found.`);
  }
});

eventEmitter.on("close",()=>{
   
});

























// backup
// const readline = require('readline');
// const rl = readline.createInterface({input: process.stdin, output: process.stdout});
// let myObject = {};
// rl.question(`What's Your Name? \n`, (name) => {
//     rl.question(`Enter Your Number:`, (num)=>{
//         if(name.length > 0){
//             console.log(`Welcome ${name}!`);
//             rl.close();
//         }
//         else
//         {
//             rl.setPrompt(`Please enter your Name\n`);
//             rl.prompt();
            
//             rl.on('line', (name)=>{
//                 if(name.length > 0){
//                     console.log(`Welcome ${name}!`);
//                     rl.close();
//                 }
//                 else{
//                     rl.setPrompt(`Please Enter Your Name!\n`);
//                     rl.prompt();
//                 }
//             });
//         }
//         if(name.length > 0){
//             console.log(`Your number: ${num}!`);
//             rl.close();
//         }
//         myObject.name = name;
//         myObject.num = num;
//         console.log(myObject);
//     })
// });
