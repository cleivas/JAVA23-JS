export default function displayImage(imgUrl){
    const imgEl = document.createElement('img');
    imgEl.src = imgUrl;
    document.body.append(imgEl);
}

export function displayImages(imgUrlArray){

    for(const imgUrl of imgUrlArray){
        const imgEl = document.createElement('img');
        imgEl.src = imgUrl;
        document.body.append(imgEl);
    }

}


