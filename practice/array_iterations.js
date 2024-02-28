const arr=[1,2,3,4,5,6,7,8]

// console.log()
// console.log("for each")
// console.log()

// arr.forEach((item)=>{
//     console.log(item);
// })

// console.log()
// console.log("for loop")
// console.log()

// for(let i=0 ;i<arr.length;i++){
//     console.log(i)
// }

// console.log()
// console.log("while loop")
// console.log()

// let i=0;
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }

// console.log()
// console.log("for of")
// console.log()

// for(let values of arr){
//     console.log(values)
// }

console.log()
console.log("map")
console.log()

const newArray =arr.map((num)=>{
   return num*10;
})

console.log(newArray)

console.log()
console.log("filter")
console.log()

const newFilter = arr.filter((num)=>{
    return num>2
})

console.log(newFilter)