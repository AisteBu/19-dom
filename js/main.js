// Pradinis rezultatas lygus nuliui

// Susirasti minuso mygtuka

// Susirasti pliuso mygtuka

// Susirasti rezultato atvaizdavimo elementa

// Paspaudus ant minuso, rezultatas mazinamas vienu vienetu

// Paspaudus ant pliuso, rezultatas didinamas vienu vienetu

// Paspaudus ant reset, rezultatas turi grizti i nuli

// Susirasti h1 elementa

// Padaryti, jog paspaudus viena is mygtuku (pliusas, minusas) h1 elemento tekstas pasikeistu i "Zaidimas progrese"

// Jei zaidimas yra nu'reset'inamas - h1 tekstas grizta i pradine reiksme

let rezultatas = 0;             // jeigu butu const, negaletume atnaujinti rezultato

const minusDOM = document.querySelector('.minus');
const numberDOM = document.querySelector('.number');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const gameInProgressMessage = 'Zaidimas progrese';
const initialH1Text = h1DOM.innerText;

minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
    h1DOM.innerText = gameInProgressMessage;
})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
    h1DOM.innerText = gameInProgressMessage;
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = initialH1Text;
})