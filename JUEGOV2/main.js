

function juego(){
    
   
    let nombre = prompt("Introduce tu nombre:");
    let cantene = prompt("Introduce la cantidad de enemigos");
    temporizador();
    enemigos(cantene);
    nave();    

}

function enemigos(cantene){
    for(i = 0; i < cantene; i++){
        var imagen = document.createElement("img"); 
        imagen.setAttribute("src", "marciano.png");
        imagen.setAttribute("id", "marciano"); 
        var main = document.querySelector("body"); 
        main.appendChild(imagen);    
    }
}

function nave(){
    var imagen = document.createElement("img"); 
    imagen.setAttribute("src", "nave.png");
    imagen.setAttribute("id", "nave");  
    var main = document.querySelector("body"); 
    main.appendChild(imagen); 
}

let teclas = new Set();

document.addEventListener("keydown", (event) => 
    teclas.add(event.key));
document.addEventListener("keyup",evento => teclas.delete(evento.key))

setInterval(movimientoNave, 20);
var x, y;
x=650;
y=500;
function movimientoNave(){

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
            


            function movimientoMisil(){
                document.getElementById("disparo").style.top=(ydis = ydis-5)+ "px";
            }
            setInterval(movimientoMisil, 20);
        }


        if(teclas.has("a")) {
            x = x-15;
            document.getElementById("nave").style.left=x + "px";
            document.getElementById("nave").style.transform;
        }
        if(teclas.has("d")) {
            x = x+15;
            document.getElementById("nave").style.left=x + "px";
        }
        if(teclas.has("w")) {
            y = y-15;
            document.getElementById("nave").style.top=y + "px";
        }
        if(teclas.has("s")) {
            y = y+15;
            document.getElementById("nave").style.top=y + "px";
        }
    }


function detectarColisiones(laNave,naveX,naveY,enemigo,eneX,eneY){
    if( (naveX < eneX + enemigo.width) &&
        (naveX + laNave.width > eneX) &&
        (naveY < eneY + enemigo.height) &&
        (laNave.height + naveY > eneY)){
            return true;
        }
        return false;
}

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
