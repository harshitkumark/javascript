const clock = document.getElementById('clock');

// both are same 

//const clock = document.querySelector('#clock')

setInterval (function(){
let date = new Date ();
// agr console m print toh console .log karege 

//console.log(date.toLocaleTimeString());

clock.innerHTML = date.toLocaleTimeString();
},1000);