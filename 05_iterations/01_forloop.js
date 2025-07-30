// for(let i=1;i<=10;i++){
//     console.log("Table of:",i)
//     for(let j=1;j<=10;j++){ // ye apna poora 0 to 10 chlega fir bahr jaega
//         // console.log(`Inner loop: ${j} and outer loop ith value: ${i}`)
//         console.log(`${i} * ${j} =  ${i*j}`)
//     }
// }

// For loop on Array

let myArray = ["Anubhav","Weekend","Drake"]

//Accesing elements using For loop

// for(let i=0;i<myArray.length;i++){
//     const elements = myArray[i]
//     console.log(elements)
// }

// brake and continue

// for(let i=1;i<=10;i++){
//     if(i==4){
//         console.log(i)
//         break // brake seedha flow todke bahr aa jaega
//     }
//     console.log(i)
// }

for(let i=1;i<=10;i++){
    if(i==4){
        // console.log(i)
        continue //ye 4 ko print ni krega fir next se fir loop will be continue 
    }
    console.log(i)
}