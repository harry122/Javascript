const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// 1.Give array of inventors 'first and last name ' 

let FirstLast = [];

// for(i =0 ;i< inventors.length;i++){

//     let fN = `${inventors[i].first} ${inventors[i].last} `;

//     FirstLast.push(fN);

// }


/* map() - Always return an array */


// let fullName = inventors.map(function(ele,index,arry){
//     // console.log(ele);
//     // console.log(index);
//     // console.log(arry);

//     return `${ele.first} ${ele.last}`
        
// });

// console.log(fullName);



// fat arrow function :

let fullName = inventors.map(ele => `${ele.first} ${ele.last}`);

console.log(fullName);

// babel => it convert the versions .

// Q 2. Filter the list of inventors for those who were born in the 1500's

// let yers = [];
// for(var i =0 ;i < inventors.length;i++){
//     if(inventors[i].year >= 1500 && inventors[i].year < 1600)
//             yers.push(inventors[i]);
// }
// console.log(yers);


//let year =  []
//   let fullName1 = inventors.map(ele => {
//         if(ele.year > 1500 && ele.year < 1600){
//         var yr = ele.year ;
//         year.push(yr);
//     }
//   });
//   console.log(year);


/* filter()  = return bolean value */

// let fifteenth = inventors.filter(ele => {
//     if(ele.year >= 1500 && ele.year < 1600 )
//         return true;
// });
//     console.log(fifteenth);


let fifteenth1 = inventors.filter(ele => ele.year >= 1500 && ele.year < 1600);
 console.log("Value from FILTER function",fifteenth1);

 // your function always return undefined. solve this with map if condition and than return.



 /* 3. Sort the inventors by birthdate, oldest to youngest  */
// Sort () => it passes a compare function . sort depending on 1 (asc) ,-1 (desc) , 0 (equal)

// let ordered = inventors.sort(function(a,b){
//     if(a.year > b.year)
//         return 1;
//     else
//         return -1;
// });
//     console.log(ordered);

let ordered1 = inventors.sort((a,b) => a.year > b.year ? -1 : 1) ;
console.log("desc",ordered1);


//

var arr = [10,25,15,16];
var i,sum = 0;  
for(i = 0 ;i<= arr.length;i++){
     sum = sum + arr[i];
}
console.log(sum);



// Q. How many years did all the inventors live?

var live = [];
sum = 0;
var p,y,lived =0;
for(i =0 ;i< inventors.length;i++){
   lived = inventors[i].passed - inventors[i].year;
   sum +=lived;
   live.push(lived);
    
}

console.log(live);
console.log(sum);

function cb(ini,ele){
    return ini + (ele.passed - ele.year);
}
let year = inventors.reduce(cb,0);

// reduce 

// var red = inventors.reduce((initial,ele) => {
//     return initial + (ele.passed - ele.year)
// },0);
// console.log("total :",red);

var totalYear = inventors.reduce((ini,ele) => ini + (ele.passed - ele.year), 0);
console.log("totalOfYears with reduce :",totalYear);


// forEach() :Used to iterate through array.

inventors.forEach(function(ele,index,arr){
    console.log(ele);
});






    


