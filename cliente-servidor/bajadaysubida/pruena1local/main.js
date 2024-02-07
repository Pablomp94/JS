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

  /*fetch("C:/Users/Pablo/Desktop/JS/cliente-servidor/bajadaysubida/pruena1local/main.json", {
    method:"post",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: "Nombre=Lucia&Edad=20",
    mode: 'no-cors'
  })*/


  let data={
    Nombre:"Lucía",
    Edad:19
  }

  fetch("./main.json", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    mode: 'no-cors'
  }).then(function (response) {
    return response.text();
  }).then(function (text){
    console.log(text);
  }).catch(function (error){
    console.log(error);
  });






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
