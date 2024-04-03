timesTwo(4); //ok att anropa innan definitionen pga hoisting

function timesTwo(x){
    return x*2;
}

const arrowTimesTwo = x => x*2;

const mult = (x, y) => x*y;

console.log( mult(2, 30) );

// multipleStatements(2, 3); //Fungerar ej pga sparad i en variabel

const multipleStatements = (x, y)=>{
    console.log(x, y);
    return x*y;
}