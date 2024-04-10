const car = {
    make: 'volvo', 
    model: 'v-70',
    year: 2005
}

const firstProp = 'make';
console.log( car.make, car['make'], car[firstProp]);

for(const key in car){
    console.log(key, car[key])
}


console.log( Object.keys(car));

