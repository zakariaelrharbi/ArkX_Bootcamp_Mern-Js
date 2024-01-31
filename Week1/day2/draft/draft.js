// -----------------------------------------------------------------
// const arr = [1, -4, 9, 0, "a", "v", "e", "f", "X"];

// const filtred = arr.filter((value) => value >= 'A' && value <= 'Z')
// console.log(filtred);

// -----------------------------------------------------------------
// const num = [1, 3, 4, 6, 8, 1000, 10000000000000];

// const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue
// );
// console.log(sum);
// -----------------------------------------------------------------
// ** destructuring 
// 1- swap two variables using destructuring

// let a = 90;
// let b = 30;
// [a, b] = [b, a];

// console.log("a is : ", a);
// console.log("b is : ", b);

// -----------------------------------------------------------------
// ** destructuring 
// 2 swap element in array using destructuring

// let men = ["zakaria", "kilozerko", "ziko", "kilo"];

// [men[0], men[3]] = [men[3], men[0]];
// console.log(men);

// -----------------------------------------------------------------
// ** destructuring 
// 3 assign array to variables using destructuring

// let men = ["zakaria", "kilozerko", "ziko", "kilo"];

// const [fisrtMen, secondMen, ...rest] = men;

// console.log("first men is : " , fisrtMen);
// console.log("second men is : " , secondMen);
// console.log("rest men are : " , ...rest);

// -----------------------------------------------------------------
// ** destructuring 
// 4 Extract value from object using destructuring

// const person1 = {
    //     firstName: "zakaria",
    //     lastName: "elrharbi",
    //     age: 24,
    //     job: "nothing",
    // }
    // const person2 = {
    //     lastName: "kilozerko",
    //     firstName: "ziko",
    //     age : 25,
    //     job : "no job yet"
    // }
    // const {firstName, lastName, age, job} = person2;
    
    // console.log(firstName);
    // console.log(lastName);
    // console.log(age);
    // console.log(job);
    
    // -----------------------------------------------------------------
    // ** destructuring 
    // 5 destructure in function using destructuring
    function diplsayPerson({firstName, lastName, age, job}) {
        console.log("firstname is : ", firstName);
        console.log("lastname is : ", lastName);
        console.log("age is : ", age);
        console.log("job is :", job);
    }
    // Or
    // function diplsayPerson({firstName, lastName, age, job}) {
    //     console.log(`firstname is : ${firstName} ${lastName}`);
    //     console.log(`age is : ${age}`);
    //     console.log(`job is : ${job}`);
    // }
    const person1 = {
        firstName: "zakaria",
        lastName: "elrharbi",
        age: 24,
        job: "nothing",
    }
    const person2 = {
        lastName: "kilozerko",
        firstName: "ziko",
        age : 25,
        job : "no job yet"
    }
    
    
diplsayPerson(person1);