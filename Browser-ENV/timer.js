// setTimeOut(callback , time(in ms))

// function greet(){
//     alert("hello");
// }

// setTimeout(() => {
    
//    setTimeout(() => {
//        console.log('2');
//    }, 2000);

//    console.log('1');

// },1000);



// setInterval

// var n = 1;

// var stInt = setInterval(()=>{

// console.log(new Date());

// if(n == 5){
// clearInterval(stInt);
// }

// n++

// },2000);

// program to run a clock 

let t = new Date();
let hr = t.getHours();
let min = t.getMinutes();
let sec = t.getSeconds();

setInterval(()=>{



},1000); 

console.log(hr +" : "+ min +" : "+ sec);




