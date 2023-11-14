
function mover(){
    let divposition = document.getElementsByTagName("div")[0];
    let contenido = divposition.outerHTML;
    let div2position = document.getElementsByTagName("div")[1];
    div2position.innerHTML= contenido;
    divposition.remove();
}