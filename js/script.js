const burger = document.querySelector(".nav-ul__hamburger");
const close = document.querySelector(".nav-ul__close");
const nav = document.querySelector(".nav-ul");

const closeNav = () => {
  nav.style.transform = "translateX(254px)";
};

const showNav = () => {
  nav.style.transform = "translateX(0px)";
};

close.addEventListener("click", closeNav);
burger.addEventListener("click", showNav);
