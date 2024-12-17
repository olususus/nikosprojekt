let currentSlide = 0;

const slides = document.querySelectorAll(".slider .slide");
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const sliderContainer = document.querySelector(".slider .slider-container");
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 5000);
