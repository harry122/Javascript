// Default Parameters
// we can assign default parameters to our function passing only one value here will not through any error.

function multiplication(a = 3, b = 4){
if(typeof a =="number" && typeof b == "number")
    return a*b;
}

console.log(multiplication(2));


// wap to reverse an array.

function reverseArray(arr){
var i = 0;arr2 = [];
for( i = arr.length - 1; i<=0 ;i--){

arr2[i]= arr[i];

}
return arr2;
}

var arr=[2,3,4,5];
reverseArray(arr);
for(i = 0 ;i<=arr2.length;i++){
console.log(arr[i]);
}