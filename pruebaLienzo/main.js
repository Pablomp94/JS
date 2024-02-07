window.addEventListener("load", function () {
  let lienzo = document.getElementById("lienzo");
  let main = document.body;
  let pintando = false;
 
  lienzo.addEventListener("contextmenu", function (ev) {
    ev.preventDefault();
  });
  main.addEventListener("contextmenu", function (ev) {
    ev.preventDefault();
  });

  let color;

  lienzo.addEventListener("mousedown", function (ev) {
    pintando = true;
    //Cojo las coordenadas del raton//
    let x = ev.clientX;
    let y = ev.clientY;

    //Creo el div que voy a dibujar en la posicion del raton

    let nuevoLienzo = document.createElement("div");
    nuevoLienzo.setAttribute("class", "pintar");

    nuevoLienzo.style.top = y;
    nuevoLienzo.style.left = x;

    lienzo.appendChild(nuevoLienzo);

    if (ev.button === 0) {
      color = "black";
      nuevoLienzo.style.background = color;
    } else {
      color = "red";
      nuevoLienzo.style.background = color;
    }
  });

  lienzo.addEventListener("mouseup", function () {
    pintando = false;
  });

  lienzo.addEventListener("mousemove", function (ev) {

      if(pintando == true){
         //Cojo las coordenadas del raton//
         let x = ev.clientX;
         let y = ev.clientY;
   
         //Creo el div que voy a dibujar en la posicion del raton
   
         let nuevoLienzo = document.createElement("div");
         nuevoLienzo.setAttribute("class", "pintar");
   
         nuevoLienzo.style.top = y;
         nuevoLienzo.style.left = x;
   
         lienzo.appendChild(nuevoLienzo);
   
         nuevoLienzo.style.background = color;
       }
  });
});
