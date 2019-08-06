
console.log(document.documentElement.childNodes);

console.log(document.documentElement.childNodes[2]);

// document.documentElement.childNodes[2].style.backgroundColor = 'red';

function randomNumber(min,max){

    return parseInt(Math.random() * (max - min ) + min);

}

// document.documentElement.childNodes[2].style.backgroundColor = `rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`;

document.querySelector("body").style.background = `rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`;