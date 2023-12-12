function juego(){  
    let nombre = prompt("Introduce tu nombre:");
    let cantene = prompt("Introduce la cantidad de enemigos");
    temporizador();
    enemigos(cantene);
    nave();    
    /*Realizo un setInterval que lo que hace es que el metodo que hace que se mueva 
    el enemigo en las coordenadas indicadas y
    se realize cada 20ms, haciendo que cada ese tiempo se mueva*/
    setInterval(movimientoEnemigo, 2000);
    setInterval(detectarColisiones, 20);   
}



/////////////////NAVE////////////////////////////

//Creo en tiempo de ejecucion la nave//
function nave(){
    var imagen = document.createElement("img"); 
    imagen.setAttribute("src", "nave.png");
    imagen.setAttribute("id", "nave");  
    var main = document.querySelector("body"); 
    main.appendChild(imagen); 
}


//Este es el movimiento de la nave, la cual está formada por un evento que recoje la pulsacion de teclas//
let teclas = new Set();
//Creo el evento//
document.addEventListener("keydown", (event) => 
teclas.add(event.key));
document.addEventListener("keyup",evento => teclas.delete(evento.key))
//LLamo a la funcion del movimiento de la nave y compruebe cada 20ms si se esta pulsando una tecla//
setInterval(movimientoNave, 20);
var x, y;
let posnave = document.getElementById("nave");
x=650;
y=500;



    /*Funcion del movimiento de la nave, recoje las teclas wasd y con una comprobacion "if" miro que tecla se ha pulsado,
    tambien recoje el espacio para disparar*/
    function movimientoNave(){
        /*Recoje la pulsacion del espacio y crea en tiempo de ejecucion la imagen del proyectil
        en la posicion superior centrar de la nave*/ 
        if(teclas.has(" ")) {

            xdis = x+50;
            ydis = y-20;

            var imagen = document.createElement("img"); 
            imagen.setAttribute("src", "marciano.png");
            imagen.setAttribute("id", "disparo");  
            var main = document.querySelector("body"); 
            main.appendChild(imagen);
            document.getElementById("disparo").style.top=ydis + "px";
            document.getElementById("disparo").style.left=xdis + "px";
            

            /*Esta funcion coje el misil y le resta a la posicion vertical, lo que hace que suba un poco*/

            function movimientoMisil(){
                document.getElementById("disparo").style.top=(ydis = ydis-5)+ "px";
            }
            /*Realizo un setInterval que lo que hace es que el metodo anterior que hace que suba un poco el misil
            se realize cada 20ms, haciendo que cada ese tiempo se suba hasta llegar arriba*/
            setInterval(movimientoMisil, 20);
        }

        /*Aqui es donde recojo la tecla pulsada y si coincide le suma o le resta a la posicion x o y de la nave*/

        if(teclas.has("a") && (x>=5)) {
            x = x-15;
            document.getElementById("nave").style.left=x + "px";
        }
        if(teclas.has("d") && (x<=1110)) {
            x = x+15;
            document.getElementById("nave").style.left=x + "px";
        }
        if(teclas.has("w") && (y>=8)) {
            y = y-15;
            document.getElementById("nave").style.top=y + "px";
        }
        if(teclas.has("s") && (y<=550)) {
            y = y+15;
            document.getElementById("nave").style.top=y + "px";
        }
    }






/////////////////ENEMIGO////////////////////////////




/*Creo en tiempo de ejecucion la cantidad de enemigos que he pedido antes*/
function enemigos(cantene){
    for(i = 0; i < cantene; i++){
        var imagen = document.createElement("img"); 
        imagen.setAttribute("src", "marciano.png");
        imagen.setAttribute("id", "marciano"); 
        imagen.setAttribute("class", "marciano");  
        var main = document.querySelector("body"); 
        main.appendChild(imagen);    
    }
}


//Esta es la funcion que hace que se muevan de forma aleatoria los enemigos.
//(provisional)Los enemigos aparecen de fuera de la pantalla en un punto y se van moviendo aleatoriamente hacia dentro de la pantalla.
//(otra opcion)Aparecen arriba, dentro de la pantalla, y se mueven aleatoriamente
//Si tocan el borde de la pantalla que no se sobrepase
var posx = 500, posy = 200;
function movimientoEnemigo(cantene){
    var uno, dos,ex,ey;
    uno = Math.floor(Math.random()* 2);
    dos = Math.floor(Math.random()* 2);

    console.log(uno);
    console.log(dos);
    if(uno == 0){
        ex = -10;
    }
    if(uno == 1){
        ex = 10;
    }
    if(dos == 0){
        ey = -10; 
    }
    if(dos == 1){
        ey = 10;
    }
    
    
    function mov(){
            do{
                document.getElementById("marciano").style.top=(posy = (posy + ey)) + "px";
            }while((posy>=8) && (posy<=550));
    
            do{
                document.getElementById("marciano").style.left=(posx = (posx + ex)) + "px";
            }while((posx<=1110) && (posx>=5));
    
    } 
    setInterval(mov,20);
}



/////////////////COLISIONES////////////////////////////

/*En este codigo realizo la deteccion de colisiones*/

function detectarColisiones(){
    /*Recojo los datos necesarios, en los que se va a crear el "perimetro" 
    de las colisiones */
    
    let laNave = document.getElementById("nave").style;
    let naveX = parseInt(laNave.left);
    let naveY = parseInt(laNave.top);
    console.log(naveX);
    console.log(naveY);

    let enemigo = document.getElementById("marciano").style;
    let eneX = parseInt(enemigo.left);
    let eneY = parseInt(enemigo.top);

    /*Recojo dichos datos y hago las comprobaciones necesarias
    para saber si se está colisionando o no. */
    if( (naveX < eneX + enemigo.width) &&
        (naveX + laNave.width > eneX) &&
        (naveY < eneY + enemigo.height) &&
        (laNave.height + naveY > eneY)){
            return true,
            console.log("Colision");
        }
        return false;
        
}

/////////////////EXTRAS////////////////////////////

/*Realizo en temporizador que es un texto que dentro tiene una variable, la cual se le va sumando 1 por cada segundo, haciendo un
reloj del tiempo que se esta jugando*/
function temporizador(){
    let numero = 0;
    var cont = document.createElement("h1");
    cont.textContent=numero;
    body.append(cont);

   
    //Subir el contador con un interval para que sume 1 por cada segundo, para saber cuanto tiempo has sobrevivido//

    
    setInterval(suma, 1000);

    function suma(){
        numero = numero + 1;
        cont.textContent=numero;   
    }
}



