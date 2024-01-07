let fotos = {
  code: 0,
  result: "OK",
  autores: [
    {
      Nombre: "Fotos de Juan Pedro",
      BiografiaUrl: "http://juanpedro.es",
      Apodo: "elprofe",
      perros: ["fotoPerros/perro1.jfif", "fotoPerros/perro2.jfif"],
    },
    {
      Nombre: "Fotos de Ester Colero",
      BiografiaUrl: "http://estercolero.es",
      Apodo: "olorosa",
      perros: ["fotoPerros/perro3.jfif", "fotoPerros/perro4.jfif"],
    },
    {
      Nombre: "Fotos de Ana Conda",
      BiografiaUrl: "http://anaconda.es",
      Apodo: "culebra",
      perros: [
        "fotoPerros/perro5.jfif",
        "fotoPerros/perro6.jfif",
        "fotoPerros/perro7.jfif",
      ],
    },
    {
      Nombre: "Fotos de Eva Liente",
      BiografiaUrl: "http://evaliente.es",
      Apodo: "valentina",
      perros: ["fotoPerros/perro8.jfif"],
    },
  ],
};

//Si se pone el link fuera del body se tiene que poner window.addEventListener 

//windows.addEventListener

var div = document.createElement("div");
var main = document.querySelector("body");
main.appendChild(div);

for (let miObj of fotos.autores) {
  for (let perr of miObj.perros) {
    var main = document.querySelector("body");
    var ima = document.createElement("img");
    ima.classList.add("imagen");
    ima.setAttribute("src", perr);
    ima.addEventListener("click", (ev) => {
      ev.stopPropagation();
      let contenido = ima.getAttribute("src");
      let nuevimg = document.createElement("img");
      nuevimg.setAttribute("src", contenido);
      nuevimg.setAttribute("id", "nueva");
      nuevimg.classList.add("ampliada");
      main.appendChild(nuevimg);
      nuevimg.setAttribute("class", "ampliada");
    });
    div.appendChild(ima);

    main.addEventListener("click", (ev) => {
      ev.stopPropagation();
      advertencia();
    });
  }
}
function advertencia() {
  alert("Haga click en cualquier foto");
}
function verFoto() {
  let contenido = ima.getAttribute("src");
  let nuevimg = document.createElement("img");
  nuevimg.setAttribute("src", contenido);
  nuevimg.setAttribute("id", "nueva");
  nuevimg.classList.add("ampliada");
  main.appendChild(nuevimg);
  nuevimg.setAttribute("class", "ampliada");

  /*function eliminar() {
    document.getElementById("nueva").remove();
  }
  setTimeout(eliminar(), 2000);*/
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
