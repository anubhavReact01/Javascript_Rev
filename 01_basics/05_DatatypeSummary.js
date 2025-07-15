// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ----------------------------------------------------------------->-> Stack and Heap Memory

// All the primitive datatypes are stored in stack memory 

// let myCity = "BHILAI"
// let myNewCity = myCity // so myCity is a Primitive datatype so it stores in Stack memory and when we create myNewCity and assign the myCity so it will not change the original one bcoz in stack memmory copy will be sent to the newone not the original one 

// myNewCity = "Pune"

// console.log(myCity)
// console.log(myNewCity)

// All the Non-Primitive datatypes are stored in heap memory 


let userInfo = {
    name : "Anubhav",
    id : 23,
    emailId : "anu@123.com"
}

// Now
 
let userNewInfo = userInfo  // We know that object is a non-primitive datatype so here we send the original value the refernce of a original data so it will directly change the original one 
userNewInfo.emailId = "anu@345.com";
console.log(userInfo.emailId)
console.log(userNewInfo.emailId)
