// dates 

let myDate = new Date ()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);
  


// this code is defined our specific date 

//let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString());

//to create dd mm yy dates 

let myCreatedDate = new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
