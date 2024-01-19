async function hello(){
    console.log("hello")
}

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data")
            resolve(200);
    
        },2000)
    })
}
async function getWeatherData(){
    await api() //1st
    await api() //2nd call
}

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

// async function getAllData(){
//     console.log("geting data 1......")
//     await getData(1)
//     console.log("geting data 2......")
//     await getData(2)
//     console.log("geting data 3......")
//     await getData(3)
//     console.log("geting data 4......")
//     await getData(4)
//     console.log("geting data 5......")
//     await getData(5)
//     console.log("geting data 6......")
//     await getData(6)
// }

//With IIFE
(async function (){
    console.log("geting data 1......")
    await getData(1)
    console.log("geting data 2......")
    await getData(2)
    console.log("geting data 3......")
    await getData(3)
    console.log("geting data 4......")
    await getData(4)
    console.log("geting data 5......")
    await getData(5)
    console.log("geting data 6......")
    await getData(6)
})();
