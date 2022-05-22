/*
Surasti h1 (antraste)
Prideti prie jos CSS class, kuri pakeicia teksto spalva i raudona

Surasti VISUS ingridientus
Kiekvienam ingridientui prideti CSS class pavadinimu darzove
*/

const h1DOM = document.querySelector('h1');     // susirandam darbini elementa, su kuriuo norime dirbti
h1DOM.classList.add('antraste');                // kreiptis i nurodyta elementa ir prie jo klasiu saraso prideti nurodyto pavadinimo klase (tada h1 pasidarys toks, koki klase turi aprasyma)

const ingridientai = document.querySelectorAll('li');

for (let i = 0; i < ingridientai.length; i++) {
    ingridientai[i].classList.add('darzove');
};



 