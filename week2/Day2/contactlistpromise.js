// a Node.js application that allows users to store and retrieve contacts.
//  Each contact should have a name and a phone number. 
const readline = require('readline');

const contacts = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const prompt = (question)=>{
    return new Promise((resolve, reject) => {
        rl.question(question, (UserInput)=>{
            resolve(UserInput);
        })
    })
}

const contactMenu = async() => {
    let val = await prompt(`|----------------------------------|\nChoose One of the Option Below\n1-Add a Contact\n2-View all contacts\n3-Search for a contact\n4-Exit\n`);
        switch (val) {
            case '1':
               { addContact();
                break;}
            case '2':
                {viewContact();
                break;
                }
            case '3':
                {searchContact();
                break;}
            case '4':{
                rl.close();
                break;
            }
            default:{
                console.log(`choose right number`);
                contactMenu()
            }
                }
    }

const addContact = async () => {
    let name = await prompt(`Enter Contact Name : `);
    let number = await prompt(`Enter Contact Number : `);
        contacts.push({name:name,number:number})
        console.log(`Contact Added Successfully`);
        contactMenu();
};
const viewContact = () => {
    contacts.forEach((contact) => console.log(`Name: ${contact.name}\nPhone Number: ${contact.number}`))
    contactMenu();
};
const searchContact = async() => {
    let name = await prompt(`Enter Searched Contact name:\n`);
        let result = contacts.find((contact) => contact.name === name);
        if (result) {
            console.log(`Contact Found\nName: ${result.name}\nPhone Number: ${result.number}`);
        }
        else
        console.log(`Contact Not Found`);
        let val = await prompt(`Tap 0 to go back to menu other to exit\n`);
            if (val === '0') {
                contactMenu();
            }else
                rl.close();
};

contactMenu()


