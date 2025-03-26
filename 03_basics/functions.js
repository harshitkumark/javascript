function sayMyName (){
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")
}

//sayMyName()

function loginUserMessage(username){
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username}just logged in`

}

//console.log(loginUserMessage("ANSHU"))

//console.log(loginUserMessage())

//like an  ekart the price adding system 

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${
        anyobject.price}`)

}
//handleobject(user)
handleobject({
    username : "harshit",
    price :399
})