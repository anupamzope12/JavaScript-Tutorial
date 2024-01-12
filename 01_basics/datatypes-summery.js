// Primitive

// 7 Types : String, Number, Boolean, null, Symbol, Bigint

//symbol is used to make any value unique

//JS is dynamically or static type language
    /* JavaScript is a dynamically typed language,
        which means that data types of variables are determined by the value they hold at runtime 
            and can change throughout the program as we assign different values to them.
                */

const score = 100
const scorevalue = 100.3
console.log(score)
// there is no decimal and float only number all things come under number

const isloggedIn=false
const outsideTemp=null
let userEmail

const id=Symbol(123);
const id1=Symbol(123);
const anotherId=Symbol("as");

// console.log(id==id1)
// console.log(typeof(id))
// console.log(typeof(anotherId))

const bigNumber=4545444444444444444465656556n;
// console.log(bigNumber)
// console.log(typeof bigNumber)


// Reference Type(Non Primitive)

//Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"];

console.log(typeof heros)
console.log(heros)
 
let myObject={
    name: "anupam",
    age: 22
}
// console.log(myObject)
// console.log(typeof myObject)

const myFunction = function(){
    console.log("Hello World");
}
// console.log(myFunction)
// console.log(typeof myFunction) // it returns function but it actually objects function

/*==============================================================*/

// primitive stored in stack and non primitive stored on heap 

let myyoutube="hiteshchaudharidotcom"


console.log(myyoutube)

let anothername=myyoutube

 anothername="chaiaurcode"

console.log(anothername)

let userone={
    email:"user@google.com",
    upi:"user@ybl"
}
let usertwo=userone
console.log(userone)
console.log(usertwo)

usertwo.email="anupamzope@gmail.com"

console.log(userone)
console.log(usertwo)

