


function convertToNumber() {
    const typeNumber = document.getElementById('input-number');
    const divNumber = document.getElementById('calculate');
    const value = typeNumber.value;
    divNumber.innerHTML = '';


    if(value.length === 0 || value === null || value === undefined || value === "  ") {
        const nothing = document.createElement("h3");

        nothing.textContent = "Os dados enviados estão nulos ou não preenchidos, favor digitar um texto válido.";
        nothing.className = "nothing";

        divNumber.className = "div-error";
        divNumber.appendChild(nothing);

    } else {
        const h3 = document.createElement('h3');

        
        var init = 0;
        
        for(let index = value.length-1; index >= 0; index--){ 
            if(value[index] === "1" || value[index] === "0" && value.length <= 32) {

                init += parseInt(value[index] * Math.pow(2,value.length-1-index));
                divNumber.className = "div-number";
            } else {

               divNumber.className = "div-error";
               return validateError();
            }
        }
        h3.innerText = `${init}`
        divNumber.appendChild(h3);
    }
}

function validateError () {
    const divNumber = document.getElementById('calculate');
    const validate = document.createElement('h3');

    divNumber.innerHTML = '';

    validate.className = "invalid-data";
    validate.textContent = "Os dados inseridos devem ter entre 1 e 32 caracteres, também, os caracteres devem ser somente 0 ou 1. Talvez existam espaços desnecessários.";

    divNumber.appendChild(validate);
}