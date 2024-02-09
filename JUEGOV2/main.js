let musica = new Audio("sweden.mp3");
musica.play();
musica.loop = true;


let cantene;
let puntuacion = 0;
let nombre;
function juego() {
  nombre = prompt("Introduce tu nombre:");
  let canten = prompt("Introduce la cantidad de enemigos");
  cantene = parseInt(canten);
  temporizador();
  enemigos(cantene);
  nave();

  //GANAR//

  setInterval(ganar, 1000);

  let compr = 0;
  let nombres;
  //Compruebo si has ganado//
  function ganar() {
    enemigo = document.getElementsByClassName("marciano");
    if (enemigo.length == 0 && compr == 0) {
      alert(
        "Has ganado, enhorabuena. " +
          nombre +
          " Has sobrevivido: " +
          numero +
          " segundos. Con " +
          cantene +
          " enemigos y una puntuacion total de:" +
          puntuacion
      );
      compr = 1;
      /*//Subo la puntuación a un local storage//
      for(let n = 0; n < localStorage.length; n ++){
        localStorage.setItem("nom"+n, nombre);
        localStorage.setItem("punt"+n, puntuacion);
      }*/
      
    }
  }
}

////////HERRAMIENTAS NECESARIAS////////////

//RECOJO LOS PARAMETROS DEL TAMAÑO DE LA PANTALLA DEL NAVEGADOR//

let tampantx = screen.width - 143;
let tampanty = screen.height - 320;

/////////////////NAVE////////////////////////////

//Creo en tiempo de ejecucion la nave//
function nave() {
  var imagen = document.createElement("img");
  imagen.setAttribute("src", "cabesa.webp");
  imagen.setAttribute("id", "nave");
  document.body.appendChild(imagen);
}

//Este es el movimiento de la nave, la cual está formada por un evento que recoje la pulsacion de teclas//
let teclas = new Set();
//Creo el evento//
document.addEventListener("keydown", (event) => teclas.add(event.key));
document.addEventListener("keyup", (evento) => teclas.delete(evento.key));

let x, y;
let posnave = document.getElementById("nave");
x = 650;
y = 500;

setInterval(movimientoNave, 20);

/*Funcion del movimiento de la nave, recoje las teclas wasd y con una comprobacion "if" miro que tecla se ha pulsado,
    tambien recoje el espacio para disparar*/
function movimientoNave() {
  /*Aqui es donde recojo la tecla pulsada y si coincide le suma o le resta a la posicion x o y de la nave*/

  if (teclas.has("a") && x - 15 >= 0) {
    x = x - 15;
    document.getElementById("nave").style.left = x + "px";
  }
  if (teclas.has("d") && x + 15 <= tampantx) {
    x = x + 15;
    document.getElementById("nave").style.left = x + "px";
  }
  if (teclas.has("w") && y - 15 >= 0) {
    y = y - 15;
    document.getElementById("nave").style.top = y + "px";
  }
  if (teclas.has("s") && y + 15 <= tampanty) {
    y = y + 15;
    document.getElementById("nave").style.top = y + "px";
  }

}

document.addEventListener("click", pausa);

function pausa(){
  /*
  let tabla = document.createElement("table");

  let columna = document.createElement("tr");

  

  for(let a = 0; a < localStorage.length; a ++){
    tabla.appendChild(columna);
    let filaNom = document.createElement("th");
    let filaPunt = document.createElement("th");

    filaNom.textContent = localStorage.getItem("nom"+a);
    filaPunt.textContent = localStorage.getItem("punt"+a);
    columna.appendChild(filaNom);
    columna.appendChild(filaPunt);
  }

  let fondo = document.querySelector("body");

  fondo.style.backgroundImage = "none";

  document.body.appendChild(tabla);*/

  alert("pausa");
}


let n = 0;
setInterval(disparoMisil, 20);

