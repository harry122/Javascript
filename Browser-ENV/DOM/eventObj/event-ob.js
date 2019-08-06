// let anc = document.querySelector('a');

// let n = 4;

// anc.onclick = function(e){

//     console.log(typeof anc);

//     console.log("This Keyword :",this);

//     if(n == 5){
//    // execute default behaviour\
//     }
//    else{
//     e.preventDefault();
//    console.log("Target :",e.target);
//    }

//     console.log(e);
// }


let anc1 = document.querySelector('a');

let audio = document.createElement('audio');

document.body.appendChild(audio);

function playSound(e){

    e.preventDefault();

    audio.src = anc1.href;

    audio.controls = true;

   // e.target = audio.src;     // it will only tell us the target element. here it is anchor tag.

    console.log(anc1.href);

    audio.play();
}

anc1.onclick = playSound;