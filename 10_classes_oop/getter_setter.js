class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password (value){
        this ._password  = value.toUpperCase()

    }

}

const harshit = new User("h@harshit.ai","123")
console.log(harshit.password)