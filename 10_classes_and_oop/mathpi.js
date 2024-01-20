const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)


// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

const chai ={
    name:'giger chai',
    price:250,
    isAvailable:true,
    orderChai : function(){
        console.log("chai nahi bni")
    }
}
// console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:true
})

for (const [key,value] of Object.entries(chai)) {
    if(typeof  value !== 'function'){
    console.log(`${key}:${value}`)
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))
