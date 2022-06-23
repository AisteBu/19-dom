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
// const submitDOM = document.querySelector('button');  
// const orderDOM = document.querySelector('.order');
// const nameDOM = document.querySelector('#customer');
// const sriubaDOM = document.querySelector('#sriuba');
// const patiekalasDOM = document.querySelector('#patiekalas');
// const desertasDOM = document.querySelector('#desertas');
// const allgerimaiDOM = document.querySelectorAll('input[name="gerimas"]');

// function arNoriu(DOM) {
//         return DOM.checked? 'nori' : 'nenori';
//     }

//     function kurisPazymetas(DOMlist) {
//         for (const itemDOM of DOMlist) {
//             if (itemDOM.checked) {
//                 return itemDOM.value;
//             }
//         }
//     }

//     submitDOM.addEventListener ('click', (event) => {        
//         event.preventDefault();      
        
//         const vardas = nameDOM.value.trim();            // trim - metodas, kuris is gautos tekstine reiksmes priekio ir galo ismeta tarpus
//         const sakinioPradzia = vardas ? 'vardu ' + vardas : 'nenurodes vardo';

//         const pasirinktasGerimas = kurisPazymetas(allgerimaiDOM);
//         const sakinioPabaiga = pasirinktasGerimas ? pasirinktasGerimas + ' yra pasirinktas gerimas' : ' gerimo nepasirinko';
    
//         orderDOM.innerText = `Užsakovas  ${sakinioPradzia} ${arNoriu(sriubaDOM)} sriubos, ${arNoriu(patiekalasDOM)} pagrindinio patiekalo, ${arNoriu(desertasDOM)} deserto ir ${sakinioPabaiga}.`
// })

/*
PRADZIA: 
Uzsakovas vardu X nori...
Uzsakovas nenurodes vardo nori...

PABAIGA:
ir x yra pasirinktas gerimas.
ir gerimo nepasirinko.
*/


// KREPSINIS

// Kiekviena komanda turi savo atskiras formas, kuriu deka yra registruojami pelnyti taskai

// Kiekviena karta pelnius tasku, tai turi atsispindeti lentoje

// const lentaDOM = document.querySelector('.lenta');
// const namuRezultatasDOM = lentaDOM.querySelector('[data-komanda="namu"]');  //butent nuo lentaDOM pradeda ieskot, o ne nuo viso document
// const sveciuRezultatasDOM = lentaDOM.querySelector('[data-komanda="sveciu"]');

// const aiksteleDOM = document.querySelector('.aikstele');

// const namuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
// const namuTaskaiDOM = namuKomandaDOM.querySelectorAll('button');   

// const sveciuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');
// const sveciuTaskaiDOM = sveciuKomandaDOM.querySelectorAll('button');   

// // jei nori visiems mygtukams sukurt ivyki, bet tie mygtukai yra array
// // kaip is array istraukti atskirus button

// let namuRezultatas = 0;
// let sveciuRezultatas = 0;

// for (let i = 0; i < 3; i++) {           // galima naudoti ir namutaskaiDOM.length, bet mes tiksliai zinome, kad daugiau nei 3 nebus
//     namuTaskaiDOM[i].addEventListener('click', () => {          //bet namuTaskaiDOm panaudojame cia
//         namuRezultatas += i + 1;
//         namuRezultatasDOM.innerText = namuRezultatas;
//     })

//     sveciuTaskaiDOM[i].addEventListener('click', () => {          
//         sveciuRezultatas += i + 1;
//         sveciuRezultatasDOM.innerText = sveciuRezultatas;
//     })
// }

// Susirandame `div class="lenta">` elementa

// Sukurti funkcija pavadinimu `generuotiLenta`, kuri priima selector'iu ir skaiciu. 

// Selector'ius nurodo, kuriame elemente reikes istatyti sugeneruota funkcijos turini

// Priimamas skaicius gali buti tik teigiamas sveikasis skaicius (jokiu begalybiu)

// Funkcijos uzduotis, pagal duota skaiciuka sugeneruoti `<div>` elementu sarasa ir kiekviename ju irasyti eiles numeri(1, 2, 3...)

