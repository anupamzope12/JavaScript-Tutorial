function setUserName(username){
    //complex DB calls
    this.username=username;
    console.log("called")
}

function createUser(username,email,password){
    setUserName.call(this,username)
    // this.username=username
    this.email=email,
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","123");
console.log(chai)

/*

The .call() method is particularly useful when you want to borrow methods from one object and use them in the
 context of another object, or when you want to explicitly set the this value for a function.

In JavaScript, the .call() method is a part of the Function prototype, and it is used to invoke a function with 
a specified this value and individual arguments.

*/