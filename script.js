const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');
const img = document.querySelector('img');

const imageSlider = document.querySelector('.imageSlider');

// Array of image Elements

// Push last element back to array

// Pop last element

// for each element add to container

imageSliderElements = [img1, img2, img3, img4, img5];




document.querySelector('.imgNavRight').addEventListener('click', () => {
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

rebuildImages(imageArray, container)

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
        container.appendChild(element);
    });
}