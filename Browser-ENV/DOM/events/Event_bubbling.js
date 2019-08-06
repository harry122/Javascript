
let ul = document.querySelector('ul');
let li = document.querySelector('li');
let anc = document.querySelector('#anc');

ul.onclick = function(){
alert("UL clicked");
}

li.onclick = function(){
alert("LI clicked");
}

anc.onclick = function(e){
    
    // Stop bubbling
 e.stopPropagation();
alert("anchor clicked");

}

