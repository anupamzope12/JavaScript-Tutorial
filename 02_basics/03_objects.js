//sigleton
//Object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Hitesh",
    "full Name" : "hiteshChaudhary",
    fullName:"hiteshChaudhary",
    // mySym:"mykey1",
    [mySym]:"myKey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","Saturday"]
}
//In java script key can be internalyy treated as string

//different ways to print objects element

// console.log(JsUser.age)
// console.log(JsUser["email"])
// console.log(JsUser.fullName)
// console.log(JsUser["fullName"])
// console.log(JsUser["full Name"])
// console.log(JsUser.mySym)
// console.log(JsUser["mySym"])
// console.log()
// console.log( typeof JsUser.age)
// console.log( typeof JsUser["email"])
// console.log(typeof JsUser.fullName)
// console.log(typeof JsUser["full Name"])

// console.log(typeof JsUser.mySym) // String 
// console.log(typeof JsUser["mySym"]) // String still it is not used as symbol
//to used is as symbol use square bracket

// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym]) //string

JsUser.email="hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
//  console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
}
console.log(JsUser.greeting())
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());