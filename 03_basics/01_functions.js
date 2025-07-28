// function execution

function greet(){
    console.log("Hello niggas,How u doin")
}

//greet()

function add(num1,num2){
    console.log(num1+ num2)
}

// add(12,14)
// console.log("Add value is: ", add())

function sub(num1,num2){
    return num1 - num2
}

let result = sub(24,22)
// console.log("Result is ", result)


function loginUserName(userName){

    return `${userName} just logged in`
}

// loginUserName("Anubhav") // method is called but it will not print bcoz we dont give or we dont have method to run the function
// console.log(loginUserName("Anubhav"))

function loginUserAge(userAge){
    if(userAge===undefined){ // means loginUserAge() you dont enter the user age
        console.log("Please enter your age")
        return 
    }

    return `Our user is ${userAge} years old`
}

// console.log(loginUserAge(23))

function loginUserAge(userAge = 18){ // we give the default age value so now if conditions will not be touched 
    if(userAge===undefined){ // means loginUserAge() you dont enter the user age
        console.log("Please enter your age")
        return 
    }

    return `Our user is ${userAge} years old`
}
 console.log(loginUserAge())
