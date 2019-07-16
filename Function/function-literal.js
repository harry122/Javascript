// foo();  // it will not work.

// function literal 

var foo = function(){                   // Function expression

    console.log("literal notation for function");

}

foo();

var add = function(a,b){

    return a+b;

}

console.log(add(1,2));


//Used cases of anonymous function

// self executing function
// callbacks

//1. self executing 
// It will execute only once and also on one calls it later.
// to prevent global conflict.


(function (){
    console.log("Annonymous function");
})();

(function (a,b){

    console.log(a);
    console.log(b);

})(5,6);

// 2. Callbacks

function subtract(x,y){

    return x-y;
}

function square(a){
    return a*a;
}

var sub = subtract(10,5);
var sq = square(sub);

console.log("passing function to value: "+sq);    // 25

// high order function
// any fn accept a fn as a parameter.
// a fn return a fn.

function multi(x,y,cb){

    if(typeof x == 'number' && typeof y == 'number')
    {
        return cb(x*y)

    }
    else {
        return "Please pass a number"
    }

}

var rs = multi(5,5,square);


console.log("Passing another function: "+rs);

// or 

var rs1 = multi(10,10,function(a){
    return a*a;
});
console.log("Passing annonymous function: "+rs1);

var rs2 = multi(5,5, (a) => a*a);
console.log("Passing with fat arrow way ",+rs);