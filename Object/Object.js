let obj = {};

let obj2 = new Object();

obj2.name = "jS";

console.log(obj2);

var person = {
    name :'bottle',
    color:'blue'
}

var person2 ={};

Object.assign(person2,person);

console.log(person2);
 
// Assign()
let o1 = {
    name:'harry'
}

let o2 = {
    name:'ashu',
    age: 27
}

Object.assign(o2,o1);
console.log(o1);
console.log(o2);    // the name property get merged .

// comparing both will result in false statement : value not get compared but the references get compared thts y its coming false.

let ob = {
    name:'harry'
}
let ob1 = {
    name:'harry'
}

console.log(ob == ob1);
console.log(ob === ob1);

ob2 = ob1;

console.log(ob2 === ob1);  // it will come true.

// but if we want to compare two object we will converted it to JSON.

console.log("Comparing with JSON :",JSON.stringify(ob) === JSON.stringify(ob1));


var per = {
    name : "harry",
    gender : "male",
    age : 25,
    hobbies : ['music','reading', 'book'],
    bestFriend : {
        name : 'Maria',
        gender :'female',
    },
    education : [
        {
            name : 'high School',
            passedOutYear : 2007
        },
        {
            name : 'graduation',
            passedOutYear : 2016,
        }
    ]
}


// how to iterate through object.

let key = Object.keys(per); // it will give array of keys available in that object.
console.log(key);

for(let i = 0; i<key.length ; i++){
    console.log(per[key[i]]);
    // console.log(per.key[i]);   it won't print the values are it will try to find a value with name key.
}
// forEach 

// Object.keys(per).forEach(ele => {
//     console.log(per[ele]);
// });


// for in loop
// with for in loop some browser shows the prototype property also so for safer side we can use if .

for( var prop in per){
    if(per.hasOwnProperty(prop)){
    console.log(prop);
    console.log(per[prop]);
}
}

// for of loop

console.log("Executing for of");

for(let key of Object.keys(per)){
    console.log(key,per[key]);
}


// parseInt(val,base)

let n = '12';

let num = parseInt(n);
console.log(typeof num);

console.log(parseInt(0xf,16));

//parseFloat()

console.log(parseFloat(13.212));

// isFinite

console.log(isFinite(13));
console.log(isFinite(1e309));   

// isNaN()

console.log(isNaN(12));
console.log(isNaN('abc'));





