/*
Pakeisti tekstini turini h1 elemente i  "Labas vakaras!"
*/

const h1DOM = document.querySelector('h1');        // 1. susirandu elementa
h1DOM.innerText = 'Labas vakaras!';                // 2. kreipiuosi i rasta elementa


/*
Jeigu Jusu vardo raide A-P;
surasti paragrafa ir pakeisti teksta i "Siandien grazus oras!"

Jeigu Jusu vardo raide R-Z;
surasti nuoroda ir pakeisti teksta i "Spausk mane!"

*/

const pDOM = document.querySelector('p');
pDOM.innerText = 'Siandien grazus oras!';

const aDOM = document.querySelector('a');
aDOM.innerText = 'Spausk mane!';