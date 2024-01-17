//Immediately Invoked Function Expresion (IIFE)

//global scope ke pollution se problem hoti hai uske liye iifw use krte hai

// (function chai(){
//     //named IIFF
//     console.log("DB Connected")
// })();

// ( function aurcode (){
//     console.log(`DB CONNECTED TWO`)
// })();

// ( (name)=>{
//     //Unnamed IIFE or only IIFE
//     console.log(`DB CONNECTED TWO ${name}`)
// })('hitesh')
// chai()
var variable="global variable";

//With iife

(function iife(){
   var variable="local variable"
    console.log(variable)
})();

//Without iife
// function abc(){
//      var variable="local variable"
//     console.log(variable)
// }

// abc()

console.log(variable)