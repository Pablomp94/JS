
//let nombre = prompt("Introduce tu nombre:");
//let cantene = prompt("Introduce la cantidad de enemigos");






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

  
  
  






function detectarColisiones(laNave,naveX,naveY,enemigo,eneX,eneY){
    if( (naveX < eneX + enemigo.width) &&
        (naveX + laNave.width > eneX) &&
        (naveY < eneY + enemigo.height) &&
        (laNave.height + naveY > eneY)){
            return true;
        }
        return false;
}
