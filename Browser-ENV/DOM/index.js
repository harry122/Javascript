console.log(window.document);

console.dir(document);

console.log(document.documentElement);

// dom node/ fom tree. 
// for all the tabs of html or javascript their is a constructor available at properties.
// traversing dom tree we can get the details of child ,parent,siblings 
// everything represnt as a node only.


console.log(document.documentElement.hasChildNodes);

console.log(document.documentElement.childNodes);

console.log(document.documentElement.childNodes[2]);

console.log(document.documentElement.childNodes[2].childNodes);

console.log(document.documentElement.childNodes[2].childNodes[2]);

console.log(document.documentElement.childNodes[2].childNodes[2].parentNode);
console.log(document.documentElement.childNodes[2].childNodes[2].parentNode.parentNode);


document.documentElement.childNodes[2].childNodes[1].innerText = "hello, changed dynamically";

document.documentElement.childNodes[2].childNodes[1].style.color = 'blue';


console.log(document.documentElement.childNodes[2].childNodes[1].attributes);

console.log(document.documentElement.childNodes[2].childNodes[1].attributes[0]);

console.log(document.documentElement.childNodes[2].childNodes[1].id);

console.log(document.documentElement.childNodes[2].childNodes[1].className);

// console.log(document.documentElement.childNodes[2].childNodes[1].class); it will not work class is a reserve keyword.





