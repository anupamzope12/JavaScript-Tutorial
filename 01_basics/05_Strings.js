const name="hitesh"
const repocount=50

console.log(name + repocount + "value")

console.log(`Hello my name is ${name} and my repocount are ${repocount}`)

const getName=new String("hiteshc")

// console.log(getName[0])
// console.log(getName.__proto__);//way to acess proto in javaScript
// console.log(getName.length) 
// console.log(getName.toLowerCase())
// console.log(getName.toUpperCase)

// console.log(getName.charAt(3))
// console.log(getName.indexOf('s'))

const newString=getName.substring(0,4) //in substring we can not use -ve value
// console.log(newString)

const anotherString=getName.slice(2,4) // in slice methid we can use negative value
// console.log(anotherString)

const newStringOne="    hitesh  "
// console.log(newStringOne); //it print ast it is
// console.log(newStringOne.trim()) // trim remoce spaces

let url="https://hitesh.com/hitesh choudhary"
// console.log(url)

url="https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20','-'))

console.log(url.includes('.com'))
console.log(url.split('.'))

