// function add (a,b,cb) {
//     if(typeof a == 'number'){
//         let add = a+b;
//         return cb(null,add);
//     } else {
//         return cb('pass a number :',null);
//     }
// }

// function square(n,cb) {
//     if(typeof n == 'number'){
//         return cb(null,n*n);
//     } else {
//         return cb('square function accepts a number',null);
//     }
// }

//  add(2,3,function(err,data){
//     if(err){
//         console.log(err);
//      } else{
//          console.log('data :',data);
//          square(data,function(err,sqData){
//              if(err) {
//                  console.log('square err : ',err);
//              } else {
//                  console.log('Square value : ',sqData);
//              }
//          })
//      }
// });



// Promise way // to make it async .

function add (a,b) {
    return new Promise(function(resolve,reject) {
        if(typeof a == 'number' && typeof b == 'number') {
            let add = a+b;
            resolve(add);
        }   else {
            reject(new Error('Add Function accepts a number'));
        }
    })
}

function square (n) {

    return new Promise(function (resolve , reject) {
        if(typeof n === 'number'){
            resolve(n*n);
        }   else {
            reject(new Error('Square function Accepts a Number'));
        }
})

}

// add(2,3)
//     .then(d => console.log('add then block',d))      
//     .catch(err => console.log(err))  
      

add(2,3)
    .then(d => square(d))        
    .then(sqd => console.log("Square data :",sqd))                     // this then block (cb fn) accepts a callback function.
    .catch(err => console.log(err))


// if we want to execute both them sepeately 


// add(2,4).then(d => console.log(d)).catch(err => console.log(err))

// square(2).then(d => console.log(d)).catch(err => console.log(err))


Promise.all([add(2,3),square(5)])
.then (data => console.log('Promise all',data))
.catch(err => console.log(err))