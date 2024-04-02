const h1El = document.createElement('h1');
document.body.append(h1El);
h1El.innerText = 'JAVA23';


const topMovies = ['Fight club', 'Dune part 2', 'The Dark Knight'];


const listEl = document.createElement('ol');
document.body.append(listEl);

for(const movie of topMovies){
    const li = document.createElement('li');
    listEl.append(li);

    li.innerText = movie;
}
// Samma resultat som for of loopen
// for(let i=0; i<topMovies.length; i++){
//     const movie = topMovies[i];
// }

console.log(listEl.childNodes[1])
listEl.childNodes[1].remove();


for(let i=0; i<20; i++){
    const h2 = document.createElement('h2');
    document.body.append(h2);

    h2.innerText = `Element nummer ${i+1}`;
    h2.style.backgroundColor = `hsl(${i*20}, 70%, 80%)`
}

// Definiera en funktion som har tre parametrar
// p1: typ av element
// p2: textinnehåll
// p3: textfärg
// funktionen ska skapa ett element enligt argumenten och lägga till till bodyn

addElement('p', 'Första elementet', 'hotpink')
addElement('h1', 'RUBRIK', 'hsl(20, 100%, 50%)')

function addElement(elementType, text, color){
    const element = document.createElement(elementType);
    document.body.append(element);

    element.innerText = text;
    element.style.color = color;
}