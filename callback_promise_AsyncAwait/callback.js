// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b)
// }

// calculator(1,2,(a,b)=>{
//     console.log(a+b)
// })

// const hello=()=>{
//     console.log("hello")
// }

// setTimeout(hello,1000)

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data ",dataId)
//         if(getNextData){
//             getNextData();
//         };
//     },2000)
// }

//when ever we call any API it return data in promise

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             };
//         },5000);
//     })
// }

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data ",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            };
        },3000);
    })
}
 
//call back hell 
// getData(1,()=>{
//     console.log("getting data 2")
//   getData(2,()=>{
//     console.log("getting data 3")

//     getData(3,()=>{
//         console.log("getting data 4")

//         getData(4)
//     })
//   });  
// })  

//not a good way of programming thta developer can not understand
//this is called nested callback hell

// getData(2,()=>{
//     getData(3);  
//   })  
// getData(3)
// getData(5665)