
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
let cont = document.createElement("div");
cont.appendChild(bod);

for(let miObj of fotos.autores){
    for(let perr in miObj.perros){
        let ima = document.createElement("img");
        ima.setAttribute("src", perr);
        ima.appendChild(cont);
    }  
}

/*
let princ = document.body;
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

