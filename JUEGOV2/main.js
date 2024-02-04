
let cantene;

function juego() {
  let nombre = prompt("Introduce tu nombre:");
  let canten = prompt("Introduce la cantidad de enemigos");
  cantene = parseInt(canten);
  temporizador();
  enemigos(cantene);
  nave();
  /*Realizo un setInterval que lo que hace es que el metodo que hace que se mueva 
    el enemigo en las coordenadas indicadas y
    se realize cada 20ms, haciendo que cada ese tiempo se mueva*/

  setInterval(detectarColisiones, 20);
}

////////HERRAMIENTAS NECESARIAS////////////

//RECOJO LOS PARAMETROS DEL TAMAÑO DE LA PANTALLA DEL NAVEGADOR//

let tampantx = screen.width - 143;
let tampanty = screen.height - 320;

/////////////////NAVE////////////////////////////

//Creo en tiempo de ejecucion la nave//
function nave() {
  var imagen = document.createElement("img");
  imagen.setAttribute("src", "nave.png");
  imagen.setAttribute("id", "nave");
  document.body.appendChild(imagen);
}

//Este es el movimiento de la nave, la cual está formada por un evento que recoje la pulsacion de teclas//
let teclas = new Set();
//Creo el evento//
document.addEventListener("keydown", (event) => teclas.add(event.key));
document.addEventListener("keyup", (evento) => teclas.delete(evento.key));

var x, y;
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



setInterval(disparoMisil, 20);
let canShoot = true;
function disparoMisil(){
    /*Recoje la pulsacion del espacio y crea en tiempo de ejecucion la imagen del proyectil
        en la posicion superior centrar de la nave*/
        if (teclas.has(" ")) {
          xdis = x + 50;
          ydis = y - 20;
      
        // ... Resto de la función
      
        if(canShoot == true){
          var imagen = document.createElement("img");
          imagen.setAttribute("src", "marciano.png");
          imagen.setAttribute("id", "disparo");
          document.body.appendChild(imagen);
          document.getElementById("disparo").style.top = ydis + "px";
          document.getElementById("disparo").style.left = xdis + "px";
        }else{
          console.log("Recargando");
        }

        canShoot = false;
        setTimeout(canShoot = true, 2000);
        
          /*Esta funcion coje el misil y le resta a la posicion vertical, lo que hace que suba un poco*/
      
          function movimientoMisil() {
            document.getElementById("disparo").style.top = (ydis = ydis - 5) + "px";
          }
          /*Realizo un setInterval que lo que hace es que el metodo anterior que hace que suba un poco el misil
                  se realize cada 20ms, haciendo que cada ese tiempo se suba hasta llegar arriba*/
          do{
          setInterval(movimientoMisil, 20);
          }while(document.getElementById("disparo").style.top <= 0);
          setTimeout(2000);
        }
      
        /**let canShoot = true
      
      const handleShoot = (cooldown: number) => {
        if (!canShoot) return
        else {
          canShoot = false
          setTimeout(() => { canShoot = true }, cooldown)
        }
      
        // ... Resto de la función
      } */
}







/////////////////ENEMIGO////////////////////////////

/*Creo en tiempo de ejecucion la cantidad de enemigos que he pedido antes*/
function enemigos() {
  for (i = 0; i < cantene; i++) {
    var imagen = document.createElement("img");
    imagen.setAttribute("src", "marciano.png");
    imagen.setAttribute("id", "marciano");
    imagen.setAttribute("class", "marciano");
    document.body.appendChild(imagen);
  }
}

