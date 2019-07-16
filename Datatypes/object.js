// Class is a blueprint for object.

var obj = {};
console.log(obj);
console.log(typeof obj);


var obj1 = {
    Math : 60,
    Science : 76,
    histroy : 88,
    english : 90
}

console.log(obj1);

// Dot Notation

console.log(obj1.english); 

var scoreInMath = obj1.histroy;
console.log(scoreInMath);

var person = {
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

console.log("type of person.bestFriend : ",person.bestFriend);
console.log(person.bestFriend.gender);
console.log(person.education[1].passedOutYear);

// Adding a property

person.married = false;

console.log(person.married);

// Updating a property

person.name = "JS";

console.log(person.name);

// Deleting a property

delete person.married;

console.log(person);


// Bracket Notation

console.log(person['name']);

console.log(person['bestFriend']['name']);

console.log(person['bestFriend'].name);

// why Bracket notation bcoz we cant do like this "person.social science" it will through an error

var obj2 = {
    12 : 12
}

console.log(obj2['12']);

// we can use bracket notation to get the value from users

var query = 'name';

console.log("Using bracket notation : ",person[query]);  // it will be like person.name

console.log(person.query); // it will not work


// if we want to add a value that we don't the name for it we can do that 

var k = 'married';
var value = false;

person[k] = value;

console.log(person);


//  a Problem => pass by reference thats why we are getting the same value in this problem

var ob = {
    a : 50,
    b : 60
}

var ob1 = ob;
 ob1.a = 60;

console.log(ob.a);
console.log(ob1.a); 

// var a = 10; var b = a; ; b = 50; // Pass by value



