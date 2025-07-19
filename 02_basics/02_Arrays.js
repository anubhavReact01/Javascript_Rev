const arr1 = ["A","B","C","D"]
const arr2 = ["E","F","G","H"]

//How to join or merge 2 arrays

//----------------------------------------------->->Method-1 .push()

 //arr1.push(arr2) // this will join the 2 arrays but it throws an output as an single array but inside there is another array will be there u know not in a single array with altogether single elements 
console.log(arr1);

//--------------------------------------------->->Method-2  .concat()

//  arr3 = arr1.concat(arr2) // it is a good method but it only join 2 arrys at a time 
 arr3.push("I")
 console.log(arr3);


//------------------------------------------------>-> Method-3

 const newArr = [...arr1,...arr2]
 console.log(newArr);
 console.log(typeof newArr);

// -->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.flat()

const arr3 = [1,2,3,[4,5],6,[7,[8,9,10]]]
 console.log(arr3);
 console.log(arr3.flat(Infinity));

// .from() -------------------------------------------->-> Convert the web data into Array format

 console.log(Array.isArray("Anubhav"))
 console.log(Array.from("Anubhav"))
 console.log(Array.from({name:"Anubhav",surname:"singh"})) // Intersting helps in web d

//We explicitly create an array from variables 

let a = 10
let b = 30
let c = 30

console.log(Array.of(a,b,c))