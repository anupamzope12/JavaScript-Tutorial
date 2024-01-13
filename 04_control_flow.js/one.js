const isUserLoggedIn=true
const temperature=41

if(temperature===41){
    console.log("less that 50")
}
else{
    console.log("Temperature is greater than 50")
}
console.log("execute");


// <,>,>=,<=,==,===,!==!=

// const score=200

// if(score>100){
    // let power="fly"
    // console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)

const balance=10000
//implicit scope
// if(balance>5000) console.log("test");
// if(balance>5000) console.log("test"),
//                  console.log("test2");

// if(balance<500){
//     console.log("less than")
// }else if(balance <750){
//     console.log("balance less than 750")
// }else if(balance <900){
//     console.log("balance less than 900")
// }else{
//     console.log("balance less than 1200")
// }

const useLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(useLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}