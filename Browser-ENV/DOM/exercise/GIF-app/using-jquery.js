let sbmtBtn = document.querySelector('button');
let inpt = document.querySelector('input');
let displayImg = document.querySelector('.images');


function getData(){

    let value = inpt.value;
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=1S5SERlfeVrExetwKHfkqgGSXlCyPABx&s='${value}`;

    $.ajax({
        url : url,
        method : 'GET',

        success : function( resp ) {

        let imgs = resp.data.images;

        Object.keys(imgs).forEach(function(ele,i,arr){

        let img = document.createElement('img');

        img.src = imgs[ele].url;

        displayImg.appendChild(img);

          //  console.log(imgs[ele]);
        })
        },

        error :  function( err ) {
            console.log(err);
        }
    }) 

}




sbmtBtn.addEventListener('click',getData);