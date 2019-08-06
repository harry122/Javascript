// Error takes three things name ,msg and stack trace.

console.log("Program Starts");
function foo(){
    
    console.log("n");

}

// try catch block

try{

foo();

try{
    throw new Error('fix it')
} catch(er){
    console.log('Inner Catch',er);
}

throw new Error('Something went wrong');
 // throw ReferenceError("");
 // throw SyntaxError("");
 


} catch(error){
    console.log('catch Block');
    console.log(error);
    console.log(error.message);

} finally{
    console.log('Please fix the function')
}

console.log("Program ends");
