// PI

console.log("PI :",Math.PI);

// Euler's 

console.log("Euler :",Math.E);

// LN2 

console.log("LN2: ",Math.LN2);

// LN10

console.log(Math.LN10);

// sqrt2

console.log("sqrt2 : ",Math.SQRT2);

// max()

console.log("Max :",Math.max(12,34,43));

// Min()

console.log(Math.min(12,3,45,1));

// Random 

console.log("Random :",Math.random());

function randomNumber(min , max){

    return parseInt(Math.random() * (max - min) + min);

}

console.log(randomNumber(1,100));


var arr =[23,45,67,76];

console.log("Max. of array: ",Math.max(...arr));

// floor() rounds down
// ceil() rounds up
// round() nearest value

console.log(Math.floor(10.5));
console.log(Math.ceil(10.5));
console.log(Math.round(10.5));


// pow()

console.log(Math.pow(2,2));
console.log(Math.pow(2,7));

// sqrt()

console.log(Math.sqrt(16));