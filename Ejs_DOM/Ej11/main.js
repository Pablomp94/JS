
function crear(){
    let divposition = document.querySelector("div");
        let textoContenido = document.createElement("p");
        let texto = prompt("Introduce el texto a añadir");
        textoContenido.textContent=(texto);
        divposition.appendChild(textoContenido);
}


function borrar(){
    let divposicion = document.querySelector("div");
    let borrar = divposicion.lastElementChild;
    divposicion.removeChild(borrar);

}