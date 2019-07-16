function Person (name,age){
    this.name = name;
    this.age = age;
    this.description = function(){
            console.log(this.name);
            console.log(this.age);
    }
    
}

var p = Person('ashu',27);  // if you dont return anything from your function it will return undefined. but if we are using new it return a obj.
Person('ashu',27);
// console.log(name);
console.log(p);

// New keyword is used to create a obj.

var p1 = new Person('ashu', 26);
console.log(p1);            // Person {name: "ashu", age: 27}

var p2 = new Person('JS',28);
console.log(p2);                    

p2.description();   // p2 is obj and descrption is now a method to it so this keyword will point to current obj.
                    // js and 28 it will return.



//  if we a return anything except object it will return a object. if we return object it will return that object.

function Person1(name,age){
    this.name = name;
    this.age = age;
    return "hello";

}
var pe = new Person1("harish", 27);
console.log(pe);

// it will return a object

function Person2(name,age){
    this.name = name;
    this.age = age;
    
}

var pe1 = new Person2("harish", 21);
pe1.gender = "Male";
console.log(pe1);


var js = new Person2("ashu1",23);
console.log(js);


// prototype property 

console.log(Person.prototype);
console.log(typeof Person.prototype);
Person.prototype.married = "Yes";
console.log(Person.prototype.married);