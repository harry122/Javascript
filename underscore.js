const _ = {};

_.map = function(arr,cb){

    // Storage arr

    let storage = [];

    for(i = 0;i<arr.length ; i++){
        storage.push(cb(arr[i],i,arr))
    }
    return storage;

}


var ownMap = _.map([12,34,56],function(ele,i,arr){
    return ele*2
});

console.log(ownMap);


_.filter  = function(arr,cb){

    let storage = [];

    for(i = 0;i<arr.length ; i++){
    
        if(cb(arr[i],i,arr) === true){
        storage.push(arr[i]);
        }
}
return storage;
}

var ownFilter = _.filter([12,34,56],function(ele,i,arr){
    max = arr[0];
    if(arr[i] > max){
    return true;
    }
});

console.log(ownFilter);

