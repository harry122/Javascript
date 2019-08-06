let obj = {
    name1 : 'harry',
    age : 25,
    gender : 'Male',
    hobbies : ['music', 'reading','playing'],
    bestFriend : {
        name1 :'maria',
        age : 45
    }
    
}

// let name = obj.name

// Object destructuring

let { name1 : myName,age} = obj;
let { gender : gen} = obj;

console.log(myName);
console.log(age);
console.log(gen);

let book = "you don't know";
let b = {
    name1 :'hello',
    book,
    fun : function() {
        console.log("hello JS");
        console.log("Function Created");
    }
};

console.log(b);
console.log(b.fun());

// Array Destructuring

let arr = [100,300,440,550];

// let arrNw = arr[0];

let [firstEle] = arr;
console.log(firstEle);

let [firstEle1,,thirdELe] = arr;
console.log("third element in array : ",thirdELe);

// Spread and REST operator

let max  = Math.max(...arr);   // math function uses values seprated with comma's ,so with spread operator we can pass values just by ... before arr.

console.log(max);

function sum(...n){
    console.log(n);
}
sum(100,200,300);