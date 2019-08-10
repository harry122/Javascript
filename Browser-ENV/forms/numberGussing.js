let frm = document.querySelector(".form");



frm.addEventListener('click',function(e){

    let guessField = document.querySelector(".guessField").value;

    if(guessField.value == randomN(1,100)){

        console.log(guessField.value);
    }

})