// Function in JavaScript

// Q1 What is function declaration or function definition or function statement

// function square(num){
//     return num*num;
// }

// Q2 What is function expression

// const square = function (num){
//     return num*num;
// }

// function (num){
//     return num*num;
// } //what is this called which has no name =>Anonymous Fucntion function which has no name is called anonymous function

// function expression is called just like a normal function we called
// console.log(square(5))

// Q3. What are first class functions?

// in javaScript the function which treated like a normal variable is called first class function
//in this basically a function can do what ever a variable can do in javaScript

// function square(num){
//     return num*num;
// }

// function displaySquare(fn){
//     console.log("square is " + fn(5));
// }

// displaySquare(square);


//we can passthem inside of another function just like a varibale we can also manipulate and retun them from function

//Q4 What is IIFE (immedialty invoked function expression ) 

// (function square(num){
//     console.log(num*num);
// })(5);

// (function (X){
//     return (function (y){
//         console.log(y)
//         console.log(X);
//     })(2);
// })(1)

//Q6 What is closure

//Q7 What is params vs arguments

function multiply(...nums){ // Rest operator
    console.log(nums);
}

var arr=[5,6];

multiply(...arr); // Spread Operator