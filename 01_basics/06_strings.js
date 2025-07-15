
let nam =  new String('Anubhav');
let naam = "Sneha" // it is preferbally easy and efficient  to write a string not like above one.

console.log(typeof(nam));

let newName= nam.toUpperCase();
console.log(newName) // But it does not change the original nam ? Reason: primitive datatype stack memory , pass by value not by refernce 

console.log(nam.length);
console.log(nam.substring(1,4)) 
console.log(nam.slice(-4,6)) 

console.log(nam.includes('b')) // checks if the value is present or not
console.log(nam.replace('bhav','pam'))
console.log(typeof(naam))

// There are different methods try and practice here only 
// See you soon