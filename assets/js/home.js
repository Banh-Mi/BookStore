const translate  = document.querySelector(".translate"),
        searchToggle  = document.querySelector(".search_toggle"),
        navBar = document.querySelector(".nav_bar"),
        closeNav = document.querySelector(".close"),
       menu = document.querySelector(".menu_icon");

translate.addEventListener("click", () => {
    searchToggle.classList.remove("active");
    navBar.classList.remove("active"); 
    translate.classList.toggle("active");
});

searchToggle.addEventListener("click", () => {
    translate.classList.remove("active");
    navBar.classList.remove("active"); 
    searchToggle.classList.toggle("active");
});

menu.addEventListener("click", () => {
    translate.classList.remove("active");
    searchToggle.classList.remove("active");
    navBar.classList.add("active");
});

closeNav.addEventListener("click", () => {
    navBar.classList.remove("active"); 
})





