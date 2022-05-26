// Susirasti zinuciu rasymo elementa (ul)

// Kiekviena karta prasidedant zaidimui reikia, jog zinuciu sarase atsirastu irasas su tekstu "Tu pasileidai zaidima - sekmes!"

// Kiekviena karta spaudziant minuso mygtuka reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei minusa ir dabartinis rezultatas yra [skaicius]."

// Kiekviena karta spaudziant pliuso mygtuka reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei pliusa ir dabartinis rezultatas yra [skaicius]."

// Kiekviena karta spaudziant reset mygtuka reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei reset ir dabartinis rezultatas yra [skaicius]."

let rezultatas = 0;             // jeigu butu const, negaletume atnaujinti rezultato

const minusDOM = document.querySelector('.minus');
const numberDOM = document.querySelector('.number');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');

const gameInProgressMessage = 'Žaidimas progrese';
const initialH1Text = h1DOM.innerText;

ulDOM.innerHTML = `<li> Tu pasileidai žaidimą - sekmės! </li>`;

minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
    h1DOM.innerText = gameInProgressMessage;
    ulDOM.innerHTML += `<li> Paspaudei minusą ir dabartinis rezultatas yra ${rezultatas}. </li>`
})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
    h1DOM.innerText = gameInProgressMessage;
    ulDOM.innerHTML += `<li> Paspaudei pliusą ir dabartinis rezultatas yra ${rezultatas}. </li>`
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = initialH1Text;
    ulDOM.innerHTML += `<li> Paspaudei reset ir dabartinis rezultatas yra ${rezultatas}. </li>`
})