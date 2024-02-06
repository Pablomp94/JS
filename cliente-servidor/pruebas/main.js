window.addEventListener("load", function(){

  let main = document.querySelector("body");

  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Los datos no llegaron bien");
    }
  })
  .then((json) => {

    let boton = document.createElement("button");
    boton.textContent = "Marcar Id";
    document.body.append(boton);

    boton.addEventListener("click", buscarId);

    let tab = document.createElement("table");
    main.appendChild(tab);
    
        let princ = document.createElement("tr");
        tab.appendChild(princ);
        
        let usuario = document.createElement("th");
        usuario.textContent = "Usuario";
        princ.appendChild(usuario);
        
        let id = document.createElement("th");
        id.textContent = "ID";
        princ.appendChild(id);

        let nombre = document.createElement("th");
        nombre.textContent = "Titulo";
        princ.appendChild(nombre);

        let comp = document.createElement("th");
        comp.textContent = "Completado";
        princ.appendChild(comp);
    
    let i = 1;

    for(let miObj of json) {
        
        let fila = document.createElement("tr");
        tab.appendChild(fila);
        
        let usuarioId = document.createElement("th");
        usuarioId.textContent = miObj["userId"];
        fila.appendChild(usuarioId);
        
        let identificador = document.createElement("th");
        identificador.textContent = miObj["id"];
        identificador.setAttribute("id", i);
        fila.appendChild(identificador);

        let titulo = document.createElement("th");
        titulo.textContent = miObj["title"];
        fila.appendChild(titulo);

        let completado = document.createElement("th");
        completado.textContent = miObj["completed"];
        fila.appendChild(completado);
        
        i++;
    }

    function buscarId(){
      let ident = prompt("Introduce el id a marcar");
      let encontrado = document.getElementById(ident);
      encontrado.style.background="orange";
      
    }

  }).catch(error => {
    main.textContent="Error: " + error;
  });

});

/*Si quiero usar los datos del fetch fuera delftch, tengo que crear una variable global,
la cual va a copiar al array del fetch con el "array".slice()*/

