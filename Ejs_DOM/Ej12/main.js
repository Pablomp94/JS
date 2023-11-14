function crear(){
    let divposition = document.querySelector("div");
    let textoContenido = document.createElement("p");
    let texto = prompt("Introduce el texto a añadir");
    textoContenido.textContent=(texto);
    let primposition = divposition.firstElementChild;
    divposition.insertBefore(textoContenido, primposition);
}