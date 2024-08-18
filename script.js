const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const imgContainer = document.querySelector('.img-container');
const images = document.querySelectorAll('.img');
const totalImages = images.length;
let currentIndex = 0;
const autoSlideInterval = 3000;

function updateSlide() {
    const offset = -currentIndex * 100;
    imgContainer.style.transform = `translateX(${offset}%)`;
}
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlide();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlide();
}

rightButton.addEventListener('click', showNextImage);
leftButton.addEventListener('click', showPrevImage);

let autoSlide = setInterval(showNextImage, autoSlideInterval);

function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(showNextImage, autoSlideInterval);
}

rightButton.addEventListener('click', stopAutoSlide);
leftButton.addEventListener('click', stopAutoSlide);
