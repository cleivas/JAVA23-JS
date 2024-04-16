export default class DogCard{
    #breed;

    constructor(breed){
        this.#breed = breed;
        this.#createCard();
    }

    async #createCard(){
        const imgEl = document.createElement('img');
        document.body.append(imgEl);

        const imgUrl = await this.#getImage();
        imgEl.src = imgUrl;

        imgEl.addEventListener('click', async ()=>{
            const imgUrl = await this.#getImage();
            imgEl.src = imgUrl;
        })

    }
    async #getImage(){
        const url = `https://dog.ceo/api/breed/${this.#breed}/images/random`

        const response = await fetch(url);
        const data = await response.json();

        // console.log(data);
        return data.message;
    }

    getBreed(){
        return this.#breed
    }
}