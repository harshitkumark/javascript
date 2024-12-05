const user = {
    username : "harshit",
    price :999,
    WelcomeMessage: function (){
        console.log(`${this.username},welcome to websites`);
    }
}

user.WelcomeMessage
user.username = "harky"
user.WelcomeMessage()