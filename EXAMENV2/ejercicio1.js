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

//Si se pone el link fuera del body se tiene que poner windows.addEventListener("load", ); 


let div = document.createElement("div");
let main = document.querySelector("body");
main.appendChild(div);

window.onclick = advertencia;

for (let miObj of fotos.autores) {
  for (let perr of miObj.perros) {
    let ima = document.createElement("img");
    ima.classList.add("imagen");
    ima.setAttribute("src", perr);
    ima.addEventListener("click", verFoto);
    ima.addEventListener("click", function(ev){
      ev.stopPropagation();
    });

    div.appendChild(ima); 
    ima.addEventListener("contextmenu", function(ev){
      ev.preventDefault();
    }); 
  }
}
function advertencia() {
  alert("Haga click en cualquier foto");
}

function eliminar(){
  
  try{
    document.getElementById("nueva").remove();
  }catch{
    console.log("La imagen ya se eliminó")
  }
}

window  .addEventListener("contextmenu", function(ev){
  ev.preventDefault();
});



function verFoto(ev){
  let nodo = ev.target;
  let contenido = nodo.getAttribute("src");
  let nuevimg = document.createElement("img");
  nuevimg.setAttribute("src", contenido);
  nuevimg.setAttribute("id", "nueva");
  nuevimg.classList.add("ampliada");
  main.appendChild(nuevimg);
  
  nuevimg.addEventListener("click", function(ev){
    ev.stopPropagation();
  });

  nuevimg.addEventListener("contextmenu", function(ev){
    ev.preventDefault();
  });

  nuevimg.addEventListener("click", eliminar);

  setTimeout(eliminar, 2000);
 
   
}