// t.y. kad lentoje atsirastu div'ai  su juose nurodytais skaiciukais nuo 1 iki tiek kiek pasakysit


// function generuotiLenta(selector, count) {      // count - kiek elementu reik generuoti siai funkcijai, vietoj number
// const DOM = document.querySelector(selector);
// if (!DOM) {                                         // mini apsauga, kuria pasidarem patys
//     console.error('ERROR: nerastas elementas');
//     return false;
// }

// if (count < 0 ||
//     count % 1 !== 0) {        // ieskom, ar tai sveikasis skaicius. Paimtas skaicius, padalintas is 1. Jei jo rezultatas , liekana ne 0
//     console.error('ERROR: skaicius turi buti teigiamas ir sveikasis');
//     return false;
// }

// let HTML = ''; // Funkcijos uzduotis, pagal duota skaiciuka sugeneruoti `<div>` elementu sarasa  LET, nes  noresime vis kazka keisti
// for (let i = 1; i <= count; i++) {      // pradedam nuo 1 iki norimo skaiciaus
//     HTML += `<div>${i}</div>`;
// }

// DOM.innerHTML = HTML;       // Pasieme lenta ir istate div
// }

// generuotiLenta('.lenta', 8);   // galima ir 'div' ir 'div.lenta' ir '.lenta'




// Sukurti funkcija pavadinimu `generuotiSeocials`, kuri priima selector'iu ir sarasa fontAwesome ikonu klasiu. 

// Selector'ius nurodo, kuriame elemente reikes istatyti sugeneruota funkcijos turini

// Priimamas ikonu sarasas turi buti ne tuscias array

// Funkcijos uzduotis, pagal duota ikonu sarasa sugeneruoti `<i>` elementus, kuriuose `class` atribute bus nurodytos atitinkamu fontAwesome ikonu klasiu pavadinimai

// Visas sugeneruotas tekstinis HTML turi buti istatytas i nurodyta selector`iaus elementa

// function generuotiSocials(selector, iconsList) {                // 1. pradzioje (pirma) priimame parametrus
//     // yra trys pagrindiniai zingsniai:
//     // 1. validation
//     if (typeof selector !== 'string' ||         // (sesta) pirmiausia visada klausti tipu
//         selector === '') {      
//         console.error('ERROR: selector turi buti ne tuscias stringas');
//         return false;
//     }
//     const DOM = document.querySelector(selector); // susirandame DOM vieta, narsykleje tam tikra elementa pagal pateikta selector
//     if (!DOM) {
//         console.error('ERROR: pagal pateikta selector nepavyko rasti jokio DOM elemento');
//         return false;
//     }
//     if (!Array.isArray(iconsList) ||
//         iconsList.length === 0) {
//         console.error('ERROR: iconsList turi buti ne tuscias array');
//         return false;
//     }

//     // 2. logic
//     let HTML = ''; // (antra) Sugeneruojam HTML, kuris tures buti istatytas i tinkama vieta, ir taip mes gausime galutini rezultata
//     const availableIcons = ['facebook', 'twitter', 'linkedin', 'instagram', 'pinterest'];

//     for (const icon of iconsList)  // (penkta)
//         if (typeof icon === 'string' &&
//         icon !== '' &&
//         availableIcons.includes(icon)) {    
//         HTML += `<i class="fa fa-${icon}"></i>`; // (ketvirta)
//         }


//     // tarpinis. post-logic validation
//     if (HTML === '') {
//         console.error('ERROR: iconsList turi tureti bent viena elementa, kuris butu ne tuscias tekstas');
//         return false;
//     }
//     // for (let i = 0; i < iconsList.length; i++) {     // visas sitas atitikmuo virsutiniam for of
//     //     const icon = iconsList[i];
//     //     HTML += `<i> class="fa fa-${icon}</i>`;
//     // }
   
//     // 3. result return
//     DOM.innerHTML = HTML; // (trecia) kreipiames i ta elementa. Vidinis HTML bus lygus tam, kuri as sukonstruosiu   

// }

// const icons = ['facebook', 'instagram', 'twitter', 'linkedin'];

