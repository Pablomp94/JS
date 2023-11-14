
function ocultar(){
    let bloques = document.querySelector("body");
    let bloque = bloques.firstElementChild.nextElementSibling;
    console.log(bloque);
    bloque.style.visibility="hidden";
}

function mostrar(){
    let bloques = document.querySelector("body");
    let bloque = bloques.firstElementChild.nextElementSibling;
    console.log(bloque);
    bloque.style.visibility="";
}