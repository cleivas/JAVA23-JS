const baseUrl = 'https://restcountries.com/v3.1/';

const errorContainer = document.querySelector('#errorMessage');
const countryContainer = document.querySelector('#countryContainer');
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const searchTerm = document.querySelector('input').value;
    const searchType = document.querySelector('select').value;
    console.log(searchTerm, searchType)

    const url = baseUrl + `${searchType}/${searchTerm}`;
    console.log(url);

    fetch(url)
        .then( response => {
            if(response.status >= 200 && response.status < 300){
                return response.json()
            }
            if(response.status === 404){
                throw new Error('Country not found');
            }
        })
        .then( displayCountries )
        .catch( displayError );
})

function displayError(error){
    console.log(error.message)
    countryContainer.innerHTML = ''; //töm tidigare sökresultat
    errorContainer.innerHTML = '';

    const errorEl = document.createElement('h1');
    errorEl.innerText = error.message;
    errorContainer.append(errorEl);
}

function displayCountries(countries){
    // console.log(countries);
    countryContainer.innerHTML = ''; //töm tidigare sökresultat
    errorContainer.innerHTML = ''; //töm tidigare sökresultat

    for(const {flags, name} of countries){
        // Skapa alla html-elment som behövs för att visa landets info
        const countryDiv = document.createElement('div');
        const nameEl = document.createElement('p');
        const flagEl = document.createElement('img');

        // Lägg till elementen till DOM:en
        countryDiv.append(nameEl, flagEl);
        countryContainer.append(countryDiv);

        // Informationen som ska visas
        nameEl.innerText = name.common;
        flagEl.src = flags.png;
        
        console.log(name.common);
        console.log(flags.png);
    }
}