//Esta es la funcion que hace que se muevan de forma aleatoria los enemigos.
//(provisional)Los enemigos aparecen de fuera de la pantalla en un punto y se van moviendo aleatoriamente hacia dentro de la pantalla.
//(otra opcion)Aparecen arriba, dentro de la pantalla, y se mueven aleatoriamente
//Si tocan el borde de la pantalla que no se sobrepase
//let posx; = 400;
//let posy; = 100;
let uno, dos;
function movimientoEnemigo() {
   uno = Math.floor(Math.random() * 2);
   dos = Math.floor(Math.random() * 2);
}
setInterval(movimientoEnemigo, 650);
setInterval(mov, 20);
function mov() {
  let ex, ey;

  if (uno == 0 && dos == 0) {
    ex = -10;
    ey = -10;

    
      for (let i = 0; i < cantene; i++) {
        
          posx = document.getElementsByClassName("marciano")[i].style.left;
      
        if (posx + ex >= 0) {
          document.getElementsByClassName("marciano")[i].style.top =(posx + ex) + "px";
        }
          posy = document.getElementsByClassName("marciano")[i].style.top;
        if (posy + ey >= 0) {
          document.getElementsByClassName("marciano")[i].style.top =(posy + ey) + "px";
        }
      }
    }
  

  if (uno == 1 && dos == 0) {
    ex = 10;
    ey = -10;

    for (let i = 0; i < cantene; i++) {
      posx = document.getElementsByClassName("marciano")[i].style.left;
      if (posx + ex <= tampantx) {
        //document.getElementsByClassName("marciano")[i].style.left = (posx = posx + ex) + "px";
        (posx = posx + ex) + "px";
      }
      posy = document.getElementsByClassName("marciano")[i].style.top;
        if (posy + ey >= 0) {
            //document.getElementsByClassName("marciano")[i].style.top = (posy = posy + ey) + "px";
            (posy = posy + ey) + "px";
        }
    }
        
  }

  if (uno == 0 && dos == 1) {
    ex = -10;
    ey = 10;

    for(i = 0; i< cantene; i++){
      posx = document.getElementsByClassName("marciano")[i].style.left;
    if (posx + ex >= 0) {
      //document.getElementsByClassName("marciano")[i].style.left =
        (posx = posx + ex) + "px";
    }
    posy = document.getElementsByClassName("marciano")[i].style.top;
    if (posy + ey >= tampanty) {
      //document.getElementsByClassName("marciano")[i].style.top = (posy = posy + ey) + "px";
      (posy = posy + ey) + "px";
    }
    }
  }

  if (uno == 1 && dos == 1) {
    ex = 10;
    ey = 10;

    for(i = 0; i< cantene; i++){
      posx = document.getElementsByClassName("marciano")[i].style.left;
    if (posx + ex <= tampantx) {
      
      //document.getElementsByClassName("marciano")[i].style.left =
        (posx = posx + ex) + "px";
    }
    posy = document.getElementsByClassName("marciano")[i].style.top;
    if (posy + ey <= tampanty) {
      //document.getElementsByClassName("marciano")[i].style.top = 
      (posy = posy + ey) + "px";
    }
    }
  }
}

/////////////////COLISIONES////////////////////////////

/*En este codigo realizo la deteccion de colisiones*/

function detectarColisiones() {
  /*Recojo los datos necesarios, en los que se va a crear el "perimetro" 
    de las colisiones */

  let laNave = document.getElementById("nave").style;

  let naveX = parseInt(laNave.left) - 5;
  let naveY = parseInt(laNave.top) - 5;

  let enemigo = document.getElementById("marciano").style;

  let eneX = parseInt(enemigo.left);
  let eneY = parseInt(enemigo.top);

  /*Recojo dichos datos y hago las comprobaciones necesarias
    para saber si se está colisionando o no.*/

  if (
    naveX < eneX + enemigo.width &&
    laNave.left + laNave.width > eneX &&
    naveY < eneY + enemigo.height &&
    laNave.height + laNave.top > eneY
  ) {
    console.log("Colision");
  } else {
  }
}

/////////////////EXTRAS////////////////////////////

/*Realizo en temporizador que es un texto que dentro tiene una variable, la cual se le va sumando 1 por cada segundo, haciendo un
reloj del tiempo que se esta jugando*/
function temporizador() {
  let numero = 0;
  let cont = document.createElement("h1");
  cont.textContent = numero;
  document.body.append(cont);

  //Subir el contador con un interval para que sume 1 por cada segundo, para saber cuanto tiempo has sobrevivido//

  setInterval(suma, 1000);

  function suma() {
    numero = numero + 1;
    cont.textContent = numero;
  }
}
