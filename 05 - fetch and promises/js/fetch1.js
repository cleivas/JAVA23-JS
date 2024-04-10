const url = `https://restcountries.com/v3.1/all`;

const countryPromise = fetch(url);

console.log(countryPromise)

countryPromise.then( response =>{
    console.log(response);

    const jsonPromise = response.json();
    console.log(jsonPromise);
    return jsonPromise;

}).then( countries => { 
    console.log(countries)
})

console.log('sist i koden');

fetch(url)
    .then( response => response.json() )
    .then( data => console.log(data) )