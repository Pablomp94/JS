window.addEventListener("load", function(){

    fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Los datos no llegaron bien");
    }
  })
  .then((json) => {

    let main = document.querySelector("body");

    let tab = document.createElement("table");
    main.appendChild(tab);
    
    

    for(let miObj of json) {
        
        let fila = document.createElement("tr");
        tab.appendChild(fila);
        
        let usuarioId = document.createElement("th");
        usuarioId.textContent = miObj["userId"];
        fila.appendChild(usuarioId);
        
        let identificador = document.createElement("th");
        identificador.textContent = miObj["id"];
        fila.appendChild(identificador);

        let titulo = document.createElement("th");
        titulo.textContent = miObj["title"];
        fila.appendChild(titulo);

        let completado = document.createElement("th");
        completado.textContent = miObj["completed"];
        fila.appendChild(completado);
    }
  });

})

