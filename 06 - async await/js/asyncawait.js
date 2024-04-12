

async function getDogImages(breed, amount) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;


    const response = await fetch(url);

    if(response.ok){
        const data = await response.json();
        return data.message;
    }
    else if(response.status == 404){
        throw new Error('Breed not found');
    }
    
}

function displayDogImages(dogUrlArray) {
    const imgContainer = document.querySelector("#imageContainer");
    imgContainer.innerHTML = '';

    for (const imgUrl of dogUrlArray) {
        const imgEl = document.createElement('img');
        imgContainer.append(imgEl);
        imgEl.src = imgUrl;
    }

}

const form = document.querySelector('form');
// form.addEventListener('submit', async event => {
//     event.preventDefault();

//     const breed = document.querySelector('#breedInput').value.toLowerCase();
//     const amount = document.querySelector('#amountInput').value;

//     console.log(breed, amount);
//     // console.log( 'before getDogImages')

//     const images = await getDogImages(breed, amount)
//     displayDogImages(images);

//     // console.log( 'after getDogImages')

// })


form.addEventListener('submit', event => {
    event.preventDefault();

    const breed = document.querySelector('#breedInput').value.toLowerCase();
    const amount = document.querySelector('#amountInput').value;

    console.log(breed, amount);
    // console.log( 'before getDogImages')

    getDogImages(breed, amount)
        .then(displayDogImages)
        .catch(error => console.log(error))

    // console.log( 'after getDogImages')

})


