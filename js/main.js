// Pradinis rezultatas lygus nuliui

// Susirasti minuso mygtuka

// Susirasti pliuso mygtuka

// Susirasti rezultato atvaizdavimo elementa

// Paspaudus ant minuso, rezultatas mazinamas vienu vienetu

// Paspaudus ant pliuso, rezultatas didinamas vienu vienetu

// Paspaudus ant reset, rezultatas turi grizti i nuli

let rezultatas = 0;             // jeigu butu const, negaletume atnaujinti rezultato

const minusDOM = document.querySelector('.minus');
const numberDOM = document.querySelector('.number');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');

minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
})