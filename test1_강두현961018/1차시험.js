let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

const backgrounds = [
    'url(grand.jpg)',         
    'url(london.jpg)', 
    'url(sanfransico.jpg)' 
];

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.opacity = '0';
    });
    slides[index].style.opacity = '1';
    slider.style.backgroundImage = backgrounds[index]; 
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 3000);


