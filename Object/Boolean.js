let bool = new Boolean('false');
console.log(bool);

let bool1 = new Boolean("");
console.log(bool1);

let boo = new Boolean(new String(""));
console.log(boo);

let obj = {};
let s = "";

if(obj)
console.log("Its an Object");
else if(s){
    console.log("ok")
}
console.log("out of loop");