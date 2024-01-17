let myDate=new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())

// let myCreatedDate =new Date(2023,0,23) 
// let myCreatedDate =new Date(2023,0,23,55,56,2123,87)
// console.log(myCreatedDate.toLocaleString()); // ina JS month start from 0
// console.log(myCreatedDate.toDateString());

// let myCreatedDate=new Date("2023-01-14") // now here moth start from 01
let myCreatedDate=new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp= Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// // console.log(Math.floor(Date.now()/1000));

let newDate1=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())
// `${newDate.getDay()}`
console.log("slkddddddddd")
console.log(newDate1.toLocaleString('default',{
    weekday:"long",
    dayPeriod:'narrow'
}))