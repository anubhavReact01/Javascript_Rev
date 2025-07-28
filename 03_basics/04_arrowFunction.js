const user = {

    userName : "Anubhav",
    age : 23,
    welcome : function(){
        console.log(`Yo, Welcome to the user function ${this.userName}`) // ab yaha to this.username user ke context ko smjhane ke liye hai
        //  console.log(this)
    } 
}

// user.welcome()
// user.userName = "Sneha"
// user.welcome()
//  console.log(user)
//  user.welcome()
// console.log(this)

// but outside the anyscope (this) keyword also have the context.

function practice(){
    console.log(this)  // now we get the properties of this when we log(this) inside the function
}

// practice()


//Inside an object this.any_variable will works but inside the function this.any_variable will not work


function a(){
    let nam = "SM"
    console.log(this.nam)
}

// a() // it'll throw an undefined bcoz of line 27


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++

const arrowFunctionDeclaration= () => {
    console.log("Hi this is Arrow Function...")
    // Inside an object this.any_variable will works but inside the function this.any_variable will not work 
    //This will true for Arrow function also
}

// arrowFunctionDeclaration()

//++++++++++++++++++++++++++++++++++++++++++++++++curly bracket vs curly braces ki kahani in Arrow function


const twoSum = (num1,num2)=>{

 return num1+ num2
}

// console.log(twoSum(3,4));

const threeSum = (a,b,c) => a+b+c  // implicit way uKnow
const fourSum = (a,b,c,d) => (a+b+c+d) // same hai 58 and 59
// console.log(threeSum(1,2,3)) 
// console.log(fourSum(1,2,3,4))

// How to return an object with the use of Arrow Function 

const returnObject = ()=> ({userName:"CholeBhatureBabab"})

console.log(returnObject())