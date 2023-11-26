

function juego(){
    nave();    
    movimientoNave();
    
    //let nombre = prompt("Introduce tu nombre:");
    //let cantene = prompt("Introduce la cantidad de enemigos");
    
    //enemigos(cantene);
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


function movimientoNave(){

    var x, y;
    x=900;
    y=500;

    document.addEventListener("keydown", function(event){
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
        if(event.key=="w" && event.key=="d"){
            x = x+5;
            y = y+5;
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

//PRUEBA
function lanzarMisil(){
    
    var x, y;
    x=900;
    y=500;
    y = y - 20;

    document.addEventListener("keydown", function(event){
        if(event.key == "a") {
            var imagen = document.createElement("img"); 
            imagen.setAttribute("src", "marciano.png");
            imagen.setAttribute("id", "disparo");  
            var main = document.querySelector("body"); 
            main.appendChild(imagen);
            document.getElementById("disparo").style.top=y + "px";
            document.getElementById("disparo").style.left=x + "px";
            
            do{
                document.getElementById("disparo").style.top=(y-5)+ "px";
            }while(y >= 0);
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
