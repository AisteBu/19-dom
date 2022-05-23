/*
Surasti logotipa

Susirasti hamburgeri

Paspaudus ant hamburgerio, logotipo elementui reikia uzdeti CSS class pavadinimu "big"

Antra karta paspaudus ant hamburgerio, logotipo elementui reikia nuimti CSS class pavadinimu "big"

*/

const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');

console.log(logoDOM);
console.log(hamburgerDOM);

hamburgerDOM.addEventListener('click', () => {
    logoDOM.classList.toggle('big');            /* toggle -> jeigu yra - nuimk, jei nera - pridek */
} )