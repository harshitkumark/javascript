const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //DBcalls ,cryptography,network
    setTimeout(function(){
        console.log ('Async task is complete ');
        resolve()
    },1000)
})

promiseOne.then (function(){
 console.log("Promise consumed");
})

// another promise create without makinng an variable 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// another method for taking a data from an promise

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promisethree.then (function(user){
 console.log(user);
})

// another method to understand resolve and reject 

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Harshit",password:"123"})
        } else {
            reject ('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username 
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally (()=> console.log("The promise is either resolved or rejected "))

const promiseFive = new Promise(function(resolve,reject){
    444
})