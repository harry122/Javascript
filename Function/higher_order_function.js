function outer(){

    var outVar = 34;

    function inner(){

        var Innervar = 30;
        console.log("Inner FUnction");
        console.log("Outer variable : "+outVar);

    }

    inner();
    
    // console.log("Inner function : "+Innervar); // Uncaught ReferenceError: Innervar is not defined.
    console.log("Outer Function");
}

outer();


// changing the whole function to literal form

var a = function(){

    var b = function(){

        console.log("inner");

    }
    b();

}

a();


// program

function add(a,b){

    function square(x){
        return x*x;
    }
    var sum = a+b;
    return square(sum);
}

var sq = add(5,5);
console.log(sq);

// only return function

function add1(a,b){
    function add2(x){
        return x*x;
    }
    var sum = a+b;
    // return add2(sum);
    return add2;  // holding the reference as we are not using ()
}
var sq1 = add1(2,2);

// var s = sq1(10);   // we have to do like this while using referecne type.
console.log(sq1);

// 

function mult(a,b){
    var sum = a + b;

    function square(){
        return sum*sum;
    }
    return square;
}

var s = mult(2,4);
var s1 = s();
console.log("Value of return function: "+s1);


// simple eg of high order function

function outer1(){

    console.log("Outer function executed");

    function inner1(){
        console.log("Inner function executed");
    }

    console.log("Out of Outer function");
   return inner1;
}

var inn = outer1();
inn();

// when a function remember its scope from whereever it returns. => closure.

// Passing a function eg.

function fullName(fn1,fn2){
    let first = "Harish";
    let last = "Mehra";

    return fn1(first) +" "+ fn2(last);
}

function firstName(n){
    return n;
}

function lastName(l){
    return l;
}

let fn = fullName(firstName,lastName);
console.log(fn);

// 