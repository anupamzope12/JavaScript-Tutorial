// const tinderUser=new Object() // singleton object

const tinderUser={};  //non singleton

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname : {
        userfullname:{
            firstName:"Anupam",
            lastName:"Zope"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj={obj1,obj2}
// const obj=Object.assign({},obj1,obj2)

const obj={...obj1,...obj2}

// console.log(obj)

const users=[
    {
    id:1,
    email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"   
    },
    {

    },
    {

    }
]
// console.log(users[1].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

/* **************************************************************************** */

const course={
    courseName:"Js is hindi",
    price:"999",
    courseInstructor:"hitesh"
}
 
// console.log(course.courseInstructor)

//Destructure of objects

const{courseInstructor:instructor}=course
const{courseName,price}=course

console.log(instructor)
console.log(price)

// {
//     "name" : "hitesh",
//     "courseName" : "js in hindi",
//     "price" : "free"

// }
[
    {},
    {},
    {}
]