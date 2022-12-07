const sliderImage = document.querySelector('#sliderImage');
const imageSlider = document.querySelector('.imageSlider');
const imgNav = document.querySelector('.imgNav');

const img1 = imageSlider.children[0];
const img2 = imageSlider.children[1];
const img3 = imageSlider.children[2];
const img4 = imageSlider.children[3];
const img5 = imageSlider.children[4];

// Array of image Elements
// Push last element back to array
// Pop last element
// for each element add to container

imageSliderElements = [];

for (let i = 0; i < imageSlider.children.length; i++) {
    const element = imageSlider.children[i];
    imageSliderElements.push(element);
}

let currentImage = imageSliderElements[0];
currentImage.style.display = 'block';

createNavElements();

navArray = [];




function createNavElements() {
    for (let i = imgNav.children.length; i > 0; i--) {
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

function hideAllImage() {
    imageSliderElements.forEach(element => {
        element.style.display = 'none';
    });
}


function nextImage() {
    hideAllImage();

if((imageSliderElements.indexOf(currentImage) + 2) > imageSliderElements.length) {
    currentImage = imageSliderElements[0];
}
else {
    currentImage = imageSliderElements[(imageSliderElements.indexOf(currentImage) + 1)];
}
createNavElements();
    currentImage.style.animationName = 'slideLeft';
    currentImage.style.display = 'block';

}

function prevImage() {
    hideAllImage();

    if((imageSliderElements.indexOf(currentImage) - 1) < 0) {
        currentImage = imageSliderElements[imageSliderElements.length - 1];
    }
    else {
        currentImage = imageSliderElements[(imageSliderElements.indexOf(currentImage) - 1)];
    }

    createNavElements();
    currentImage.style.animationName = 'slideRight';
    currentImage.style.display = 'block';
    

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