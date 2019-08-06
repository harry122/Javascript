let btn = document.querySelector('button');


// function btnHandler(){
//     alert("hii Clicked");
// }

// btn.onclick = btnHandler;


let para = document.createElement('p');
document.body.appendChild(para);

function btnHandler1(){

    let nm = document.querySelector("#name").value;
   if(nm){
    para.innerText = `Welcome ${nm}`;
    para.style.background ="green";
    para.style.color = "white";
   
   }
   else{
    para.innerText = "Please provide your name";
    para.style.background = "red";
    
   }
}

btn.onclick = btnHandler1;