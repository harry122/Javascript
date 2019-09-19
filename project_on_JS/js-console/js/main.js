var geval = eval;
var inputForm = document.createElement('input');

function createInput() {
    var inputDiv = document.createElement('div');
    var inputPara = document.createElement('p');
  
    inputDiv.setAttribute('class','input');
    inputPara.textContent = '>';
    inputDiv.appendChild(inputPara);
    inputDiv.appendChild(inputForm);
    document.body.appendChild(inputDiv);

    if(document.querySelectorAll('div').length > 1) {
    inputForm.focus();
    }

    inputForm.addEventListener('change', executeCode);
}

function executeCode(e) {
    // write your code here to execute codes from input field;
    // HINT: Use eval() function to execute JS Code
    console.logout = console.log;
    

}

createInput();