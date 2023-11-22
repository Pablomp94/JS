movimiento();

function movimiento(){

    var x, y;
    x=0;
    y=0;

    document.addEventListener("keydown", function(event){
        if(event.key == "a") {
            x = x-10;
            document.getElementById("texto").style.left=x + "px";
            console.log("Hola");
        }
        if(event.key == "d") {
            x = x+10;
            document.getElementById("texto").style.left=x + "px";
            console.log("Adios");
        }
    })
}