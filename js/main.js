// Susirasti zinuciu rasymo elementa (ul)

// Kiekviena karta prasidedant zaidimui reikia, jog zinuciu sarase atsirastu irasas su tekstu "Tu pasileidai zaidima - sekmes!"

// Kiekviena karta spaudziant minuso mygtuka reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei minusa ir dabartinis rezultatas yra [skaicius]."

// Kiekviena karta spaudziant pliuso mygtuka reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei pliusa ir dabartinis rezultatas yra [skaicius]."

// Kiekviena karta spaudziant reset mygtuka reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei reset ir dabartinis rezultatas yra [skaicius]."

// let rezultatas = 0;             // jeigu butu const, negaletume atnaujinti rezultato

// const minusDOM = document.querySelector('.minus');
// const numberDOM = document.querySelector('.number');
// const plusDOM = document.querySelector('.plus');
// const resetDOM = document.querySelector('.reset');
// const h1DOM = document.querySelector('h1');
// const ulDOM = document.querySelector('ul');

// const gameInProgressMessage = 'Žaidimas progrese';
// const initialH1Text = h1DOM.innerText;

// ulDOM.innerHTML = `<li> Tu pasileidai žaidimą - sekmės! </li>`;

// minusDOM.addEventListener('click', () => {
//     numberDOM.innerText = --rezultatas;
//     h1DOM.innerText = gameInProgressMessage;
//     ulDOM.innerHTML += `<li> Paspaudei minusą ir dabartinis rezultatas yra ${rezultatas}. </li>`
// })

// plusDOM.addEventListener('click', () => {
//     numberDOM.innerText = ++rezultatas;
//     h1DOM.innerText = gameInProgressMessage;
//     ulDOM.innerHTML += `<li> Paspaudei pliusą ir dabartinis rezultatas yra ${rezultatas}. </li>`
// })

// resetDOM.addEventListener('click', () => {
//     rezultatas = 0;
//     numberDOM.innerText = rezultatas;
//     h1DOM.innerText = initialH1Text;
//     ulDOM.innerHTML += `<li> Paspaudei reset ir dabartinis rezultatas yra ${rezultatas}. </li>`
// })

// Formoje parasytas tekstas, po `submit` mygtuko paspaudimo turi buti atvaizduotas `<span>` elemente.

// `input` elemento reiksme istraukiama kreipiantis i to elemento `value` parametra, pvz.: `element.value`

// po ivesto teksto nuskaitymo, isvalyti ivesties lauka 'input'

// const inputDOM = document.querySelector('input');
// const buttonDOM = document.querySelector('button');
// const spanDOM = document.querySelector('span');


// buttonDOM.addEventListener ('click', (event) => {    //event - tai tik kintamasis
//     event.preventDefault();
//     spanDOM.innerText = inputDOM.value;
//     inputDOM.value = '';   // kai po visko nori teksta isvalyt, parasai nauja reiksme jam
// })

// Zinutes ivesties lauko teksto spalva turi buti raudona (tai realizuoti su JS, bet ne per CSS)

// Formoje parasyta tekst zinute, po `submit` mygtuko paspaudimo turi buti atvaizduotas `<span>` elemente.

// Spalvoms skirti laukai turi tureti nurodyta atitinkama tipa (zr.dokumentacija)

// `input` elemento reiksme istraukiama kreipiantis i to elemento `value` parametra, pvz.: `element.value`

// Taip pat, tam `<span>` elementui turi buti priskirtos fono ir teksto spalvos is atitinkamu formos lauku.

// Norint elementui priskirti papildoma stiliu (kalba eina apie span), reikia rasyti, pvz.: `element.style.backgroundColor = "red"`

// Po ivesto teksto nuskaitymo, isvalyti ivesties lauka 'input'

// const buttonDOM = document.querySelector('button');
// const spanDOM = document.querySelector('span');
// const messageInputDOM = document.querySelector('#message');         // kai yra html`e id, tada cia rasome #
// const BgColorInputDOM = document.querySelector('#bg-color');
// const TextColorInputDOM = document.querySelector('#text-color');

// messageInputDOM.style.color = 'red';           // nes ieskom pirmo random elemento, o ne all

