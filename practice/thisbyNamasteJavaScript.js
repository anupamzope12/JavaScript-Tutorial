// "use strict"

// this inside global space

// console.log(this) // Window Object this keyword in global space always represent the global object
                // in case of broser this global object is window
                // but inside the NodeJs => global
// Value of this inside the global space is Global Function => window,global (that depends on where we run our code)

//this inside function scope

function X(){
    console.log(this); //  
    //the value depends on Strict and non Strict mode 
    //Strict => undefined
    //non strict => window fucntion
                                                
    //this keyword work differnely in strict mode and non strict mode
    //JavSciprt behaves differnlt becaure there is a substituyion 
} 
// X();

// this inside non-strict mode - (this substitution)

// if the value of this keyword is undefined or null
//this keyword will be replaced with globalObject
//only is non strict mode

// in strict mode 
// X() // undefined
// window.X() // window function in Striuct mode 
//this is beac we are calleing it by giving the window

//this inside a object's method

// what is difference between funcion and method in javsScript

// when we write a funcion inside a object then functionis knows as method

// const obj = { 
//     a:10,
//     x:function (){
//         console.log(this) // this refer to the obj
//     }
// }

// // obj.x();
// console.log(obj.x());

//call apply bind methods (sharing methods)

// the value of this can be modified using call apply bind

const student={
    name:"Akshay",
    printName:function(){
        console.log(this.name); // we can override this by using call keyword
    },
};

const studentTwo={
    name:"Deepika"
}

// student.printName();

// student.printName.call(studentTwo) // value of this = studentTwo

//this inside arrow function

const obj={
   a:12,
   x:()=>{
    console.log(this)
   } 
}

// obj.x()

// enclosing kexical context

const objtwo={
    a:12,
    x: function() {
        //enclosing lexical context
       const y=()=>{
            console.log(this)
           } 
        y();
    } 
 }
 
//  objtwo.x()

 // this inside DOM

//  inside a DOM this refer to the HTML element