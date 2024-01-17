const myNumbers=[1,2,3,4,5,6,7,8,9,10];

// coding.forEach( function (item) {console.log(item)})

myNumbers.forEach(function(item)
{
    if(item>5){
        console.log(item)
    }
})
// const newNums=myNumbers.map( (num) =>num +10) // it automatically return all values
// const newNums=myNumbers.map( (num) =>{
//     return num +10
// })

// chainig
// const newNums=myNumbers 
//             .map((num)=> num*10 )
//             .map((num)=> num + 1)
//             .filter((num)=> num>=40)

// console.log(newNums)

