let princ = document.querySelector("body");
let imagenes = document.getElementsByTagName("img");


princ.addEventListener("click", advertencia)

function advertencia(){
    alert("Haga click en cualquier foto");
}

for(let i=0; i<=imagenes.length; i++){
    
    imagenes[i].addEventListener("click", verFoto);

    function verFoto(){
        let contenido = imagenes[i].getAttribute("src");
        nuevimg.setAttribute("src", contenido);
        body.appendlastChild(nuevimg);

        setInterval(ampliar, 2000);

        function ampliar(){
            nuevimg.setAttribute("class", "ampliada");
        }
    
        body.removeChild(nuevimg);
    }
    if(i>=imagenes.length){
        i=0;
    }
}

