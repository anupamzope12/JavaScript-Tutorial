function syMyName () {
    console.log("H")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("h")
}

console.log(syMyName())

//while defining a function we need to add parameter

function addTwoNumbers(number1 ,number2){ //parameter
    console.log(number1+number2)
    
}

//while calling a function we need to pass argument

addTwoNumbers() //NaN
addTwoNumbers(8)//NaN
addTwoNumbers(8,null) //8
addTwoNumbers(8,"4") //84
addTwoNumbers(8,"a") //8a

function addTwoNumbers(number1 ,number2){ //parameter

    // let result=number1+number2;
    // return result
    // console.log("HItesh") // unrechabel code
    
    return number1+number2
}

const result=addTwoNumbers(3,5)

// console.log("Result: " ,result)

function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage()) // undefined

/* ****************************************************** */

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//val1 200 val2 400
console.log(calculateCartPrice(200,400,500,600,800))

const user={
    username:"hitesh",
    price:199
}
const userone={
    username:"hiteshsdd",
    price:1990
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(userone)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function retunSecondValue(getArray){
    return getArray[1]
}

// console.log(retunSecondValue(myNewArray))
// console.log(retunSecondValue([200,400,500,1000]))