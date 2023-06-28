// toggle menu
const btnMenu = document.querySelector(".burger-menu");
const boxMenu = document.querySelector("nav ul");
const btnCloseMenu = document.querySelector(".close-menu");
function showMenu(){
    boxMenu.classList.toggle("active");
    document.body.classList.add("beku")
}
function hideMenu(e){
    e.preventDefault();
    boxMenu.classList.remove("active");
    document.body.classList.remove("beku");
}

btnMenu.addEventListener("click", showMenu);
btnCloseMenu.addEventListener("click", hideMenu);