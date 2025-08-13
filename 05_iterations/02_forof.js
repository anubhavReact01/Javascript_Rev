/* 
All higher order loops are Array specific loops 
*/

//Syntax of for of

// const arr = [2,4,6,8,9]

// for(const val of arr){
//     // console.log(val)
// }

// Arrays ,Objects and even Strings all are iterators so we can apply above loops 

// const greeting = "Kem Cho"

// for(const greet of greeting){
//     console.log(greet)
// }


// Map  Its a data structure key-value pair and it contains only unique key value pair and not consist duplicates 

//Declaration

const map = new Map()

map.set('In','India')
map.set('Fr','France')
map.set('Uk','United Kingdom')

// console.log(map) // it prints the whole thing

// Suppose we want to get only key values of map or only values of map so by using forof loop

// for (const [key] of map){
//     console.log(`Key values are :- ${key}`);    
// }


for (const [key,values] of map){
    console.log(`Key-values are :- ${key} and ${values}`);    
}
