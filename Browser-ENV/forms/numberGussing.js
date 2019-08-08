let frm = document.querySelector(".form");

function randomN(max,min){

    console.log(Math.floor(Math.random * min);

}
 randomN(1,99);

frm.addEventListener('click',function(e){

    let guessField = document.querySelector(".guessField").value;

    if(guessField.value == randomN(1,100)){

        console.log(guessField.value);
    }

})