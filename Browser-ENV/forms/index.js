
let frm = document.querySelector('form');

let para = document.createElement('para');

 document.body.appendChild(para);

frm.addEventListener('submit',function(e){

    e.preventDefault();

    let name = frm[0].value;

    console.log(name);

    // if(!name){
    //     let err = document.querySelector("#h");
    //     err.innerHTML ="field cannt be empty";
    // }

    // let name = document.querySelector("#name").value;

    let n = document.querySelector("input[name = name]").value;

    let em = document.querySelector("input[name = email]").value;

    let pass = document.querySelector("input[name = pass]").value;

    // if(n == ''){
        
    //     para.innerText = "Name field cann't be empty";
    //     para.style.color ="red";
    //     document.body.appendChild(para);
    // }

});


let nameField = document.querySelector('input[name = name]');

nameField.addEventListener('blur',function(e){

    let val = nameField.value;

    if(val == '' && name.length < 2){

        //let para = document.createElement('para');
        nameField.style.border = "1px solid red";
        para.innerText = "Name field cann't be empty";
        para.style.color = "red";
    }

})

let emailFeild = document.querySelector('input[name = email]');

emailFeild.addEventListener('focus',function(e){

    emailFeild.style.body ="1px solid green";
    para.innerText ="please pass a correct email";
      para.style.color = "red";   


})





