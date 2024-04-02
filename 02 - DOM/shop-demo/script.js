const firstH2 = document.querySelector('h2');
console.log(firstH2);

const allH2 = document.querySelectorAll('h2');
console.log(allH2[1]);

// Hämta och logga knappen under fire hoodien
const allBtns = document.querySelectorAll('button');
console.log(allBtns[1]);

firstH2.innerText = 'Ny text <h1>H1</h1>'
allH2[1].innerHTML ='Ny text <h1>H1</h1>';

const firstP = document.querySelector('p');
firstP.style.backgroundColor = 'hotpink';

const img = document.querySelector('img');
img.src = "https://placebear.com/400/400";


const navEl = document.querySelector('nav');
navEl.classList.add('active');

// Hitta element med en klass eller ett id
// Hämta det med querySelector med id/klass-selektor
// Ge det textfärgen Purple

const articleEl = document.querySelector('.art-3');
articleEl.style.backgroundColor = 'purple';

const logo = document.querySelector('header > img.logo');
console.log(logo);