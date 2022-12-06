const sliderImage = document.querySelector('#sliderImage');
const imageSlider = document.querySelector('.imageSlider');
const imgNav = document.querySelector('.imgNav');

const img1 = './images/beagle-768x512.jpeg';
const img2 = './images/Boston-Terrier-dog.webp';
const img3 = './images/Chihuahua-laying-down-with-her-puppies.jpg';
const img4 = './images/Dachshund-FeaturedImage-1024x615.webp';
const img5 = './images/english-bulldog-g611d94c0e_1920.jpg';

// Array of image Elements
// Push last element back to array
// Pop last element
// for each element add to container

imageSliderElements = [img1, img2, img3, img4, img5];

let currentImage = imageSliderElements[0];
sliderImage.src = currentImage;
createNavElements();

navArray = [];

function createNavElements() {
    
    console.log(imgNav.children.length);

    for (let i = imgNav.children.length; i > 0; i--) {
        console.log('index ' + i);
        console.log(imgNav.children.length);
        imgNav.removeChild(imgNav.children[(i - 1)]);
    }

    imageSliderElements.forEach(element => {
    navArrayElement = document.createElement('div');
    navArrayElement.className = 'navElement';
    navArrayElement.textContent = 'o'
    if(imageSliderElements.indexOf(element) === imageSliderElements.indexOf(currentImage)) {
        navArrayElement.style.color = 'white';
    }
    imgNav.appendChild(navArrayElement); 
    });

}




function nextImage() {
if((imageSliderElements.indexOf(currentImage) + 2) > imageSliderElements.length) {
    currentImage = imageSliderElements[0];
    sliderImage.src = currentImage;
createNavElements();
}
else {
    currentImage = imageSliderElements[(imageSliderElements.indexOf(currentImage) + 1)];
    sliderImage.src = currentImage;
createNavElements();
}


}

function prevImage() {
    if((imageSliderElements.indexOf(currentImage) - 1) < 0) {
        currentImage = imageSliderElements[imageSliderElements.length - 1];
        sliderImage.src = currentImage;
createNavElements();
    }
    else {
        currentImage = imageSliderElements[(imageSliderElements.indexOf(currentImage) - 1)];
        sliderImage.src = currentImage;
createNavElements();
    }

    

}

document.querySelector('.imgNavRight').addEventListener('click', () => {
    nextImage();
});

document.querySelector('.imgNavLeft').addEventListener('click', () => {
    prevImage();
});

setInterval(nextImage, 5000);



/* document.querySelector('.imgNavRight').addEventListener('click', () => {
    slideImagesRight(imageSliderElements, imageSlider);
});

document.querySelector('.imgNavLeft').addEventListener('click', () => {

    slideImagesLeft(imageSliderElements, imageSlider);
});


setInterval(slideImagesRight, 5000, imageSliderElements, imageSlider);



function slideImagesLeft(imageArray, container) {

    let lastArrayElement = imageArray.slice(-1);
    imageArray.pop();
    imageArray.unshift(lastArrayElement[0]);

    rebuildImages(imageArray, container);


}



function slideImagesRight(imageArray, container) {

    let firstArrayElement = imageArray.slice(0);
    imageArray.shift();
    imageArray.push(firstArrayElement[0]);
  
    rebuildImages(imageArray, container);


}

function rebuildImages(imageArray, container) {
    container.childNodes.forEach(element => {
        container.removeChild(element);
    });

    imageArray.forEach(element => {
        element.style.display = 'none';
        container.appendChild(element);
    });

    imageArray[3].style.display = 'block';
} */