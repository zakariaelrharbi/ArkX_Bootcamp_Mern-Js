// Write an async function named fetchUserData 
// that uses fetch to retrieve data from a the 
// API:  https://dummyjson.com/users  .
// The function should use await to wait for the response.
const processUserData = require("./processUserData");
const summarizeAge = require("./summarizeAge");
const fetchUserData = async() =>{
    try {
        const data = await fetch(" https://dummyjson.com/users");
        const result = await data.json();

        let male_arr = processUserData(result.users)
        let s = summarizeAge(result.users);
        // console.log(male_arr)
        console.log("Processed Users: ")
        male_arr.map(val => console.log(val));
        console.log("Total Age of Active Users: ", s);
        
    } catch (error) {
        console.log("Fatal Errror", error);
    }
};
fetchUserData();
module.exports = fetchUserData;