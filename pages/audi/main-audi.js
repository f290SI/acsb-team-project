

const sec = document.querySelector('body');
const toggle = document.querySelector('.toggle');


var tema = false;

toggle.onclick = function(){
    sec.classList.toggle('dark');


    if (tema == false) {
        document.getElementById("claroEscuro").innerHTML = "Claro";    
        tema = true;
    } else {
        document.getElementById("claroEscuro").innerHTML = "Escuro";    
        tema = false;
    }
}
