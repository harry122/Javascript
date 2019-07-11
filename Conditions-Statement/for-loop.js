for(i = 1;i <= 10 ;)
{
    console.log('looping with for loop: 2 x '+i +' = ' +2*i);
    i++;
};

var arr = [23,43,44,55,65,64,24,56,66];
var arr1=[];

for(i = 0;i < arr.length ;i++){
    
    var temp = arr[i] * 2;
    console.log("Index "+i +" = " +arr[i]);
    arr1.push(temp);
};

// To create a new array where elements are multiplied by 2 

console.log(temp);
for(i = 0;i<arr1.length;i++){
console.log("Index "+i +" = " +arr1[i]);
}

// reverse an array

arr2 = [];
for(i = arr1.length -1 ; i >= 0 ;i--)
{
    arr2[i] = arr1[i];

    console.log("Values in reverse : "+ arr2[i]);

}

