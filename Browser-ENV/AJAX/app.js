let xhr = new XMLHttpRequest();               

function handleData(){

    console.log(xhr);

    if(xhr.readyState < 4)      {                        // successful response back on 4
        return;
}

    if(xhr.status != 200) {
        return;
    }

    console.log(JSON.parse(xhr.responseText));

    let data = JSON.parse(xhr.responseText);

    // let p = document.createElement('p');

    // p.innerHTML = data.title;

    // document.body.appendChild(p);

}

xhr.onreadystatechange = handleData;

//xhr.open('GET','https://jsonplaceholder.typicode.com/albums ',true);   //  async => the code will not block

xhr.open('GET','https://api.giphy.com/v1/gifs/translate?api_key=1S5SERlfeVrExetwKHfkqgGSXlCyPABx&s=john wick',true);

xhr.send('');