// generuotiSocials('.socials', icons)



// Sukurti funkcija pavadinimu `renderNav`, kuri priima selector'iu ir sarasa informacijos apie meniu nuorodas. 

// Selector'ius nurodo, kuriame elemente reikes istatyti sugeneruota funkcijos turini

// Priimamas meniu informacijos sarasas turi buti ne tuscias array

// Funkcijos uzduotis, pagal duota meniu informacijos sarasa sugeneruoti `<nav>`  ir `<a>` elementus

// Visas sugeneruotas tekstinis HTML turi buti istatytas i nurodyta selector`iaus elementa

// Pradinis HTML yra:

// <header>
//    <img src="#" alt="Logo" class="logo">
// </header>

// Siektinas HTML yra:
//    <header>
//        <img src="#" alt="Logo" class="logo">
//        <nav>
//            <a href="#">Home</a>
//            <a href="#">Services</a>
//            <a href="#">About us</a>
//            <a href="#">Contact us</a>
//        </nav>
//    </header>

// function renderNav(selector, data) {        // data - duomenys
//     const DOM = document.querySelector(selector); 
//     let HTML = '';

//     for (const menuItem of data)   {     // vietoj sitos eilutes, galime rasyti iprasta for arba for-in
//         HTML += `<a href="${menuItem.href}">${menuItem.title}</a>`;
//     }

//     DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);               // galima rasyti ir taip => DOM.innerHTML += HTML;
// }

// const menu = [
//     {
//         href: '#',
//         title: 'Home'
//     },
//     {
//         href: '#',
//         title: 'Services'
//     },
//     {
//         href: '#',
//         title: 'About us'
//     },
//     {
//         href: '#',
//         title: 'Contact us'
//     }
// ];

// renderNav('header', menu)


// **KAI KURIAMAS TIK VIENAS `select` ELEMENTAS**
// Reikia sugeneruoti `<select>` formos elementa, kuriame butu isvardintos tokios reiksmes: zuikis, barsukas, lape, vilkas, sernas, stirna, vovere.

// Sugeneruotas `<select>` elementas turi buti iterptas tarp formos `<label>` ir `<button>` elementu

// Paspaudus submit mygtuka, pasirinkta `<select>` reiksme turi buti atvaizduota `.option` elemente

// https://www.w3schools.com/tags/tag_select.asp

// naujas content`as generuosis zemiau label`io

// function renderSelect(selector, dataList) {                      // 1. mums reikia sugeneruoti select`a, todel issikvieciam funkcija:
// // susirandame vieta, kur zemiau kurio elemento tures nugulti naujas turinys
//     const DOM = document.querySelector(selector); // 4. funkcija ieskos vietos, kur nores nupiesti - dirbti

// // susigeneruojame visus galimus seect pasirinkimus
// let optionsHTML = '';
// for (const dataItem of dataList) {
//     optionsHTML += `<option value="${dataItem}">${dataItem}</option>`;
// }

// // sukonstruojame galutini select elementa ir istatome i reikiama vieta
// const HTML = `<select>${optionsHTML}</select>`;       // 6. susigeneruojame turini. kadangi pradzioje neturim, padarom tuscias kabutes   // 9. i `` kabutes nukopijuojame is interneto example select-option
// DOM.insertAdjacentHTML('afterend', HTML); // 7. kai tures HTML, ji istatys i DOM     // 8.insertinam kas, kur ir kaip
// } 

// const animals = ['zuikis', 'barsukas', 'lapė', 'vilkas', 'šernas', 'stirna', 'voverė'];   // 3. susikonstruojame const
// renderSelect('label', animals);                     // 2. poto renderinam, o kaip mes tai darysim - turim iskviesti ta  pacia funkcija

// const selectDOM = document.querySelector('select');
// const buttonDOM = document.querySelector('button'); // 5. susirandame mygtuka. kai ji paspausim, funkcija tures dirbt
// const optionDOM = document.querySelector('.option');
// buttonDOM.addEventListener('click', (event) => {
//     event.preventDefault();
//     optionDOM.innerText = selectDOM.value;
// })


