let body = document.querySelector("body");

body.createElement("table");

let tabla = document.querySelector("table");
tabla.setAttribute("id", "tabla");

for(let i = 0; i<=3; i++){
    let fila = document.createElement("tr");
    let columna = document.createElement("th");

    tabla.appendChild(fila);

    fila.appendChild(columna);
}
tabla.addEventListener("contextmenu", menuContextual);

function menuContextual(ev){
    ev.preventDefault();
    let miDial = document.getElementById("tabla");
    miDial.style.left=ev.pageX + "px";
    miDial.style.left=ev.pageY + "px";

    miDial.style.display="inline-block";
}


