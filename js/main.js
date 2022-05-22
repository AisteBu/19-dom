/*
Surasti visus ingridientus ir ju pavadinimus atspausdinti i console

Visu ingridientu pavadinimai turi buti didziosiomis raidemis ir sudeti i array

Isspausdinti gauta array i console

Norimas rezultatas:
['MORKOS', 'BULVES', 'SVOGUNAS', 'VANDUO', 'DRUSKA']
*/

const liDOM = document.querySelectorAll('li');
const ingridientai = [];

for (let i = 0; i < liDOM.length; i++) {
    const ingridientas = liDOM[i].innerText.toUpperCase();
    ingridientai.push(ingridientas);                // prilipdome nauja irasa is galo . itraukiame nauja ingridienta i sarasa
}
console.log(ingridientai);

