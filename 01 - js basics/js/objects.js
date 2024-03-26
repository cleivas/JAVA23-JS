const car = {
    make: 'volvo', 
    model: 's-80',
    year: 1998,
    drive(velocity){
        console.log(`I'm driving at ${velocity} km/h`)
    }
}
console.log(car);
console.log(car.make)

car.drive(140);

car.make = 'saab';
console.log(car.make)

console.log(car);

car.keyCode = 13245;
console.log(car)

car.mdel = '95'; //stavar fel men får inget felmeddelande eftersom vi får lägga till helt nya egenskaper till ett objekt