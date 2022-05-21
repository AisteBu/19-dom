/*
Surasti visus ingridientus ir ju pavadinimus atspausdinti i console

*/

const liDOM = document.querySelectorAll('li');
console.log(liDOM);

for (let i = 0; i < liDOM.length; i++) {
    const ingridientas = liDOM[i].innerText;
    console.log(ingridientas);
}