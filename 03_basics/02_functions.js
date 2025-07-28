// Playing With Objects
let user = {
    name : "Anubhav",
    age : 23,
    city : "Bhilai"
}

// console.log(user)


function userObject(anyObject){

       console.log(`User object is ${anyObject.name}, user age is ${anyObject.age} and user city is ${anyObject.city}`)
}

// userObject(user) // method 1 
// userObject({name : "Sneha", age : 23 , city : "Ahiwara" }) // method 2

// -------------------------->-> Playing With Array

const myArray = [2,3,4,5]

function getValuefromArray(givemeArray){
    return givemeArray[2]
}

console.log(getValuefromArray(myArray)) // myArray mai se return givemeArray[2] dega method 1
console.log(getValuefromArray([1,2,3,4]))