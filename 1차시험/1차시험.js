let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  
    slides.forEach((slide) => {
        slide.style.opacity = '0';
    });
   
    slides[index].style.opacity = '1';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    showSlide(currentIndex);
}

showSlide(currentIndex);

setInterval(nextSlide, 3000);



