function add(x, y = 3){
    console.log(x, y);
    return x + y;
}

add(4, 8);

let sum = add(10, 20);
console.log(sum);

sum = add(1);
console.log(sum)

function getSum(){
    console.log(typeof arguments, arguments);

    let sum = 0;

    for(const arg of arguments){
        // console.log(typeof arg == 'number')
        if(typeof arg == 'number') sum+=arg;
    }
    return sum;
}

sum = getSum(3, 4, 2, 4, '324', 'jdskl');
console.log(sum);

sum = getSum(3, 23, 5);
console.log(sum);

console.log(undefined + 4); // NaN