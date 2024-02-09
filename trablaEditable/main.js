window.addEventListener("load", function () {
  //Creo las variables que voy a necesitar

  let tabla = document.querySelector("table");
  let editable = document.getElementsByTagName("td");
  let precio = document.getElementsByClassName("precio");
  let cantidad = document.getElementsByClassName("cantidad");
  let total = document.getElementsByClassName("total");
  let botonCrear = document.getElementById("agregar");
  let botFondo = document.getElementById("fondo");
  let botLetra = document.getElementById("letra");
  let botEliminar = document.getElementById("eliminar");

  let infProducto = document.getElementById("producto");
  let infPrecio = document.getElementById("precio");
  let infCantidad = document.getElementById("cantidad");
  let infTotal = document.getElementById("total");


  infProducto.addEventListener("click", escribirProducto);
  infPrecio.addEventListener("click",  escribirPrecio);
  infCantidad.addEventListener("click", escribirCantidad);
  infTotal.addEventListener("click", escribirTotal);
  let escr;
  function escribir(){
    try{
      let texto = document.getElementById("texto");
      texto.remove();
    }catch{}

    escr = document.createElement("h1");
    escr.setAttribute("id", "texto");
  }
  function escribirProducto(){
    escribir();
    escr.textContent = "Los productos que se van a almacenar.";
    document.body.appendChild(escr);
  }
  function escribirPrecio(){
    escribir();
    escr.textContent = "El precio de cada producto.";
    document.body.appendChild(escr);
  }
  function escribirCantidad(){
    escribir();
    escr.textContent = "La cantidad de productos.";
    document.body.appendChild(escr);
  }
  function escribirTotal(){
    escribir();
    escr.textContent = "El total de lo que vale el conjunto de ese producto.";
    document.body.appendChild(escr);
  }


  
  botLetra.addEventListener("click", cambiarLetra);
  botFondo.addEventListener("click", cambiarFondo);
  botonCrear.addEventListener("click", añadirColumna);
  botEliminar.addEventListener("click", eliminarFila);


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
    escr.style.color = color.toLowerCase();

  }

  function eliminarFila(){

    let numeroHijos = tabla.childElementCount;

    if(numeroHijos > 1){
      tabla.removeChild(tabla.lastChild);
    }else{
      alert("No puedes eliminar mas filas. Edita si es necesario las que tienes");
    }
  }


  

});