function disparoMisil() {
  /*Recoje la pulsacion del espacio y crea en tiempo de ejecucion la imagen del proyectil
        en la posicion superior centrar de la nave*/

  if (obtenerCatacteristica(document.getElementById("disparo"), "top") < 0) {
    n = 0;
  } else {
    n = 1;
  }

  if (teclas.has(" ")) {
    let algo;
    let misil = document.getElementById("disparo");
    xdis = x + 25;
    ydis = y - 20;

    // ... Resto de la función

    if (n == 0) {
      misil.style.top = ydis + "px";
      misil.style.left = xdis + "px";
      misil.style.visibility = "visible";
      misil.setAttribute("data-y", ydis);
      misil.setAttribute("src", "disparov2.webp");

      algo = setInterval(() => movimientoMisil(misil), 20);
    }

    /*Esta funcion coje el misil y le resta a la posicion vertical, lo que hace que suba un poco*/

    function movimientoMisil(miMisil) {
      let posicionY = Number.parseInt(miMisil.dataset.y);
      posicionY -= 15;
      misil.style.top = posicionY + "px";

      miMisil.setAttribute("data-y", posicionY);

      if (obtenerCatacteristica(misil, "top") < 0) {
        misil.style.visibility = "hidden";
        clearInterval(algo);
      }
    }
  }
}

/////////////////ENEMIGO////////////////////////////

/*Creo en tiempo de ejecucion la cantidad de enemigos que he pedido antes*/
function enemigos() {
  for (i = 0; i < cantene; i++) {
    var imagen = document.createElement("img");
    imagen.setAttribute("src", "ghast.png");
    imagen.setAttribute("id", "marciano");
    imagen.setAttribute("class", "marciano");
    document.body.appendChild(imagen);
    //Crear dos numeros random para que aparezcan en distintos sitios
    let posuno = Math.floor(Math.random() * tampantx);
    let posdos = Math.floor(Math.random() * tampanty);

    imagen.style.left = posuno + "px";
    imagen.style.top = posdos + "px";
  }
}

//Esta es la funcion que hace que se muevan de forma aleatoria los enemigos.

let uno, dos;

/*Realizo un setInterval que lo que hace es que el metodo que hace que se mueva 
    el enemigo y
    se realize cada 20ms, al igual que el metodo que cambia la direccion en la que 
    se va a mover el enemigo, haciendo que cada ese tiempo se mueva de forma distinta*/

setInterval(movimientoEnemigo, 120);
setInterval(mov, 20);

function movimientoEnemigo() {
  uno = Math.floor(Math.random() * 2);
  dos = Math.floor(Math.random() * 2);
}

function mov() {
  let ex, ey, ene;
  let posx, posy;

  if (uno == 0 && dos == 0) {
    ex = -5;
    ey = -5;

    for (ene of document.getElementsByClassName("marciano")) {
      posx = obtenerCatacteristica(ene, "left");

      posy = obtenerCatacteristica(ene, "top");

      if (posx + ex > 0) {
        ene.style.left = posx + ex + "px";
      }

      if (posy + ey > 0) {
        ene.style.top = posy + ey + "px";
      }
    }
  }

  if (uno == 1 && dos == 0) {
    ex = 5;
    ey = -5;

    for (ene of document.getElementsByClassName("marciano")) {
      posx = obtenerCatacteristica(ene, "left");
      posy = obtenerCatacteristica(ene, "top");
      if (posx + ex <= tampantx) {
        ene.style.left = posx + ex + "px";
      }

      if (posy + ey >= 0) {
        ene.style.top = posy + ey + "px";
      }
    }
  }

  if (uno == 0 && dos == 1) {
    ex = -5;
    ey = 5;

    for (ene of document.getElementsByClassName("marciano")) {
      posx = obtenerCatacteristica(ene, "left");
      posy = obtenerCatacteristica(ene, "top");

      if (posx + ex >= 0) {
        ene.style.left = posx + ex + "px";
      }

      if (posy + ey <= tampanty) {
        ene.style.top = posy + ey + "px";
      }
    }
  }

  if (uno == 1 && dos == 1) {
    ex = 5;
    ey = 5;

    for (ene of document.getElementsByClassName("marciano")) {
      posx = obtenerCatacteristica(ene, "left");
      posy = obtenerCatacteristica(ene, "top");

      if (posx + ex <= tampantx) {
        ene.style.left = posx + ex + "px";
      }

      if (posy + ey <= tampanty) {
        ene.style.top = posy + ey + "px";
      }
    }
  }
}

