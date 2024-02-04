window.addEventListener("load", function () {
  //Creo las variables que voy a necesitar

  let tabla = document.querySelector("table");
  let editable = document.getElementsByTagName("td");
  let precio = document.getElementsByClassName("precio");
  let cantidad = document.getElementsByClassName("cantidad");
  let total = document.getElementsByClassName("total");
  let columnaEliminable = document.getElementsByClassName("eliminable");
  let botonCrear = document.getElementById("agregar");
  let botFondo = document.getElementById("fondo");
  let botLetra = document.getElementById("letra");
  let botEliminar = document.getElementById("eliminar");
  let tablaFija = document.getElementsByClassName("info");

  
  botLetra.addEventListener("click", cambiarLetra);
  botFondo.addEventListener("click", cambiarFondo);
  botonCrear.addEventListener("click", añadirColumna);
  botEliminar.addEventListener("click", eliminarColumna);


  setInterval(editar, 1000);
  setInterval(calculoTotal, 1000);


  function editar(ev) {
    
    for (let i = 0; i < editable.length; i++) {
      editable[i].addEventListener("click", editar);
    }

    try{
      let nodo = ev.target;
      let texto = prompt("Introduce el texto a cambiar");
  
      nodo.textContent = texto;
    }catch{
      
    }
    
  }
  
  function calculoTotal() {
    for (let i = 0; i < precio.length; i++) {
      let prec = parseFloat(precio[i].textContent);
      let cant = parseInt(cantidad[i].textContent);
  
      try {
        let tot = (prec * cant);
        total[i].textContent = tot;
      } catch {
        window.alert("Los datos introducidos en cantidad y precio son ERRONEOS");
      }
    }
  }


  function añadirColumna(){

    let tabla = document.querySelector("table");
    let columna = document.createElement("tr");
    let filaProducto = document.createElement("td");
    let filaPrecio = document.createElement("td");
    let filaCantidad = document.createElement("td");
    let filaTotal = document.createElement("th");

    columna.setAttribute("class", "eliminable")
    filaPrecio.setAttribute("class", "precio");
    filaCantidad.setAttribute("class", "cantidad");
    filaTotal.setAttribute("class", "total");

    filaProducto.textContent = "Hazme click para editarme";
    filaPrecio.textContent = "Hazme click para editarme";
    filaCantidad.textContent = "Hazme click para editarme";
    
    

    tabla.appendChild(columna);
    columna.appendChild(filaProducto);
    columna.appendChild(filaPrecio);
    columna.appendChild(filaCantidad);
    columna.appendChild(filaTotal);

  }


  function cambiarFondo(){
    
    let color = prompt("Selecciona el color en ingles que quieras para cambiar el color del fondo EN INGLES");

    document.body.style.backgroundColor = color.toLowerCase();

  }

  function cambiarLetra(){
    
    let color = prompt("Selecciona el color en ingles que quieras para cambiar el color de la letra EN INGLES");

    tabla.style.color = color.toLowerCase();

  }

  function eliminarColumna(){

    let numeroHijos = tabla.childElementCount;

    if(numeroHijos > 1){
      tabla.removeChild(tabla.lastChild);
    }else{
      alert("No puedes eliminar mas columnas. Edita si es necesario las que tienes");
    }
  }

  function verInfo(){

  }

  

});

