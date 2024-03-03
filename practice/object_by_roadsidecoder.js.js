// const func = {
//     name:"roadsiecoder",
//     age:54,
// }
// delete func.name;
// console.log(func)

// const func = (function(a){
//     delete a;
//     return a;
// })(5);
// // delete func.name; //delete is keyword only use din ibject 
//                     //we can not delete any local variable from delete keyword

// console.log(func)

// const user = {
//     name:"Roadside Coder",
//     age:23,
//     "like this video" : true,
// }
// // delete user["like this video"]
// console.log(user["like this video"])

// const property = "firstName";
// const name="Piyush Agrawal";

// const user = {
//     [property]:name,
// }

// console.log(user);

// const user = {
//     name:"Roadside Coder",
//     age:23,
//     "like this video" : true,
// }
// console.log(user)
// console.log()
// for(key in user){
//     console.log(key,user[key])
// }

// const nums ={
//     a:100,
//     b:200,
//     title:"My nums",
// };

// multiplyByTwo(nums);

// function multiplyByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key]==="number"){
//             obj[key] *= 2;
//         }
//     }
// }

// console.log(nums)

// const a={};
// const b={key:"b"};
// const c={key:"c"};

// a[b]=123;
// a[c]=546;

// // a["[object object]"]=123;
// // a["[object object]"]=546;

// // console.log(a[b]);
// console.log(a);

// JSON.Stringify vs JSON.Parse

// const user = {
//     name:"Roadside Coder",
//     age:23,
//     "like this video" : true,
// }

// console.log(user) // { name: 'Roadside Coder', age: 23, 'like this video': true }
// console.log()
// //To covert object into String we use JSON.stringify
// const strObj=JSON.stringify(user)
// console.log(strObj); //{"name":"Roadside Coder","age":23,"like this video":true}
// Most common use case of this is=> used to store the object inside loacalstoarege but we can not store the
// object directlty into local storage we need to convert that into string format

// localStorage.setItem("test",strObj)
// console.log(JSON.parse(localStorage.getItem("test")))

// console.log(JSON.parse(strObj))

// spread operator

// console.log([..."ANUPAM ZOPE"]);//it spread all of this character inside of this array

// const user={name:"anupam",age:45}
// const admin={admin:true, ...user}

// console.log(admin)


 