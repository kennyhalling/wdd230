const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#confirm");
const message = document.querySelector("#message");
const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#rating");

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
    else if(pass2.value == ''){
        message.textContent = '';
    }
    else{
        message.textContent = '';
        pass2.style.borderLeft = "rgb(66, 226, 66) solid 6px";
    }
}

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue(){
    rangevalue.innerHTML = range.value;
}