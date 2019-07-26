 var arr = [1,2,3,4,5];

 var arr1 = new Array(1,2,3);

 var newArr = new Array(5);
 console.log(newArr);      // (5) [empty × 5] ,it will create an empty array of length.

 // Push
 arr.push(34);
 console.log(arr);

 // Pop
 arr.pop();
 console.log(arr);

 // Unshift
 arr.unshift(23);
 console.log(arr);

 // shift
 arr.shift();
 console.log(arr);

 // slice
var sliced = arr.slice(1,4);   // start index is included end is not included. it will not affact our original array.
console.log(sliced);

console.log(arr);
// spliced
 arr.splice(1,3,"a","b","c"); //  it modified our original array and it tells which to remove from 1 to 3 we want to remove.

console.log(arr);

// sort  => according to the ascii

var unsorted = [5,8,4,6,1];
var sorted = unsorted.sort();
console.log('sorted',sorted);

var unshorted1  = [2,33,45,3,44];
var sorted1 = unshorted1.sort();
console.log(sorted1);

// join()

var names = ['a','s','h','u'];
console.log("join :",names.join(''));
console.log("join :",names.join('-'));
