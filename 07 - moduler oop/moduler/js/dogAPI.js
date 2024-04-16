async function getRandomDogImage(){
    const url = `https://dog.ceo/api/breeds/image/random`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data.message;
}


async function getRandomDogImages(amount){
    const url = `https://dog.ceo/api/breeds/image/random/`+amount;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data.message;
}

export {getRandomDogImage, getRandomDogImages};