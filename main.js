// toggle menu
const btnMenu = document.querySelector(".burger-menu");
const boxMenu = document.querySelector("nav ul");
const btnCloseMenu = document.querySelector(".close-menu");
function showMenu(){
    boxMenu.classList.toggle("active");
}
function hideMenu(e){
    e.preventDefault();
    boxMenu.classList.remove("active");
}

btnMenu.addEventListener("click", showMenu);
btnCloseMenu.addEventListener("click", hideMenu);