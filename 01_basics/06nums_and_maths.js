const score=400;
// console.log(score)

const balance=new Number(100)
// console.log(balance)

// console.log(balance.toString) 
// console.log(balance.toString().length)
// console.log(balance.toFixed(1))

const otherNumber=123.896
// console.log(otherNumber.toPrecision(5))

const hundreds =1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++ Maths ++++++++++++++++++++++


// console.log(Math)
// console.log(Math.abs(-45))
// console.log(Math.round(5.4))
// console.log(Math.ceil(8.9))
// console.log(Math.floor(8.9))
// console.log(Math.min(4,5,6,3,7,1,3))
// console.log(Math.max(54,12,32,5,897))

console.log(Math.random()) // it always give value in between 0 and 1 including 0
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min + 1 ))+min)
