// currying in javaScript
// Example f(a,b) into f(a)(b)

// function f(a,b){
//     console.log(a,b);
// }

console.log("Ajjdsj")

// function f(a){
//     return function (b){
//         return `${a} ${b}`;
//     }
// }

// console.log(f(5)(9))

//Why do we use curying?

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//             // return `${a}+${b}+${c}`
//         };
//     };
// }

// console.log(add(4)(5)(9))

// function evaluate(operation){
//     return function(a){
//         return function(b){
//             if(operation=="sum") return a+b;
//             else if(operation=="multiply") return a*b;
//             else if(operation=="divide") return a/b;
//             else if(operation=="substract") return a-b;
//             else return "Invalid Operation";
//         }
//     }
// }

// const mul = evaluate("sum");
// console.log(mul(5)(5));

//Question 3 - Infinite Curying => sum(1)(2)(3)....(n)

//sum(5)(6) //11
//sum(5)(6)(8)(9) //28

// function add(a){
//     return function(b){
//       if(b) return add(a+b);
//       return a;
//     }
// }
// console.log(add(5)(8)(9)(5)())

// Currying vs Partial Application

// function sum(a) {
//     return function (b,c){
//         return a+b+c;
//     };
// }

// const x=sum(45);

// console.log(x(8,9))
// console.log(x(8,23))

// //or
// console.log(sum(1)(8,2))

// manipulating DOM

// curry() implementation
// converts f(a,b,c) into f(a)(b)(c)

function curry(func){
    return function curriedFunc(...args) {
        if(args.length>=func.length) {
            return func(...args);
        }else{
            return function(...next){
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum = (a,b,c) => a+b+c;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3));