function Person (name, gender){

    this.name = name;
    this.gender = gender;

}

var js = new Person('javascript', 'male'); // it will return an object so here we don't have to return anything.
console.log(js);

var ashu = new Person("js", ' Male');

var ashu1 = Person("js","subject");         // it will return a value not an object untill n unless you return a object.
console.log(ashu);                          // it will return undefined.


// Function property
console.log(Person.length);                 // it will return the parameters we have passed.

console.log(Person.constructor);            // ƒ Function() { [native code] } this function is created behiend the seen with name of function only.

console.log(Person.prototype);
console.log(typeof Person.prototype);           // object only.

Person.prototype.age = 25;                      // it will available to all the object created with function Person.

console.log(Person.prototype.age);      // 25

console.log(js.age);
console.log(ashu.age);
// console.log(ashu1.age);          // it will through an error.

// function has 3 property  : length , constructor , prototype

// object has contructor proprty attached to it,which return the same function .

console.log(js.constructor);
console.log(ashu.constructor);

// from where these property coming from.

console.log(js.hasOwnProperty('name'));
console.log(ashu.hasOwnProperty('gender'));

console.log(ashu.hasOwnProperty('age'));

console.log(ashu.constructor.prototype.hasOwnProperty('age'));

console.log(Person.constructor.prototype.hasOwnProperty('age')); // false

var str = js.age.toString();
console.log(typeof str);

// prototype channing / prototyial inheritance
console.log(Object.hasOwnProperty('toString'));
console.log(Object.constructor.prototype.hasOwnProperty('toString'));

// Object

var obj = {};

var obj2 = new Object();

console.log(obj.constructor);
console.log(obj2.constructor.prototype);

// Array

var arr = [1,2,3,4,5];
var arr2 = new Array();

console.log(arr2.constructor); 

// we can override 

// Changing the behavior of the push property
Array.prototype.push = function(){
    return "Hello";
}

console.log(arr2.push());

Array.prototype.add = function(){

    console.log(this);
}

console.log(arr.add());


Array.prototype.add1 = function(){

    console.log("our add",this);
    var res = 0;
    for(var i = 0 ;i< this.length;i++){

        res+= this[i];
    }
    return res;
}

var arrNew = new Array(1,2,3);

console.log(arrNew.add1());
console.log(arr.add1());


//  _proto_

var newArray = new Array(1,2,3);

// property of obj instance
console.log(newArray._proto_);

// property of constructor function
console.log(newArray.prototype);
console.log(newArray.constructor.prototype);

//console.log(js._proto_);
//console.log(js.prototype);


