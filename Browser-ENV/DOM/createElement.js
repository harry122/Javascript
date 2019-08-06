let para = document.createElement('p');
 
para.innerText = "hello i am para";

document.body.appendChild(para);

// it will append as a last child.

let hobbies = ['football','music','coding'];

if(hobbies == ""){
    alert("Array is Empty");
}
else{
let hobb = document.createElement('ul');
let heading = document.createElement('h3');
 
heading.innerText ="Hobbies";

for(var i in hobbies){

hobb.innerHTML += `<li>${hobbies[i]}</li>`;

}
document.body.append(heading);
document.body.append(hobb);
}
