const User={
    _email:"anupam@gmail.com",
    _password:"adf",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)
console.log(tea.email)