/*
Surasti logotipa

Susirasti hamburgeri

Paspaudus ant hamburgerio, logotipo elementui reikia uzdeti CSS class pavadinimu "big"

Antra karta paspaudus ant hamburgerio, logotipo elementui reikia nuimti CSS class pavadinimu "big"


Susirasti meniu elementa (nav)

Paspaudus ant hamburgerio, meniu elementui reikia uzdeti CSS class pavadinimu "visible"

Antra karta paspaudus ant hamburgerio, meniu elementui reikia nuimti CSS class pavadinimu "visible"


Extra:
CSS perrasyti taip, jog meniu elementai butu atvaizduoti vertikaliai ir logo su hamburgeriu - "kabetu" virsuje
*/

const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');

console.log(logoDOM);
console.log(hamburgerDOM);

hamburgerDOM.addEventListener('click', () => {
    logoDOM.classList.toggle('big');            /* toggle -> jeigu yra - nuimk, jei nera - pridek */
} )


const navDOM = document.querySelector('nav');

hamburgerDOM.addEventListener('click', () => {
    navDOM.classList.toggle('visible');
})