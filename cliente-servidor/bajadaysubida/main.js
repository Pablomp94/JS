let conjunto = {
  personas: [
    {
      Nombre: "Pablo",
      Edad: 19,
    },
    {
      Nombre: "David",
      Edad: 20,
    },
  ],
};

window.addEventListener("load", function () {
  let main = document.body;

  let tabla = document.createElement("table");

  for (let objt of conjunto.personas) {
    let fila = document.createElement("tr");

    let columnaNombre = document.createElement("th");

    columnaNombre.textContent = objt.Nombre;

    fila.appendChild(columnaNombre);

    let columnaEdad = document.createElement("th");

    columnaEdad.textContent = objt.Edad;

    fila.appendChild(columnaEdad);

    tabla.appendChild(fila);
    main.appendChild(tabla);
  }


  
});
