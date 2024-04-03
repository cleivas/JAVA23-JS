const formEl = document.querySelector('form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    console.log('Form submitted!')

    const enteredName = formEl.querySelector('input').value;
    const enteredCountry = formEl.querySelector('select').value;

    console.log(enteredName, enteredCountry);

    formEl.reset();
}