const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".navItems");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
