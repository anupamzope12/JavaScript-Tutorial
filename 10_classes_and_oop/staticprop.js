class User{
    constructor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(`USERNAME : ${this.userName}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh =new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email=email;
    }
}

const iPhone=new Teacher("iphone","i@phone.com")
console.log(iPhone.logMe())
// console.log(iPhone.createId())