const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".header");
menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("menu-button-active");
  menu.classList.toggle("header-active");
});
