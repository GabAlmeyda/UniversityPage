const menu = document.getElementById("toggle-menu");

menu.addEventListener("change", openMenu);

function openMenu() {
    const labelMenu = document.querySelector("#toggle-menu + button label span");

    document.body.classList.toggle("menu-open");

    if (menu.checked) {
        labelMenu.innerHTML = "close";
    } else {
        labelMenu.innerHTML = "menu";
    };
};