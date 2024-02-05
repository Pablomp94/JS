window.addEventListener("load", function (){

    let lienzo = document.getElementById("lienzo");
    
    /*
    let boton = new Set();
 
    lienzo.addEventListener("onmousedown", (event) => boton.add(event.key));
    document.addEventListener("onmouseup", (evento) => boton.delete(evento.key));*/

    lienzo.addEventListener("mousedown", function(ev){

    lienzo.addEventListener("contextmenu", function (ev) {
            ev.preventDefault();       
    })    
             //Cojo las coordenadas del raton//
             let x = ev.clientX;
             let y = ev.clientY;
             
             //Creo el div que voy a dibujar en la posicion del raton
     
             let nuevoLienzo = document.createElement("div");
             nuevoLienzo.setAttribute("class", "pintarIzq");
             
             nuevoLienzo.style.top = y;
             nuevoLienzo.style.left = x;
     
             lienzo.appendChild(nuevoLienzo);
             
             if(ev.button === 0){
                nuevoLienzo.style.background = "black";
             }else{
                nuevoLienzo.style.background = "red";
             }
    })

    



})