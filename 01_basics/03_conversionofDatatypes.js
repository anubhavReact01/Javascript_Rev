let age = 23;
// console.log(typeof(age))
//type of age is number


let price = "45$";

// console.log(typeof(price)); // string 

//Datatype Conversion

let priceinNumber = Number(price);
// console.log(typeof(priceinNumber)); // string 


// console.log(priceinNumber) //NaN Not a Number

//When you convert diff datatypes into Number

// 33 -> 33
// "33$" -> NaN
// true -> 1
//false -> 0
//Null -> 0
//Undefined -> null

//Investigation with  Boolean 
let num =  89;
let city = "Bhilai";

let numinBoolean =  Boolean(num);
console.log(typeof(numinBoolean));
console.log(numinBoolean);


let cityinBoolean = Boolean(city);
console.log(typeof(cityinBoolean))
console.log(cityinBoolean);