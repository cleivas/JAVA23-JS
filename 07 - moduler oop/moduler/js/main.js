import { getRandomDogImage, getRandomDogImages } from "./dogAPI.js";
import displayImage, {displayImages} from "./display.js";
import * as utils from './utilities.js';

// getRandomDogImage().then( displayImage );

// getRandomDogImages(10).then( displayImages );

getRandomDogImages(10).then( (urls)=>{
    const imgUrls = utils.sortDescending(urls);
    displayImages(imgUrls);
});

