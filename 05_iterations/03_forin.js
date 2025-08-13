
// forin is for objects and it does not works on map

const codes = {
    cpp: "C++",
    js : "Javascript",
    java : "Java",
    rb : "ruby"

}

// console.log(codes);
// As we know we cant aplly forof loop to acces the values of object so there is for in loop

for(const keys in codes){
    // console.log(keys); // isse bs keys aaenge 
    // console.log(codes[keys]); // or isse keys ki value

    // console.log(`${keys} is the shortcut of ${codes[keys]}`)
    
}


// for in array

const names = ['Anubhav','Om','Arpit','Aman']

for(const key in names){
    console.log(key); // ye index de dega 
    console.log(names[key])
}