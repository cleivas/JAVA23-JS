const obj = {
    x: 10,
    y: 20
}

function add(objPar, num){
    objPar.x+=num;
}

console.log(obj);
add(obj, 3);

console.log(obj);


let x = 10;
function addPrimitive(xPar, num){
    xPar+=num;
}

console.log(x);
addPrimitive(x, 3);
console.log(x);


// destructuring
const deObj = {a: 1, b: 2};
// const a = deObj.a;
// const b = deObj.b;
const {a, b} = deObj;
console.log(a, b);

function addProps({a, b}){
    return a+b;
}

console.log( addProps(deObj) );


// spread
const spreadArr = [2, 3, 432, 23, 43]
console.log(spreadArr);
console.log(...spreadArr)
console.log(spreadArr[0], spreadArr[1])
console.log(Math.max(...spreadArr))


const obj1 = {
    p1: 'från objekt 1'
  }
  
  const obj2 = {
    p2: 'från objekt 2',
    p3: 'också från objekt 2'
  }
  
  const obj3 = {...obj1, ...obj2};
  console.log(obj3) //Innehåller egenskaperna p1, p2, p3


//   Spread för att klona
const clonedObj2 = {...obj2};
obj2.p2 = 'TEST';
console.log(clonedObj2, obj2)