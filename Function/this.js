console.log(window);    // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

function foo(){
    console.log(this);      // it will always point to a global .
}

foo();   


let c  = 10;

function foo1(){
    var a = 10;
    console.log(this.c);  // it wil not work.
    console.log(this.a); // it will not work.
}

foo1();

// this keyword points to the current obj.
// this keyword if used points to  :
// In function -> window
// In method -> current obj.


var obj = {

    colr : 'blue',
    description : function (){
        console.log(this);

    
    function foo(){
        console.log("Inner function ", this)
    }

    foo();
}

}

obj.description();  // method so it will point to obj here .