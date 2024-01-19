// const getPromise=()=>{
//    return new Promise((resolve,reject)=>{
//         console.log("i am a promise")
//         resolve("success")//resolve is a function that complete the promise
//         // reject("some error occured")
//     })
// }

// let promise=getPromise();

// promise.then((res)=>{
//     console.log("promise fullfilled",res)
// })

// promise.catch((error)=>{
//     console.log("rejected",error)
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000)
//     })
// }



function asyncFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 1")
            resolve("success")
        },4000)
    })
}


function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 2")
            resolve("success")
        },4000)
    })
}

console.log("fetching data 1......")
    asyncFun1().then((res)=>{
    // console.log(res);
    console.log("fetching data 2......")
    asyncFun2().then((res1)=>{
        // console.log(res1)
    })


})

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             };
//         },3000);
//     })
// }

// // promise chain 
// console.log("getting data 1.......")
// getData(1)
//     .then((res)=>{
//         console.log("getting data 2.......")

//     return getData(2);
//     })
//     .then((res)=>{
//         console.log("getting data 3.......")

//         return getData(3)
//     }).then((res)=>{
//         console.log(res)
//     })