// Burgermenu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menuparent");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  })
);