// buttonDOM.addEventListener ('click', (event) => {    
//         event.preventDefault();         // budas isvengti page reload
//         spanDOM.innerText = messageInputDOM.value;
//         messageInputDOM.value = '';  
//         spanDOM.style.backgroundColor = BgColorInputDOM.value;
//         spanDOM.style.color = TextColorInputDOM.value;
// })

// Sriuba, pagrindinis patiekalas ir desertas yra checkbox'ai, kuriuos pazymejus, klientas nurodo, jog nori juos uzsisakyti

// Gerimai yra pasirenkami vienas is nurodytu (radio button)

// Submit'inus forma <div class="order"> elemente turi buti suformuota zinute, kurios sablonas yra toks:
// "Uzsakovas vardu [vardas] [nori/nenori] sriubos, [nori/nenori] pagrindinio patiekalo, [nori/nenori] deserto ir [gerimo pavadinimas] yra pasirinktas gerimas."

// `input` elementu tipus pasikoreguoti pagal poreiki.

// Reikia graziai susitvarkyti su situacija, kai klientas nenurodo savo vardo

// Reikia graziai susitvarkyti su situacija, kai klientas nepasirenka gerimo

//  MANO SPRENDIMAS:

// const uzsakytiDOM = document.querySelector('button');  
// const uzsakymasDOM = document.querySelector('.order');
// const uzsakovasDOM = document.querySelector('#customer');
// const sriubaDOM = document.querySelector('#sriuba');
// const patiekalasDOM = document.querySelector('#patiekalas');
// const desertasDOM = document.querySelector('#desertas');

// uzsakytiDOM.addEventListener ('click', (event) => {             //pradedama stebeti, kada mygtukas bus paspaustas
//     event.preventDefault();                                     // logika rasoma tarp riestiniu skliaustu
    
//     const noriSriubos = sriubaDOM.checked? sriubaDOM.innerHTML = 'nori' : sriubaDOM.innerHTML = 'nenori';           // panaudojau 09-ternary.js funkcija

//     const noriPatiekalo = patiekalasDOM.checked? patiekalasDOM.innerHTML = 'nori' : patiekalasDOM.innerHTML = 'nenori';

//     const noriDeserto = desertasDOM.checked? desertasDOM.innerHTML = 'nori' : desertasDOM.innerHTML = 'nenori';

//     const pasirinktasGerimas = document.querySelector(
//         'input[name="gerimas"]:checked');

//     uzsakymasDOM.innerText = `Užsakovas vardu ${uzsakovasDOM.value} ${sriubaDOM.innerHTML} sriubos, ${patiekalasDOM.innerHTML} pagrindinio patiekalo, ${desertasDOM.innerHTML} deserto ir ${pasirinktasGerimas.value} yra pasirinktas gerimas.`
// })

// DESTYTOJO SPRENDIMAS:
const submitDOM = document.querySelector('button');  
const orderDOM = document.querySelector('.order');
const nameDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const allgerimaiDOM = document.querySelectorAll('input[name="gerimas"]');

function Uzsakovas (nameDOM) {

}   

function arNoriu(DOM) {
        return DOM.checked? 'nori' : 'nenori';
    }

    function kurisPazymetas(DOMlist) {
        for (const itemDOM of DOMlist) {
            if (itemDOM.checked) {
                return itemDOM.value;
            }
        }
    }

    submitDOM.addEventListener ('click', (event) => {        
        event.preventDefault();      
        
        const vardas = nameDOM.value.trim();            // trim - metodas, kuris is gautos tekstine reiksmes priekio ir galo ismeta tarpus
        const sakinioPradzia = vardas ? 'vardu ' + vardas : 'nenurodes vardo';

        const pasirinktasGerimas = kurisPazymetas(allgerimaiDOM);
        const sakinioPabaiga = pasirinktasGerimas ? pasirinktasGerimas + ' yra pasirinktas gerimas' : ' gerimo nepasirinko';
    
        orderDOM.innerText = `Užsakovas  ${sakinioPradzia} ${arNoriu(sriubaDOM)} sriubos, ${arNoriu(patiekalasDOM)} pagrindinio patiekalo, ${arNoriu(desertasDOM)} deserto ir ${sakinioPabaiga}.`
})

/*
PRADZIA: 
Uzsakovas vardu X nori...
Uzsakovas nenurodes vardo nori...

PABAIGA:
ir x yra pasirinktas gerimas.
ir gerimo nepasirinko.
*/