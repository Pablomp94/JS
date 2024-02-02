window.addEventListener("load", function () {
  //Creo las variables que voy a necesitar

  let editable = document.getElementsByTagName("td");
  let precio = document.getElementsByClassName("precio");
  let cantidad = document.getElementsByClassName("cantidad");
  let total = document.getElementsByClassName("total");

  for (let i = 0; i < editable.length; i++) {
    editable[i].addEventListener("click", editar);
  }

  setInterval(calculoTotal, 1000);

  function editar(ev) {
    let nodo = ev.target;
    let texto = prompt("Introduce el texto a cambiar");
  
    nodo.textContent = texto;
  }
  
  function calculoTotal() {
    for (let i = 0; i < precio.length; i++) {
      let prec = precio[i].outerHTML;
      let cant = cantidad[i].outerHTML;
  
      try {
        let tot = prec * cant;
        total[i].textContent = tot;
      } catch {
        window.alert("Los datos introducidos en cantidad y precio son ERRONEOS");
      }
    }
  }
  
});

