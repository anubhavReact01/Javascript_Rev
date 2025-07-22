
// Type-1
// const user = {}
// user.name = "Anubhav"
// user.age = 23
// user.city = "Bhilai"

// Type-2
// let user = {
//     name: "Anubhav",
//     //using firstSymbol as a key:value variable
//     //firstSymbol:"Its Symbol", //wrong way
//     [firstSymbol]:"Its Symbol", //right way
//     age: 23,
//     emailId:"ofcanubhav@gmail.com",
//     city:"Bhilai",
//     country:"India"
// }

//Both type1 and type2 are two different methods to intialise objects 

// console.log(user);

// An object inside an object

// const regularUser = {

//     email: "Anu@gmail.com",
//     fullName: {
//         regularUserfullName:{
//             firstName: "Anubhav",
//             lastName: "Singh"
//         }
//     },
//      city:"Bhilai"
// }

// console.log(regularUser.fullName)
// console.log(regularUser.fullName.regularUserfullName)
// console.log(regularUser.fullName.regularUserfullName.firstName)



// ---------------------------------------------------------------------->-> How to merge 2 objects in a single one

let obj1 = {
    a: "A",
    b:"B",
    c:"C"
}

let obj2 = {
    d: "D",
    e:"E",
    f:"F"
}

// let obj3 = {obj1,obj2} // Method 1

// let obj3 = Object.assign({},obj1,obj2) //Method2 Object.assign() method

let obj3 = {...obj1,...obj2} // Method 3 using Spread Operator 
// console.log(obj3)


//Accesing only keys or values of the object //  Object.keys() ans Object.values()

console.log(Object.keys(obj1))
console.log(Object.values(obj1))

// Object.hasOwnProperty() to check whether is has its own property or not returns boolean


console.log(obj1.hasOwnProperty("f"));
