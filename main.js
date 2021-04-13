const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.querySelector(".header-mobile-menu");

function menuToggle() {
  mobileMenu.classList.toggle("open");
}

menuButton.addEventListener("click", menuToggle);