window.addEventListener("load", function(){
    let der = document.getElementById("derecho");
let cubos = der.getElementsByTagName("DIV");
for(let cubo of cubos){
    cubo.addEventListener("click", muevemeIzq);
    cubo.addEventListener("contextmenu", menu);
}

function muevemeIzq(ev){
    nodo = ev.target;
    if(nodo.nodeName=="H1"){
        nodo=nodo.parentNode;
    }

    if(nodo.previousElementSibling == null){
        ultnodo = der.lastElementChild;

        let xprim = nodo.offsetLeft;
        let yprim = nodo.offsetTop;
        let xseg = ultnodo.offsetLeft;
        let yseg = ultnodo.offsetTop;

        nodo.style.left=xseg+"px";
        nodo.style.top=yseg+"px";

        ultnodo.style.left=xprim+"px";
        ultnodo.style.top=yprim+"px";


        //Para intercambiar en el DOM hay que quitar el primero y ponerlo al final de los hijos y el ultimo al primero
        padre = nodo.parentNode;
        ultimo = nodo.parentNode.lastElementChild;
        uno = padre.removeChild(nodo);
        padre.insertBefore(uno, ultimo);
        dos = padre.removeChild(ultimo);
        padre.insertBefore(dos, nodo.nextSibling);
    }else{

        nodoPrev = nodo.previousElementSibling; 
        
        let xprim = nodo.offsetLeft;
        let yprim = nodo.offsetTop;
        let xseg = nodoPrev.offsetLeft;
        let yseg = nodoPrev.offsetTop;

        nodo.style.left=xseg+"px";
        nodo.style.top=yseg+"px";

        nodoPrev.style.left=xprim+"px";
        nodoPrev.style.top=yprim+"px";


        //Para intercambiar en el DOM hay que quitar y ponerlo antes del hermano del nodoPrevio
        padre = nodo.parentNode;
        contenido = padre.removeChild(nodo);
        padre.insertBefore(contenido, nodoPrev);


    }

}


function muevemeDere(ev){
    nodo = ev.target;
    if(nodo.nodeName=="H1"){
        nodo=nodo.parentNode;
    }

    if(nodo.nextElementSibling == null){
        princnodo = der.firstElementChild;

        let xprim = nodo.offsetLeft;
        let yprim = nodo.offsetTop;
        let xseg = princnodo.offsetLeft;
        let yseg = princnodo.offsetTop;

        nodo.style.left=xseg+"px";
        nodo.style.top=yseg+"px";

        princnodo.style.left=xprim+"px";
        princnodo.style.top=yprim+"px";


        //Para intercambiar en el DOM hay que quitar el primero y ponerlo al final de los hijos y el ultimo al primero
        padre = nodo.parentNode;
        primero = nodo.parentNode.firstElementChild;
        ultimo = padre.lastElementChild;
        dos = padre.removeChild(primero);

        padre.insertBefore(uno, ultimo);
        
        uno = padre.removeChild(nodo);
        
        padre.insertBefore(dos, primero);
    }else{

        nodoSig = nodo.nextElementSibling; 
        
        let xprim = nodo.offsetLeft;
        let yprim = nodo.offsetTop;
        let xseg = nodoSig.offsetLeft;
        let yseg = nodoSig.offsetTop;

        nodo.style.left=xseg+"px";
        nodo.style.top=yseg+"px";

        nodoSig.style.left=xprim+"px";
        nodoSig.style.top=yprim+"px";


        //Para intercambiar en el DOM hay que quitar y ponerlo antes del hermano del nodoPrevio
        padre = nodo.parentNode;
        contenido = padre.removeChild(nodo.nextElementSibling);
        padre.insertBefore(contenido, nodo);
    }

}


/*Crear un menu al darle click derecho encima de uno de los divs de dentro del div derecho,
 dentro de este menu iran 2 opciones izquierda y derecha eligiendo asi hacia donde se movera el div*/

function menu(ev){
    ev.preventDefault();
    dial=document.getElementById("miDi");
    
    dial.style.position="absolute";
    dial.style.margin=0;
    dial.style.left=ev.pageX + "px";
    dial.style.top=ev.pageY + "px";

    dial.setAttribute("open", "open");

    //Hay que quitar el evento para que no se apile//
    //removeEventListener("click", muevemeIzq);
    document.getElementById("left").addEventListener("click", muevemeIzq(ev.target, event));
    document.getElementById("right").addEventListener("click", muevemeDere(ev.target, event));
} 
})

