let myDate = new Date(); // we created a new Date object and it will return a today's date

// console.log(myDate) // this looks confusing and we are unable to understand this 

// console.log(myDate.toString()) // Output will be    day,date,year thursday july 17 2025 14:20:54

// console.log(myDate.toDateString()) // this will exclude time

// console.log(typeof myDate) // object

//We explicitly create date using Date object

let myCreatedDate = new Date(2025 ,6, 17)

//console.log(myCreatedDate);  // isse smjh ni aaega 
//console.log(myCreatedDate.toDateString()); // thatswhy we used this .toDateString() method to understand this clearly

//So there are different methods of formatting date like mm/date/year

let newDate = new Date("07-17-2025")
// console.log(newDate.getTime());  // this will get the time of date

// console.log(newDate.toDateString())

// ------------------------------------------------- Times ----------------------------------------------------- 

// Times are very usefull in when we want to know exact time but what we can do with exact time when we design Quizes website or to book hotel rooms on the same date then we can check with this Time method to whom first book the hotel room u know.

let timeStamp =  Date.now()
// console.log(timeStamp) // so this is in millseconds.

// so now newDate is a Date object and we know we get the date from that variable but we can also get the time from above date and use them to compare the dates timing.

// console.log(newDate.getTime());


let updatedDate = new Date()

// console.log(updatedDate);
// // console.log(updatedDate.toLocaleDateString());
// // console.log(updatedDate.getMonth()+1); // july but it gives 6 starts with 0th index so thatswhy we'll add + 1

 
// let practiceStringLiterals = `Today date is ${updatedDate.toLocaleDateString()} , and time is ${timeStamp}`
// console.log(practiceStringLiterals);


// toLocaleString() is very useful method in Javascript here we can get the desired output like and actually inside this we can pass objetcs 

let b = updatedDate.toLocaleString('default',{
      
    weekday: "long"

})

console.log(b);