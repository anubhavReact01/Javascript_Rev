// let a = 25
// const b = 30

// if(true){
//     let c  = a + 25
//     let d  = c + 50 
//     console.log("c ",c)
//     console.log("d ",d)
// }

// console.log("a ", a) // console.log("d ",d)  bcoz its inside local scope so and a and b is in global scope


//  function one() {
//    let userName = "Anubhav";
//    console.log("I am an inside function 1")
//    function two() {
//    console.log("I am  an inside function 2")
//      let userAge = 23;
//      console.log(userName);
//    }
//    // console.log(userAge)
//    two()
//  }

//  one()


// if(true){
//   const name = "Anubhav"
//   console.log("Inside 1st if condition")
//    if(name=="Anubhav"){
//     console.log("Inside 2nd if condition")
//     const age = 23
//     console.log(name)
//    }
//   //  console.log(age)
// }
// 

//++++++++++++++++++++++++++++++++++++++++++++Interesting +++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num + 1
}

// console.log(addOne(5))
console.log(addTwo(7))

const addTwo = function(num){ // when we create function like this we cannot acces the variable name before declaration unlike line no.45 type function declaration
  return num + 2
}

// console.log(addTwo(7))
