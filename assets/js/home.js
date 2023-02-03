const searchToggle = document.querySelector(".search_toggle"),
  navBar = document.querySelector(".nav_bar"),
  closeNav = document.querySelector(".close"),
  menu = document.querySelector(".menu_icon");

searchToggle.addEventListener("click", () => {
  navBar.classList.remove("active");
  searchToggle.classList.toggle("active");
});

menu.addEventListener("click", () => {
  searchToggle.classList.remove("active");
  navBar.classList.toggle("active");
});

closeNav.addEventListener("click", () => {
  navBar.classList.remove("active");
});
