
const inputs = document.querySelectorAll(".input");

function focusFuc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent = this.parentNode;

    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFuc);
    input.addEventListener("blur", blurFunc);
});


const sec = document.querySelector('.container');
const toggle = document.querySelector('.toggle');

var tema = false;

toggle.onclick = function(){
    sec.classList.toggle('dark');

    if (tema == false) {
        document.getElementById("claroEscuro").innerHTML = "Claro";  
        document.getElementById("claroEscuro").style.color = "#fff";
        tema = true;
    } else {
        document.getElementById("claroEscuro").innerHTML = "Escuro";    
        document.getElementById("claroEscuro").style.color = "black";
        tema = false;
    }
}