

function sumar(){
    let parrafo = document.getElementsByTagName("h1")[0].textContent;
    let suma = parseInt(parrafo) + 1;
    document.getElementsByTagName("h1")[0].innerHTML = suma;
    console.log(parrafo);
}