let imagenes = [];

window.addEventListener("load", function () {
  let main = document.body;
  let contenedor = document.createElement("div");
  let numImagenes = prompt("Introduce el numero de fotos que quieres:");
  let botonIzq = document.createElement("button");
  let botonDer = document.createElement("button");

  botonIzq.textContent = "<";
  botonDer.textContent = ">";

  botonIzq.setAttribute("id", "botonI");
  botonDer.setAttribute("id", "botonD");

  contenedor.append(botonIzq);
  contenedor.append(botonDer);

  let imagenMostrada = document.createElement("img");
  imagenMostrada.setAttribute("class", "imagen-inicial");

  main.appendChild(contenedor);
  contenedor.appendChild(imagenMostrada);

  fetch("https://randomuser.me/api/?results=" + numImagenes)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Los datos no llegaron bien");
      }
    })
    .then((json) => {
      for (let miObj of json.results) {
        let contenido = miObj.picture["large"];

        imagenes.push(contenido);
      }

      let posicion = 0;
      let cantidad = imagenes.length;

      setInterval(mostrarImagen, 20);

      console.log(cantidad);

      function mostrarImagen() {
        imagenMostrada.setAttribute("src", imagenes[posicion]);
      }

      botonIzq.addEventListener("click", function (ev) {
        ev.stopPropagation();

        bajar();
      });

      botonDer.addEventListener("click", function (ev) {
        ev.stopPropagation();

        subir();
      });

      imagenMostrada.addEventListener("click", verFoto);

      function verFoto(ev) {
        ev.stopPropagation();
        let nodo = ev.target;
        let contenido = nodo.getAttribute("src");
        let nuevimg = document.createElement("img");

        nuevimg.setAttribute("src", contenido);
        nuevimg.setAttribute("class", "ampliada");
        nuevimg.setAttribute("id", "nueva");
        main.appendChild(nuevimg);

        nuevimg.addEventListener("click", function (ev) {
          ev.stopPropagation();
        });

        nuevimg.addEventListener("contextmenu", function (ev) {
          ev.preventDefault();
        });

        nuevimg.addEventListener("click", eliminar);

        setTimeout(eliminar, 2000);
      }

      function eliminar() {
        try {
          document.getElementById("nueva").remove();
        } catch {}
      }

      window.addEventListener("contextmenu", function (ev) {
        ev.preventDefault();
      });

      window.addEventListener("click", function () {
        alert("Haga click en cualquier foto");
      });

      let dial1 = document.getElementById("c1");
      let dial2 = document.getElementById("c2");
      let dial = document.getElementById("context");

      dial.addEventListener("click", function (ev) {
        ev.stopPropagation();
      });

      imagenMostrada.addEventListener("contextmenu", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();

        dial.style.left = ev.pageX + "px";
        dial.style.top = ev.pageY + "px";

        dial.setAttribute("open", "open");

        botonIzq.style.visibility = "hidden";
        botonDer.style.visibility = "hidden";
      });

      dial2.addEventListener("click", (ev) => {
        ev.stopPropagation();

        bajar();

        dial.removeAttribute("open");

        botonIzq.style.visibility = "visible";
        botonDer.style.visibility = "visible";
      });

      dial1.addEventListener("click", (ev) => {
        ev.stopPropagation();

        subir();

        dial.removeAttribute("open");

        botonIzq.style.visibility = "visible";
        botonDer.style.visibility = "visible";
      });

      function subir() {
        if (posicion < cantidad - 1) {
          posicion++;
        }
      }

      function bajar() {
        if (posicion > 0) {
          posicion--;
        }
      }
    });
});
