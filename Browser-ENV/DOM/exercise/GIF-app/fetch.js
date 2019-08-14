let sbmtBtn = document.querySelector('button');
let inpt = document.querySelector('input');
let displayImg = document.querySelector('.images');


function getData(){

    let value = inpt.value;

    let url = `https://api.giphy.com/v1/gifs/search?api_key=1S5SERlfeVrExetwKHfkqgGSXlCyPABx&q=${value}&limit=10&offset=0&rating=G&lang=en`;

    displayImg.innerHTML = "" ; 

    fetch(url)
    .then(resp => resp.json())
    .then(d =>{ 
        console.log(d)                                        // consume the function 
                        
        d.data.forEach((ele,i) => {

        console.log(ele.images.downsized.url);

        let img = document.createElement('img');

        img.src = ele.images.downsized.url;

        displayImg.appendChild(img);

    });

    })

    .catch(err => {
        let p = document.createElement('p');
        p.innerHTML = 'NO Gif FOUND';
        displayImg.appendChild(p); 
    })




}







sbmtBtn.addEventListener('click',getData);
