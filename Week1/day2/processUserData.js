// //Process Data: After fetching the data, use arrow functions and array methods 
// (like map, filter, reduce) to process it. Create a function named processUserData that:
// Filters out users who has male as gender.
// Maps the remaining users to an array of strings in the format: "Name: [name], Age: [age]".
// Use destructuring to extract user properties from the data.
// ------------------------------------------------------------------
const processUserData =  (data) => {
    // Filter out users with "male" gender
    const maleUsers = data.filter(({gender}) => gender === 'male');
    // map the user name and age 
    const UsersFormat = maleUsers.map(({firstName, lastName, age}) => `Name : ${firstName} ${lastName}, age : ${age}`);
    return UsersFormat;
};

module.exports = processUserData;





//---------backup
// const processUserData =  (data) => {
//     // Filter out users with "male" gender
//     const maleUsers = data.filter(({gender}) => gender === 'male');
//     // map the user name and age 
//     const UsersFormat = maleUsers.map(({firstName, lastName, age}) => `Name : ${firstName} ${lastName}, age : ${age}`);
//     const usersAge = maleUsers.map(({age}) => age);
//     return{ men_arr: maleUsers, men_arr_str: UsersFormat, men_age : usersAge};
// };

// module.exports = processUserData;




