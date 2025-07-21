//kisi bhi constructor se Object bnate hai to wo Singleton hota hai mtlb usko ek he baar refer kr skte hai

/* let obj = new Object() //like this it is a singleton object or Object.Create se bhi Object bnate hai
aise methods humlog bnate hai
 obj.run
 obj.walk
 */

 //2nd way is Object Literals

 // We create an object with two methods 
// 1st with Object.create it is Singleton and it will be used only 1time : Read more precisely
// 2nd with Object literals ---------->->  let obj = {}.



// An object in JavaScript is a collection of key-value pairs. 
//Symbol Creation

 let firstSymbol = Symbol("Its Symbol")

let user = {

    name: "Anubhav",
    //using firstSymbol as a key:value variable
    //firstSymbol:"Its Symbol", //wrong way
    [firstSymbol]:"Its Symbol", //right way
    age: 23,
    emailId:"ofcanubhav@gmail.com",
    city:"Bhilai",
    country:"India"
}

//console.log(user.city) //line 23 and 24 both are same its just a two different methods uknow
//console.log(user['city'])
//console.log(typeof user.firstSymbol) // it throws a string bcoz thats not you use symbol as key:value pair
//console.log(user[firstSymbol]) // Accesing symbol

 user.name = "Sneha"
// console.log(user.name);
//Now we know Objects are mutable so to stop that thing we have a method
console.log(user);

// Object.freeze(user)
//  user.name = "Sakshi" // ab ye change ni hoga
// console.log(user.name);

 user.demoFunction = function(){  //  We can also declare function .
    console.log("Yo this is demo")
}
// console.log(user.demoFunction())
// user.demoFunction()