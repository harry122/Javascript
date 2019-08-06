let today = new Date();  // new keyword return an object but with date a toString method applied internally to we get our date in string.

let tm = Date.now();

console.log(tm);

let td = new Date(tm);

console.log(td);

// epoke time

let epTime = new Date(0);
console.log(epTime);

console.log(today);

//date
let currntDate = today.getDate();
console.log(currntDate);

//month
let month = today.getMonth();
console.log(month+1);

//year
let yearTy = today.getFullYear();
console.log(yearTy);

//time
let time = today.getTime();
console.log(time);

//hours

let t = today.getHours();
console.log(t);

// moment.js library we can use to work with date.


//setDate
let newD = today.setDate(5);
console.log(newD);
console.log(new Date(newD));


var c = Date.now();
for(var i = 0 ; i < 100000; i++){


}

console.log("current : ",Date.now() - c);

var userDate = new Date('07-12-2019');

var uD = new Date(userDate);

console.log(uD);