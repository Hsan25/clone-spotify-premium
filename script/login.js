// toggle border

const boxInput = document.querySelectorAll(".box-input");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const errorMessage = document.querySelectorAll(".error-message")
const btnShowPassword = document.querySelector('.show-password');
const iconEye = document.querySelector(".eye");

function validateValue(x) {
  if (x.target.classList.contains("email")) {
    if (email.value.length == 0) {
      boxInput[0].classList.add("error");
      boxInput[0].style.marginBottom = "2rem"
      errorMessage[0].classList.add("active")

    }else{
        errorMessage[0].classList.remove("active")
        boxInput[0].style.marginBottom = "0"
        boxInput[0].classList.remove("error");
    }

    return;
  }else{
    if (password.value.length == 0) {
        boxInput[1].classList.add("error");
        boxInput[1].style.marginBottom = "2rem"
        errorMessage[1].classList.add("active")
  
      }else{
          errorMessage[1].classList.remove("active")
          boxInput[1].style.marginBottom = "0"
          boxInput[1].classList.remove("error");
      }
  }


}

function showPassword(e){
    e.preventDefault();
    console.log(iconEye.classList.contains('feather-eye') )
    password.type == "text" ? password.type = "password" : password.type = "text";
}

email.addEventListener("input", validateValue);
password.addEventListener("input", validateValue);

btnShowPassword.addEventListener("click", showPassword);


// toggle checkbox
const input = document.querySelector(".box-check input");
let checks = false;
function check() {
  console.log("oke");
  if (!checks) {
    input.checked = true;
    checks = true;
  } else {
    input.checked = false;
    checks = false;
  }
}