/////////////////COLISIONES////////////////////////////
setInterval(detectarColisiones, 20);
/*En este codigo realizo la deteccion de colisiones*/
function detectarColisiones() {
  /*Recojo los datos necesarios, en los que se va a crear el "perimetro" 
    de las colisiones */

  let laNave = document.getElementById("nave");
  let disparo = document.getElementById("disparo");

  let naveX = obtenerCatacteristica(laNave, "left");
  let naveY = obtenerCatacteristica(laNave, "top");
  let anchura = obtenerCatacteristica(laNave, "width");
  let disparoAnchura = obtenerCatacteristica(disparo, "width");
  let disparoX = obtenerCatacteristica(disparo, "left");
  let disparoY = obtenerCatacteristica(disparo, "top");

  let enemigo = document.getElementsByClassName("marciano");

  for (let i = 0; i < enemigo.length; i++) {
    let eneX = obtenerCatacteristica(enemigo[i], "left");
    let eneY = obtenerCatacteristica(enemigo[i], "top");

    /*Recojo dichos datos y hago las comprobaciones necesarias
    para saber si se está colisionando o no.*/

    if (
      naveX + anchura / 2 < eneX + anchura &&
      naveX + anchura / 2 > eneX &&
      naveY + anchura / 2 < eneY + anchura &&
      naveY + anchura / 2 > eneY
    ) {
      laNave.setAttribute("src", "expl.png");

      setTimeout(muerteyDestruccion, 2000);

      function muerteyDestruccion() {
        alert(
          "Has sobrevivido: " +
            numero +
            " segundos. Con " +
            cantene +
            " enemigos y una puntuacion total de:" +
            puntuacion
        );
      }

      //setTimeout(laNave.style.visibility = "hidden", 2000);
      detectarColisiones.clearInterval();
    }

    if (
      disparoX + disparoAnchura / 2 < eneX + anchura &&
      disparoX + disparoAnchura / 2 > eneX &&
      disparoY + disparoAnchura / 2 < eneY + anchura &&
      disparoY + disparoAnchura / 2 > eneY
    ) {
      enemigo[i].setAttribute("src", "expl.png");
      setTimeout(muerte, 1000);

      function muerte(){
        enemigo[i].remove();
        puntuacion = puntuacion + 100;
      }
    }
  }
  
}

/////////////////EXTRAS////////////////////////////

/*Realizo un temporizador que es un texto que dentro tiene una variable, la cual se le va sumando 1 por cada segundo, haciendo un
reloj del tiempo que se esta jugando y tmbn creo para que se muestre la puntuacion*/
let numero = 0;
function temporizador() {
  let cont = document.createElement("h1");
  cont.textContent = numero;
  document.body.append(cont);

  //Subir el contador con un interval para que sume 1 por cada segundo, para saber cuanto tiempo has sobrevivido//

  setInterval(suma, 1000);
  let punt = document.createElement("h1");
  function suma() {
    numero = numero + 1;
    cont.textContent = numero;

    punt.textContent = puntuacion;
    document.body.append(punt);

    punt.style.right = "2px";
  }
}

//Micky herramienta
function obtenerCatacteristica(objeto, caracte) {
  let texto = getComputedStyle(objeto)[caracte];
  let dato = texto.substring(0, texto.indexOf("px"));
  return Number.parseInt(dato);
}
