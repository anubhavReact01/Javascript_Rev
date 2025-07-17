let age = 23;
// console.log(age);


let num = new Number( 400);
// console.log(num)

let newNum = num.toString();
// console.log(newNum);
// console.log(typeof(newNum));

//Popular Methods
//---------------------------------------toFixed()
// console.log(num.toFixed(2));


//---------------------------------------toPrecision()
let def = 23.562;
// console.log(def.toPrecision(3));

let yo = 231.562;
// console.log(yo.toPrecision(3));


//------------------------------------------------------------------- Maths ------------------------------------------------------------

// console.log(Math.round(5.324)); // rounds to 5

// console.log(Math.floor(4.78)); // rounds to 4 floor means niche lower to uknow 4.78 to 4
// console.log(Math.ceil(8.12));  // rounds to 9
// console.log(Math.max(1,2,3,4,5)); // o/p is 5

console.log(Math.floor(Math.random() * 10) + 1) //  by doing Math.floor() we get the round of and by adding 1 we avoid the possibility of geting 0 


// Very usefull formula , will use in development

let min = 10
let max = 20
let op = Math.floor(Math.random() * ( max- min + 1)+min)
console.log(op)
