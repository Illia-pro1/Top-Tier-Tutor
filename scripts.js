document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".confirmation").classList.remove("hidden");
});
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "#ffffff";
  } else {
    navbar.style.background = "transparent";
  }
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
