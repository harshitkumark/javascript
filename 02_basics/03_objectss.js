   

const mySym = Symbol("key1")


const JsUser={
    name:"harshit" ,
    age:18 ,
    location : "dhanbad" ,
    email :"kharshit3915@hduw.com" ,
    isLoggedIn : false,
    lastLoginDays :["Monday" , "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email ="kharshit3015@gmail.com"
Object.freeze(JsUser)
JsUser.email = "harshitz@hdu.com"
console.log(JsUser)