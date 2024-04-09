// foreach
// går ej att använda break för att avbryta
const arr = [3, 52, 33, 5, 654, 2];
function callBack(el, i){
    console.log(el, i, arr);
    el = 0;
    // arr[i] = 0;
}

arr.forEach( callBack )

console.log(arr)
arr.forEach( el =>{
    console.log(el);
});

// filter
// Filtrera alla nummer som är under 50
const lessThanFifty = arr.filter( num => num < 50 );
console.log(lessThanFifty)

// utgå från arr filtrera till en array med endast jämna nummer
const evenNumbers = arr.filter( num => num%2 == 0);
console.log(evenNumbers);

// När filter?
// Filtrera produkter utifrån pris 

// map
const mapArr = arr.map( num => num%2 == 0);
console.log(mapArr);
// när?
// konvertera enhet till en annan

// sort
console.log(arr);
const stigande = arr.sort((a, b)=>{
    console.log(a, b);
    return a - b;
});
console.log(stigande)

const fallande = arr.sort( (a, b) => b -a )
console.log(fallande)

// När?
// Rankinglista -> vem sprang snabbast=
// Produkter -> visa pris i fallande eller stigande tex