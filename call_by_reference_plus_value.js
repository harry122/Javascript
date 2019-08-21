var obj ={name : 'js'};

function foo2(x){
    x.name = 'javascript';
}

foo2(obj);
console.log(obj.name);  // call by reference  // javacript


var x = 10;

function foo(x){
    x = 20;
}

foo(x);
console.log(x);  // 10 call by value
