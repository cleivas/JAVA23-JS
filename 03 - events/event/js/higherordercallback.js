function timesTwo(x){
    return x*2;
}
function square(x){
    return x*x;
}

const arr = [2, 3, 2, 56, 34, 3, 32, 34, 2];

// const arrTimesTwo = [];
// for(const num of arr){
//     arrTimesTwo.push( timesTwo(num) ) ;
// }
// console.log(arrTimesTwo);

// const arrSquare = [];
// for(const num of arr){
//     arrSquare.push( square(num) ) ;
// }
// console.log(arrSquare);

// console.log(arr[arr.length-1])

function calculateArray(numberArr, calcFunc){
    const newArr = [];

    for(const num of numberArr){
        newArr.push( calcFunc(num) );
    }
    return newArr;
}

const arrTimesTwo = calculateArray(arr, timesTwo);
console.log(arrTimesTwo)

const arrSquare = calculateArray(arr, square);
console.log(arrSquare)

const arr3 = calculateArray(arr, function(x){return x*x*x});
console.log(arr3)