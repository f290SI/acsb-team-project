
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

toggle.onclick = function(){
    sec.classList.toggle('dark');
}