
let fotos = {
    "code": 0,
    "result": "OK",
    "autores": [ {"Nombre": "Fotos de Juan Pedro",
              "BiografiaUrl": "http://juanpedro.es",
              "Apodo": "elprofe",
              "perros": [ "fotoPerros/perro1.jfif", "fotoPerros/perro2.jfif"] 
              },
              {"Nombre": "Fotos de Ester Colero",
              "BiografiaUrl": "http://estercolero.es",
              "Apodo": "olorosa",
              "perros": [ "fotoPerros/perro3.jfif", "fotoPerros/perro4.jfif"] 
             },
             {"Nombre": "Fotos de Ana Conda",
              "BiografiaUrl": "http://anaconda.es",
              "Apodo": "culebra",
              "perros": [ "fotoPerros/perro5.jfif", "fotoPerros/perro6.jfif","fotoPerros/perro7.jfif"] 
              },
              {"Nombre": "Fotos de Eva Liente",
              "BiografiaUrl": "http://evaliente.es",
              "Apodo": "valentina",
              "perros": [ "fotoPerros/perro8.jfif"] 
             }
             ]               
             }




let bod = document.querySelector("body");
document.createElement("div");
let cont = document.querySelector("div");
document.body.appendChild(cont);


for(let miObj of fotos.autores){
    for(let perr of miObj.perros){
        let ima = document.createElement("img");
        ima.classList.add("imagen");
        ima.setAttribute("src", perr);
        cont.appendChild(ima);
        ima.addEventListener("click", verFoto);
        
        addEventListener("click", advertencia);
        ima.addEventListener("click", verFoto);

        function advertencia(){
            alert("Haga click en cualquier foto");
        }

        function verFoto(){
            let contenido = ima.getAttribute("src");
            let nuevimg = document.createElement("img");
            nuevimg.setAttribute("src", contenido);
            nuevimg.classList.add("ampliada");
            body.appendlastChild(nuevimg);            
            nuevimg.setAttribute("class", "ampliada");
            
            setTimeout(2000, eliminar);

            function eliminar(){
                body.removeChild(nuevimg);
            }
        }   
    }
}

/*



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

        setTimeout(ampliar, 2000);

        function ampliar(){
            nuevimg.setAttribute("class", "ampliada");
        }
    
        body.removeChild(nuevimg);
    }
    if(i>=imagenes.length){
        i=0;
    }
}*/

