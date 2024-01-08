let der = document.getElementById("derecho");
let cubos = der.getElementsByTagName("DIV");
for(let cubo of cubos){
    cubo.addEventListener("click", mueveme);
}

function mueveme(ev){
    nodo = ev.target;
    if(nodo.nodeName=="H1"){
        nodo=nodo.parentNode;
    }

    if(nodo.previousElementSibling == null){
        console.log("hola");
    }else{
        nodoPrev = nodo.previousElementSibling;
        
        xprim = nodo.offsetLeft;
        yprim = nodo.offsetTop;
        xseg = nodoPrev.offsetLeft;
        yseg = nodoPrev.offsetTop;

        nodo.style.left=xseg+"px";
        nodo.style.top=yseg+"px";

        nodoPrev.style.left=xprim+"px";
        nodoPrev.style.top=yprim+"px";


        //CAMBIAR EL ORDEN DEL HTML DE LOS H1//

    }

}