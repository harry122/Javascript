let para = document.querySelector("#firstpara").style.color = "blue";

console.log(lastpara);

 lastpara.lastChild.textContent = 'Dynamic value';

console.log("first paragraph :",firstpara.childNodes);

let paraFirstChild = firstpara.firstChild;

paraFirstChild.textContent = 'this is an em tag';

console.log(paraFirstChild);

console.log(lastpara.childNodes);


// innerText and innerHtml

// lastpara.innerText = "Hello using InnerText property";

//lastpara.innerHTML = 'hello using innerHtml property <span>Text innerHtml</span>';

console.log(lastpara);

// lastpara.style.color ="red"

// lastpara.style.border = "1px solid black";

// cssText

console.log("style of last para :",lastpara.className);

lastpara.style.cssText = "color : blue ; border : 1px solid gray";

lastpara.style.cssText += "font-size : 18px";


// classList 

console.log("Classlist of lastpara ",lastpara.classList);

lastpara.classList += " dynamic class";

// className

console.log("className Of last para: ",lastpara.className);

lastpara.className += " class3";


console.log(secondPara.dataset.id);

//console.log(para.dataset.id);