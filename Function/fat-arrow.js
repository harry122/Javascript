// fat arrow function

var add = function(a,b){
    return a+b;
}

var addi = (a,b) =>{
    return a+b;
}

console.log(addi(2,3));

//  

var additn = (a,b) => a+b;

console.log("More shorter Function : "+additn(5,4));


// if we want to pass only one value

var sq = a => a*a;

var sqVal = sq(10);
console.log("Passing one value only: "+sqVal);

