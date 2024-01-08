let der = document.getElementById("derecho");
let cubos = der.getElementsByTagName("DIV");
for(let cubo of cubos){
    cubo.addEventListener("click", mueveme);
    cubo.addEventListener("contextmenu", menu);
}

function mueveme(ev){
    nodo = ev.target;
    if(nodo.nodeName=="H1"){
        nodo=nodo.parentNode;
    }

    if(nodo.previousElementSibling == null){
        ultnodo = der.lastElementChild;

        xprim = nodo.offsetLeft;
        yprim = nodo.offsetTop;
        xseg = ultnodo.offsetLeft;
        yseg = ultnodo.offsetTop;

        nodo.style.left=xseg+"px";
        nodo.style.top=yseg+"px";

        ultnodo.style.left=xprim+"px";
        ultnodo.style.top=yprim+"px";
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

/*Crear un menu al darle click derecho encima de uno de los divs de dentro del div derecho,
 dentro de este menu iran 2 opciones izquierda y derecha eligiendo asi hacia donde se movera el div*/

function menu(ev){
    ev.preventDefault();
}