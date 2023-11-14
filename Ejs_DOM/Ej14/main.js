
function add(){
    let position = document.querySelector("div");
    let content = position.getElementsByTagName("h1");
    let lastContent = content[(content.length - 1)];
    let textoContenido = document.createElement("h1");
    let texto = lastContent.textContent;
    textoContenido.textContent=(texto);
    let primposition = position.firstElementChild;
    position.insertBefore(textoContenido, primposition);
}