const inputfield = document.querySelector("#passwordfield");
const outputfield = document.querySelector("#output");
const showbtn = document.querySelector("#showpassword");
const clr = document.querySelector("#clrbtn");

function passwordchecker(inputfield) {
  let password = inputfield.value;

  if (password.length < 8) {
    outputfield.innerHTML = "Password is too short";
    outputfield.style.color = "red";
    outputfield.style.textShadow = "2px 2px 1px #000";
  } else {
    if (password.search(/[a-z]/) == -1) {
      outputfield.innerHTML = "Password must contain lowercase letter (a-z)";
      outputfield.style.color = "red";
      outputfield.style.textShadow = "2px 2px 1px #000";
    } else {
      if (password.search(/[A-Z]/) == -1) {
        outputfield.innerHTML = "Password must contain uppercase letter (A-Z)";
        outputfield.style.color = "red";
        outputfield.style.textShadow = "2px 2px 1px #000";
      } else {
        if (password.search(/[0-9]/) == -1) {
          outputfield.innerHTML = "Password must contain digits (0-9)";
          outputfield.style.color = "red";
          outputfield.style.textShadow = "2px 2px 1px #000";
        } else {
          if (password.search(/[~\!\@\#\$\%\^\&\*\(\)\_\+]/) == -1) {
            outputfield.innerHTML = "Password must contain special symbols";
            outputfield.style.color = "red";
            outputfield.style.textShadow = "2px 2px 1px #000";
          } else {
            outputfield.innerHTML = "Your Password is Strong";
            outputfield.style.color = "greenyellow";
          }
        }
      }
    }
  }
}

inputfield.addEventListener("input", () => {
  passwordchecker(inputfield);
});

let passwordflag = 0;
showbtn.addEventListener("click", ()=>{
      if(passwordflag == 0){
            inputfield.type = "text";
            showbtn.innerHTML = "Hide Password"
            passwordflag = 1;
      }else{
            inputfield.type = "password"
            showbtn.innerHTML = "Show Password"
            passwordflag = 0;
      }
})

clr.addEventListener("click",()=>{
  inputfield.value = '';
  outputfield.innerHTML = '';
})
