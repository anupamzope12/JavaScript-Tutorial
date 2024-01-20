class User{
    constructor(email,password){
        this.email =email
        this.password=password
    }
    get password(){
        return `${this._password}hitesh`
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    set password(value){
        this._passvword=value
    }
}

const anupam=new User("anupam@gmail.com","jana")
console.log(anupam.password)