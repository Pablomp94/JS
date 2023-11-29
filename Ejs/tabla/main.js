let contenido = document.querySelector("div");

contenido.addEventListener("contextmenu", menuContextual);

function menuContextual(ev){
    ev.preventDefault();
    let miDial = document.getElementById("menu");
    miDial.style.left=ev.pageX + "px";
    miDial.style.left=ev.pageY + "px";

    miDial.style.display="inline-block";
}


