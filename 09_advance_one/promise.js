// //console.log("promise one")

// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async task
//     //DB calls,cryptography,network
//     setTimeout(function () {
//         console.log("async task is complete");
//         resolve() // ab ye coonect hua .then ke sath
//     }, 1000)
// })

// // .then la side ka relation hai resolve ke sath

// promiseOne.then(function () {
//     console.log("promise consumed")
// })

// //console.log("promise two")
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("async task 2")
//         resolve();
//     }, 1000)
// }).then(function () {
//     console.log("async 2 resolved")
// })

// //console.log("promise two")

// //promise three

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ usename: "chai", enmail: "chai@example.com" })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user) //resolve ke sath  jo bhi parameter pass kartat te eth yeun jatat
// })

// //promise four
// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ usename: "hitesh", password: "123" })
//         } else {
//             reject('ERROR: Something Went Wrong')
//         }
//     }, 1000)
// }) 

// promiseFour.then((user) => {
//     console.log(user);
//     return user.usename
// }).then((usename) => {
//     console.log(usename)
// }).catch(function (error) {
//     console.log(error)
// }).finally(function(){
//     console.log('finally the promie is resoled or rejected')
// })

//promise five

// const promiseFive=new Promise(function(resole,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resole({usename:"javascript",password:"132"})
//         }else{
//             reject('ERROR:JS went wrong')
//         }
//     },1000)
// });

// async function consumePrimiseFive(){
//     try {
//         const response= await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }

// }

// consumePrimiseFive()

// async function getAllUsers(){
// try {
//        const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//        const data=await response.json()
//        console.log(data)
    
// } catch (error) {
//     console.log("E:", error)

// }}
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})