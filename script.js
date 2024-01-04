// Burgermenu
const hamburger = document.querySelector(".hamburger");
const menuparent = document.querySelector(".menuparent");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuparent.classList.toggle("active");
});

document.querySelectorAll(".linkheader").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuparent.classList.remove("active");
  })
);
