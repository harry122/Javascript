function printName(){
    // body of function
    console.log("Harish Mehra");
}

// Calling a function
printName();

// passing Pararmeter
function sum(a,b,c){

    console.log("Addition of two number: ",+ a+b);

}
// Passing argument
sum(5,6,6);


function sum1(a,b,c){
    console.log(a+b+c); // NaN becz we are adding and after adding as c is undefined
}
sum1(2,3);


// Return  stop the execution also.

function valueReturn(a,b,c){
    if(a && b && c)
    return a+b+c;
    else
    console.log("execute ends");
}

var add = valueReturn(2,3);
console.log("value of returned value: ",+add);


// our function always return a value whether we defined a return or not. it alwz return undefined.


//  problem 
// argment only

function mult(a,b){
    console.log(arguments);    // Is an object but also behaves like an array.
    console.log(arguments.length);
    console.log(typeof arguments);

    var res = 0;
    for(i=0;i<arguments.length;i++){
        res += arguments[i];
    }
    return res;
}

var res = mult(2,3,4,5,6,7,7);
console.log(res);