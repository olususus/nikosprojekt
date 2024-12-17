const menuToggle = document.querySelector(".menu__toggle");
const menuList = document.querySelector(".menu__list");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
