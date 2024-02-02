// Summarize Data: Write a function named summarizeAge that uses
// reduce to calculate the total age of all the male users.

const summarizeAge = (data) =>{
     // Filter out users with "male" gender
     const maleUsers = data.filter(({gender}) => gender === 'male');
     // map the user age 
     const arrAge = maleUsers.map(({age}) => age);
     const sumAge = arrAge.reduce((sum, user) => sum + user);
     return sumAge;
}
module.exports = summarizeAge;
