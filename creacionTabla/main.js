window.addEventListener("load", function() {

    let main = document.querySelector("body");

    let tab = document.createElement("table");
    main.appendChild(tab),
    tab.setAttribute("id", "tabla1");

    let fila = document.createElement("tr");
    tab.appendChild(fila);
    let columna = document.createElement("th");
    fila.appendChild(columna);
    
});