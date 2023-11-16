let inputName  = document.getElementById('name');
let inputAddress  = document.getElementById('address');

let inputAge = document.getElementById('age');
let inputAgeMother = document.getElementById('ageMother');

let inputLikes = document.getElementsByName('likeCheck');

let inputRadio1 = document.getElementsByName('changesRadio');
let inputRadio2 = document.getElementsByName('changesRadio1');
let inputRadio3 = document.getElementsByName('changesRadio2');

let resultText = document.getElementById('result');
let btnCta = document.getElementById('btnCta');

inputName.addEventListener('focus', () => {
    document.body.classList.add('bodyFocusOrange');
});

inputName.addEventListener('blur', () => {
    document.body.classList.remove('bodyFocusOrange');
});

inputAddress.addEventListener('focus', () => {
    document.body.classList.add('bodyFocusGreen');
});

inputAddress.addEventListener('blur', () => {
    document.body.classList.remove('bodyFocusGreen');
});

inputAge.addEventListener('focus', () => {
    document.body.classList.add('bodyFocusPunk');
});

inputAge.addEventListener('blur', () => {
    document.body.classList.remove('bodyFocusPunk');
});

inputAgeMother.addEventListener('focus', () => {
    document.body.classList.add('bodyFocusYellow');
});

inputAgeMother.addEventListener('blur', () => {
    document.body.classList.remove('bodyFocusYellow');
});

resultText.style.display = "none";

function validationFields() {
    let valueName = inputName.value;
    let valueAddress = inputAddress.value; 

    let valueAge = inputAge.value;
    let valueAgeMother = inputAgeMother.value;

    if(valueName != "" && valueName != null && valueName != undefined && valueAddress != "" && valueAddress != null && valueAddress != undefined) {
        resultText.style.display = "flex";
        setResultText(valueName, valueAddress, valueAge, valueAgeMother);
    }
}

function validationCheckbox() {
    let chkList = [];

    for(let i = 0; i < inputLikes.length; i++) {
        if(inputLikes[i].checked) {
            chkList.push(inputLikes[i].value);
        }
    }

    if(chkList != "") {
        return chkList;
    }
}

function validationRadio1() {
    let radioValue1;

    for(let i = 0; i < inputRadio1.length; i++) {
        if(inputRadio1[i].checked) {
            radioValue1 = inputRadio1[i].value;
        }
    }

    if(radioValue1 == "Sim") {
        return `${radioValue1}, sou muito!`;
    } else {
        return `${radioValue1}, não me considero!`
    }
}

function validationRadio2() {
    let radioValue2;

    for(let i = 0; i < inputRadio2.length; i++) {
        if(inputRadio2[i].checked) {
            radioValue2 = inputRadio2[i].value;
        }
    }

    if(radioValue2 == "Sim") {
        return `${radioValue2}, sempre tem algo à melhorar!`;
    } else {
        return `${radioValue2}, eu acho a vida perfeita!`
    }
}

function validationRadio3() {
    let radioValue3;

    for(let i = 0; i < inputRadio3.length; i++) {
        if(inputRadio3[i].checked) {
            radioValue3 = inputRadio3[i].value;
        }
    }

    if(radioValue3 == "Sim") {
        return `${radioValue3}, Deus é a fonte da alegria!`;
    } else {
        return `${radioValue3}, a felicidade é uma cinoide, as vezes ela passa da média!`
    }
}

function resetForm() {
    resultText.style.display = "none";
    inputName.value = "";
    inputAddress.value = "";
    inputAge.value = "";
    inputAgeMother.value = "";

    for(let i = 0; i < inputLikes.length; i++) {
        inputLikes[i].checked = false;
    }

    for(let i = 0; i < inputRadio1.length; i++) {
        inputRadio1[i].checked = false;
        inputRadio2[i].checked = false;
        inputRadio3[i].checked = false;
    }
}

function setResultText(valueName, valueAddress, valueAge, valueAgeMother, valueCheckbox) {
    let selectedLikes = validationCheckbox();
    let selectedRadio1 = validationRadio1();
    let selectedRadio2 = validationRadio2();
    let selectedRadio3 = validationRadio3();


    return resultText.innerHTML = `
        <span>Meu nome: </span><h1>${valueName}</h1></br>
        <span>Meu endereço: </span><h1>${valueAddress}</h1></br>
        <span>Minha idade é: </span><h1>${valueAge} anos</h1></br>
        <span>A idade da minha mãe é: </span><h1>${valueAgeMother} anos</h1></br>
        <span>Meus gostos: </span><h1></br>${selectedLikes.join('</br> ')}</h1></br>
        <span>Você se sente abençoado?</span><h1></br>${selectedRadio1}</h1></br>
        <span>Você queria mudar algo em sua vida?</span><h1></br>${selectedRadio2}</h1></br>
        <span>Você acha que a felicidade é algo que se conquista?</span><h1></br>${selectedRadio3}</h1></br></br>
        <button onclick="resetForm()" class="resetForm">Resetar</button>
    `;
}   

btnCta.addEventListener('click', (event) => {
    event.preventDefault(); //Prevenir o comportamento padrão do botão.
    validationFields();
    validationCheckbox();
})