// toggle menu
const resp_menu = document.querySelector(".resp_menu");
const navbarMenu = document.getElementById('menu');

resp_menu.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  resp_menu.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}
