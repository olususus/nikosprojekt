document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".carousel__button.prev");
  const nextButton = document.querySelector(".carousel__button.next");
  const images = document.querySelectorAll(".carousel__image");
  let currentIndex = 0;

  function changeImage(index) {
    images.forEach((image, i) => {
      image.classList.remove("active");
      if (i === index) {
        image.classList.add("active");
      }
    });
  }

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
  });
});
