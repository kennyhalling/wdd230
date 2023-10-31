const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#confirm");
const message = document.querySelector("#message");

pass2.addEventListener("focusout", checkSame);

function checkSame(){
    if (pass1.value !== pass2.value){
        message.style.visibility = "show";
        message.textContent = "Passwords must match!"
        pass2.style.backgroundColor = "#fff0f3";
        pass1.value= '';
        pass2.value = '';
        pass2.focus;
    }
    else{
        message.textContent = '';
        pass2.style.backgroundColor = "lightgreen";
    }
}