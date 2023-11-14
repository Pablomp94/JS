
function negrita(){
    let parrafo = document.getElementsByTagName("p");
    parrafo[0].style.fontWeight="bold";
    parrafo[(parrafo.length - 1)].style.fontWeight="bold";
}