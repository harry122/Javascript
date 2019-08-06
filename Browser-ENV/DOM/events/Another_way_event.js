let btn = document.querySelector('button');

// btn.addEventListener('click', function (e) {
//     console.log(e);
//     alert("I'm an addEventListner");

// })


                        // multiple listener for same event we have with addEventListener.


function handler2(e){
    alert('hi');
    btn.removeEventListener('click', handler2);
}

function handler(e){
    alert('hello');
}

btn.addEventListener('click',handler);

btn.addEventListener('click',handler2);

//btn.removeEventListener('click', handler2);


// on click two element create backgrnd and p and then on another click p has to removed.