const menu = document.getElementById("toggle-menu");
menu.addEventListener("change", openMenu);

const btToggleTheme = document.querySelector(".menu-buttons.toggle-theme");
btToggleTheme.addEventListener("click", toggleThemeMode);

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const darkModeEnabled = localStorage.getItem("dark-mode") === "true";

    if (darkModeEnabled) {
        body.classList.add("dark-theme");

        const icon = document.querySelector(".top-menu .menu-buttons.toggle-theme .material-icons");
        icon.innerHTML = "dark_mode";
    };
})

function openMenu() {
    const labelMenu = document.querySelector("#toggle-menu + button label span");

    document.body.classList.toggle("menu-open");

    if (menu.checked) {
        labelMenu.innerHTML = "close";
    } else {
        labelMenu.innerHTML = "menu";
    };
};

function toggleThemeMode() {
    const isDarkTheme = document.body.classList.toggle("dark-theme");

    localStorage.setItem("dark-mode", isDarkTheme)

    const icon = document.querySelector(".top-menu .menu-buttons.toggle-theme .material-icons");
    if (document.body.classList.contains("dark-theme")) {
        icon.innerHTML = "dark_mode";
    } else {
        icon.innerHTML = "wb_sunny";
    };
};