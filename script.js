const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');

const imageSlider = document.querySelector('.imageSlider');

// Array of image Elements

// Push last element back to array

// Pop last element

// for each element add to container

imageSliderElements = [img1, img2, img3, img4, img5];


function slideImages(imageArray, container) {
let lastArrayElement = imageArray.slice(-1);
imageArray.pop();
imageArray.unshift(lastArrayElement[0]);

console.log(container.childNodes);
container.childNodes.forEach(element => {
    container.removeChild(element);
});

imageArray.forEach(element => {
    container.appendChild(element);
});

}

setInterval(function() {
    slideImages(imageSliderElements, imageSlider)
}, 5000);

console.log(imageSliderElements);

