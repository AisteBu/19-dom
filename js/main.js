/*
Surasti h1 (antraste)
Perrasyti h1 elemento teksta i "Zuikio tekstas"

Surasti VISAS darzoves
Kiekvienos darzoves teksta pakeisti i "Israuta darzove"
*/

const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio darzas';

const ingridientai = document.querySelectorAll('li');
for (let i = 0; i < ingridientai.length; i++) {
    ingridientai[i].innerText = 'Israuta darzove';              // jei vietoj i irasysime skaiciu, tai israus tik numeriuku pazymeta darzove
}


 