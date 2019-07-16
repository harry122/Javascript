var a = 10;

var b = 20;

function foo(x,y){

    var insideFUn = 30;
    console.log('global scope a',+a);
    console.log('parameter x', +x)
    return insideFUn;
}

foo(2,3);
// console.log(insideFUn);   //  insideFUn is not defined
// parameters are also function scope.

//  console.log(x);          //  x is not defined



// wap 
foo1();

var x = 20;

function foo1(){
console.log(x);                // undefined 
var x = 30;
console.log(x);               // 30
}



// it will read like this because of HOISting. the variables are always declared on the top when the execution happen.
// medium.com download
//
//var x = 20;
//function foo(){
 //   var x;
  //  console.log(x);
  // x = 30;
  // console.log(x);

//}

// foo();


// hoisting global

console.log(js);

var js = 20;  // undefined

// in function the order doesnt matter.because function foo1 also declared but the values inside it will be accessible after we call a foo1()

// why we need var keyword .bcoz read operation gives not defined but write operation give undefined.and
// if we dont use var it will decalred in global scope still if it is assigned in local scope.


function foo2(){
    faa = 30;  // global scope
    
}

foo2();
console.log(faa);


// ES6 const and let

const PI = 3.14;
console.log(PI);

// PI = 3.1434;
// console.log(PI);      Uncaught TypeError: Assignment to constant variable.

const obj = {                       // it holds the reference we are changing the inner object. 
 name : 'js',
 version : 'ES6'
}
obj.name = 'javacript';
console.log(obj);


var obj2 = {
n : 'hello'
}

// obj = obj2;                  // Uncaught TypeError: Assignment to constant variable.

// console.log(obj);

// google;
// console.log(google);    // read operation // not defined.

// google = 20;
// console.log(google);  // write operation // value will be printed.

//var google;              // undefined
//console.log(google);  


 // Let keyword // block scope

 let v = 20;

 console.log("let variable declared: "+ v);

 //if(true){
 //    let g = 9.8;
// }
//
//   console.log(g);



 // eg :  error : Uncaught ReferenceError: Cannot access 'egg' before initialization.

 //let egg = 30;
// let xy = 20;
//function f(){
    // console.log(xy); // it will print the value
 //   console.log(egg);
 //   let egg = 30;
 //   console.log(egg);

// }

// f();
// hoisting is their but we cannt access the variable defined with let keyword.


