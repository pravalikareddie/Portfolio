const menuBtns = document.querySelector(".btn-lines");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const leftContainer = document.querySelector(".left");
const rightContainer = document.querySelector(".right");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;
menu.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("close");
    nav.classList.add("show");
    leftContainer.classList.add("show");
    rightContainer.classList.add("show");
    navItems.forEach((element) => {
      element.classList.add("show");
    });
    showMenu = true;
  } else {
    console.log("clicked");

    menu.classList.remove("close");
    nav.classList.remove("show");
    leftContainer.classList.remove("show");
    rightContainer.classList.remove("show");
    navItems.forEach((element) => {
      element.classList.remove("show");
    });
    showMenu = false;
  }
}
