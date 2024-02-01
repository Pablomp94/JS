/*Realizo en temporizador que es un texto que dentro tiene una variable, la cual se le va sumando 1 por cada segundo, haciendo un
reloj del tiempo que se esta jugando*/

temporizador();

function temporizador(){
    let numero = 0;
    let cont = document.createElement("h1");
    cont.textContent=numero;
    document.body.append(cont);

   
    //Subir el contador con un interval para que sume 1 por cada segundo, para saber cuanto tiempo has sobrevivido//

    
    setInterval(suma, 1000);

    function suma(){
        numero = numero + 1;
        cont.textContent=numero;   
    }
}