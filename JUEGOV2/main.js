

function juego(){
    //let nombre = prompt("Introduce tu nombre:");
    //let cantene = prompt("Introduce la cantidad de enemigos");
    nave();
    //enemigos(cantene);
    movimientoNave();
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


function movimientoNave(x,y){

    var x, y;
    x=900;
    y=500;
    let letras = new Set();

    document.addEventListener("keyup",evento => letras.delete(evento.key))

    document.addEventListener("keydown", function(event){
        letras.add(event.key);

        if(event.key == "a") {
            x = x-10;
            document.getElementById("nave").style.left=x + "px";
        }
        if(event.key == "d") {
            x = x+10;
            document.getElementById("nave").style.left=x + "px";
        }
        if(event.key == "w") {
            y = y-10;
            document.getElementById("nave").style.top=y + "px";
        }
        if(event.key == "s") {
            y = y+10;
            document.getElementById("nave").style.top=y + "px";
        }
        if(letras.has("w") && letras.has("d")){
            x = x+5;
            y = y-5;
            document.getElementById("nave").style.top=y + "px";
            document.getElementById("nave").style.left=x + "px";
        }
        if(event.key=="w" && event.key=="a"){
            x = x-5;
            y = y+5;
            document.getElementById("nave").style.top=y + "px";
            document.getElementById("nave").style.left=x + "px";
        }
        if(event.key=="s" && event.key=="a"){
            x = x-5;
            y = y-5;
            document.getElementById("nave").style.top=y + "px";
            document.getElementById("nave").style.left=x + "px";
        }
        if(event.key=="s" && event.key=="d"){
            x = x+5;
            y = y-5;
            document.getElementById("nave").style.top=y + "px";
            document.getElementById("nave").style.left=x + "px";
        }
    })
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
