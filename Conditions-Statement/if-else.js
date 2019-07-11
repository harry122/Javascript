// Jsbin.co

var name = 'JS';

var version = "ES5";

// If Statement

if( name == 'JS' && version == "ES5")
{
    console.log("Executing If block");   
}

// Else Statement

if(name == 'javascript'){
    console.log("excuting");
}else{
    console.log("Else part is executing");
}


if(name == 'javascript'){
    console.log("first condition");
}else if(name == 'JS'){
    console.log("Excecuting Else-if");
} else{
    console.log("executing inside else");
}

var total = 300;

var leftMoney = 60;

if(leftMoney < 50) {
    console.log('20 % tip')
} else if (leftMoney > 50 && leftMoney < 200) {
    console.log('15% tip')
} else {
    console.log('10% tip')
}

//ternary operator

// (condtion) ? truth : falsy

var dis = (leftMoney < 50) ? 20 : (leftMoney > 50 && leftMoney < 200) ? 15 : 10;

console.log(dis);