//Steps
/**
 * First access inpt field ,sunbmit btn,display image div
 * attach a click event on submit button
 * inside event handler 
 */


let sbmtBtn = document.querySelector('button');
let inpt = document.querySelector('input');
let displayImg = document.querySelector('.images');

//vanilla javascript 


function getData() {
    
    let value = inpt.value;
    
    let xhr = new XMLHttpRequest();

    function handler(){

        displayImg.innerHTML ="";

        if(xhr.readyState < 4){
            return;
        }
        if(xhr.status != 200){
            return;
        }
        console.log(JSON.parse(xhr.responseText));
        let resp = JSON.parse(xhr.responseText);

        let imgs = resp.data.images;

        Object.keys(imgs).forEach(function(ele,i,arr){

        let img = document.createElement('img');

        img.src = imgs[ele].url;

        displayImg.appendChild(img);

          //  console.log(imgs[ele]);
        })
        

    }

    xhr.onreadystatechange = handler;

    xhr.open('GET','https://api.giphy.com/v1/gifs/translate?api_key=1S5SERlfeVrExetwKHfkqgGSXlCyPABx&s='+value,true);

    xhr.send();

}


sbmtBtn.addEventListener('click',getData);



