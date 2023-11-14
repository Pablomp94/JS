function lista(){
    
    for(let i = 0; i<3;i++){
        let listaPosicion = document.querySelector("ul");
        let listaContenido = document.createElement("li");
        let texto = prompt("Introduce el texto a añadir");
        listaContenido.textContent=(texto);
        listaPosicion.appendChild(listaContenido);
    }
    
}