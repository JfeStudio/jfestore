// scroll navigation
const scrollNav = document.querySelector("#header");

window.addEventListener("scroll", () => {
  scrollNav.classList.toggle("header-fixed", this.scrollY > 0);
});

// hamburger menu
const menuToggle = document.querySelector(".menu-hamburger");
const navigation = document.querySelector("#navigation");
const icon = document.querySelector(".bx-menu-alt-right");

menuToggle.addEventListener("click", () => {
  const visability = navigation.getAttribute("data-visible");
  icon.classList.toggle("bx-x");

  // show menu
  if (visability === "false") {
    navigation.setAttribute("data-visible", true);
  } else if (visability === "true") {
    navigation.setAttribute("data-visible", false);
  }
});

// reload browser
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  location.reload();
});