// **KAI KURIAMAS _NE_ VIENAS `select` ELEMENTAS**

//  function renderSelect(selector, dataList, id) {            //  selector - tai label`is          
//     const DOM = document.querySelector(selector); 
    
//     let optionsHTML = '';
//     for (const dataItem of dataList) {
//         optionsHTML += `<option value="${dataItem}">${dataItem}</option>`;
//     }
    
//     const HTML = `<select id="${id}">${optionsHTML}</select>`;       
//     DOM.insertAdjacentHTML('afterend', HTML); 
//     } 
    
//     const animals = ['zuikis', 'barsukas', 'lapė', 'vilkas', 'šernas', 'stirna', 'voverė'];   
//     renderSelect('label[for="animal"]', animals, 'animal');   
    
//     const vegetables = ['morka', 'svogūnas', 'bulvė'];
//     renderSelect('label[for="vegetable"]', vegetables,'vegetable'); 
    
//     const allSelectDOM = document.querySelectorAll('select');
//     const buttonDOM = document.querySelector('button'); 
//     const optionDOM = document.querySelector('.option');
//     buttonDOM.addEventListener('click', (event) => {
//         event.preventDefault();
        
//         const pasirinkimai = [];
//         for (const selectDOM of allSelectDOM) {
//             pasirinkimai.push(selectDOM.value);
//         }

//         // const pasirinkimai = Array.from(allSelectDOM).map(DOM => DOM.value);
        
//         const pasirinkimuZinute =  pasirinkimai.join(', ');
//         optionDOM.innerText = pasirinkimuZinute;
// })


// Is formos reikia istraukti parasyta skaiciu, kuris nurodo norimos generuotinos sachmatu lentos dydi ir ta skaiciu reikia irasyti i elementa `.option`, bet formatas turi buti `NxN`, pvz.: 4x4, 8x8 ir t.t. (ivesties lauke parasius skaiciu 4, skliaustuose turi buti 4x4)

const inputDOM = document.getElementById('board');   // is kur paimame skaiciu. //sitas budas greitesnis
// const inputDOM = document.querySelector('#board'); //virsutinio atitikmuo
const optionDOM = document.querySelector('.option');
const buttonDOM = document.querySelector('button');  
const boardDOM = document.querySelector('.board');

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    const n = parseInt(inputDOM.value); // konvertuojam input teksta i artimiausia galima teisinga skaitini atitikmeni
    optionDOM.textContent = `${n}x${n}`;
    renderBoard(boardDOM, n);
})

// Pagal pasirinkta lentos dydi, reikia sugeneruoti reikiama kieki `.row` elementu. Atsizvelgiant i ju kieki, kiekvienos eilutes dydis turi buti tinkamas, jog visos tilptu i tevini elementa  `.board`

// lenta bus piesiama tada, kai bus paspaustas mygtukas
// function renderBoard(DOMelement, size) {
//     const rowHeight = 100 / size; // const eina pirmiau nei let
//     let HTML = ''; // zinau, kad man reikes konstruoti HTML, todel pradzioje pasirasau taip
    
//     for (let i = 0; i < size; i++) {
//         HTML += `<div class="row" style="height: ${rowHeight}%;"></div>`;
//     }

//     DOMelement.innerHTML = HTML;
// }

// Pagal pasirinkta lentos dydi, reikia sugeneruoti reikiama kieki `.cell` elementu. Atsizvelgiant i ju kieki, kiekvieno langelio dydis turi buti tinkamas, jog visi tilptu i tevini elementa  `.row`

function renderBoard(DOMelement, size) {
    const elementSize = 100 / size; 
    // const cellHTML = `<div class="cell" style="width: ${elementSize}%;"></div>`.repeat(size);
    // const rowHTML = `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`;
    // DOMelement.innerHTML = rowHTML.repeat(size);

    let cellHTML = '';
    for (let c = 0; c < size; c++) {
        cellHTML += `<div class="cell" style="width: ${elementSize}%;"></div>`;
    }

    let HTML = '';
    for (let row = 0; row < size; row++) {
        HTML += `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`;
    }

    DOMelement.innerHTML = HTML;
}