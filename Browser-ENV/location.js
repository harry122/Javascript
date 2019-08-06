console.log(location);

for(var i in location){

    if(typeof location[i] == 'string')
        console.log(`${i} : ${location[i]}`);

}

// location.href = "https://www.thruskills.com/";

//reload current window

// location.reload();

//location.assign("https://www.thruskills.com/");

// location.replace("https://www.thruskills.com/");  // does the same thing like assign,but doesnt create histroy like assign.