document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector(".gallery__container");
  const images = [
    "images/gallery/image1.jpg",
    "images/gallery/image2.jpg",
    "images/gallery/image3.jpg",
  ];

  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gallery Image";
    img.classList.add("gallery__image");
    galleryContainer.appendChild(img);
  });
});
