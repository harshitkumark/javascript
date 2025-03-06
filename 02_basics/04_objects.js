// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn = false

 //console.log(tinderUser) ;
 
 const regularUser = {
    email : "some@gmail.com" ,
    fullname :{
        userfullname : {
            firstname :"harshit"
            //lastname :"kumar"
        }
    }
 }
  //
  // console.log(regularuser.fullname.userfullname.firsrname);

  const obj1 ={1:"a",2: "b"}
  const obj2 ={3:"a",4:"b"}

  //const obj3 ={obj1,obj2} // same problem coming like array 

  //console.log(obj3);

  //objects dstructing with api

  const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"hitesh"

  }

  //course.courseInstructor

  // another syntax to print these all

  const {courseInstructor} = course

  console.log (courseInstructor);