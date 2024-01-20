// const user={
//     userName:"hitesh",
//     loginCount: 8,
//     signIn: true,
//     getUserDetails : function(){
//         // console.log("got user details from database")
//         // console.log(`username: ${this.userName}`)
//         console.log(this)
//     }
// }


// console.log(user)
// // console.log(user.getUserDetails())
// // console.log(user["signIn"])
// // console.log(this)

// const promiseOne=new Promise()
// const date=new Date()

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`welcome ${ this.username}`);
    }

    return this
}

const userOne=new User("hitesh",12,true)
const userTwo=new User("chaiaurcode",11,false)
console.log(userOne.constructor)
// console.log(userTwo.construcotr)

