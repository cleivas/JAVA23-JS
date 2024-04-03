
const form = document.querySelector('form');
const resetBtn = document.querySelector('#resetBtn');

let numberOfGuesses, randomNumber;
resetGame();

form.addEventListener('submit', handleGuess);
resetBtn.addEventListener('click', resetGame);


function handleGuess(event){
    event.preventDefault();

    const numberGuess = document.querySelector('input').value;
    const resultEl = document.querySelector('#resultMessage');
    
    numberOfGuesses++;

    if(numberGuess > randomNumber){
        resultEl.innerText = 'Gissning är för hög';
    }
    else if( numberGuess < randomNumber){
        resultEl.innerText = 'Gissning är för låg';

    }
    else{
        resultEl.innerText = `Du gissade rätt! Det tog dig ${numberOfGuesses} gissningar.`;

        form.classList.add('hidden') //Hide form
        resetBtn.classList.remove('hidden'); //Show reset button
    }
}

function resetGame(){
    numberOfGuesses = 0;
    randomNumber = Math.ceil( Math.random()*100 );
    console.log(randomNumber) //for testing

    form.classList.remove('hidden') //show form
    resetBtn.classList.add('hidden'); //hide reset button

    document.querySelector('#resultMessage').innerText = '';
}