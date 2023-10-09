let opcion;
let texto;
let clave;
let letra;
let cifra;

opcion = prompt("1.Cifrar y 2.Para descifrar");

if (opcion == 1) {
  texto = prompt("Escribe el texto a cifrar");

  do {
    clave = prompt("Escribe un numero entero para la clave de cifrado");

    if (isNaN(parseInt(clave))) {
      alert("Para la clave debe de tener un numero valido");
    }
  } while (isNaN(parseInt(clave)));

  clave = parseInt(clave);

  for (letra of texto) {
    cifra = letra.charCodeAt(letra) + clave;
    document.write(String.fromCharCode(cifra));
  }
}

if (opcion == 2) {
  texto = prompt("Escribe el texto a descifrar");

  do {
    clave = prompt("Escribe un numero entero para la clave de descifrado");

    if (isNaN(parseInt(clave))) {
      alert("Para la clave debe de tener un numero valido");
    }
  } while (isNaN(parseInt(clave)));

  clave = parseInt(clave);

  for (letra of texto) {
    cifra = letra.charCodeAt(letra) - clave;
    document.write(String.fromCharCode(cifra));
  }
}
