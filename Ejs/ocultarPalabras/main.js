const texto = prompt("Introduce un texto:");

prompt(texto);

const palabras = texto.split(" ");

do {
  var numPalabras = parseInt(prompt("¿Cuántas palabras quieres ocultar?"));

  if (isNaN(numPalabras) || numPalabras <= 0 || numPalabras > palabras.length) {
    alert("El número de palabras a ocultar no es válido.");
  }
} while (
  isNaN(numPalabras) ||
  numPalabras <= 0 ||
  numPalabras > palabras.length
);

//Generar números aleatorios para ocultar palabras
const oculto = [];
while (oculto.length < numPalabras) {
  const indiceAleatorio = Math.floor(Math.random() * palabras.length);
  if (oculto.indexOf(indiceAleatorio) === -1) {
    oculto.push(indiceAleatorio);
  }
}

// Crear una versión del texto con las palabras ocultas
const textoOculto = palabras.map((palabra, index) => {
    
    if (oculto.includes(index)) {
        return "*".repeat(palabra.length);
    }else{
        return palabra;
    }
  })
  .join(" ");
//Mostrar  texto oculto
alert("Texto con palabras ocultas:\n" + textoOculto);

//Solicitar al usuario que introduzca las palabras ocultas en orden

let resultado = "Resultado:\n";
let todasCorrectas = true;

oculto.sort(function(a, b) {
    return a - b;
  });

var respuestas = [];
for (let i = 0; i < numPalabras; i++) {
  const respuesta = prompt(`Introduce la palabra ${i + 1}:`);
  respuestas.push(respuesta);

  const compr = palabras[oculto[i]];
    if (respuestas[i] === compr) {
      resultado += `Palabra ${i + 1}: Correcta\n`;
    } else {
      resultado += `Palabra ${i + 1}: Incorrecta (Debería ser: ${compr})\n`;
      todasCorrectas = false;
    }
}

if (todasCorrectas) {
  resultado += "¡Todas las palabras son correctas!";
} else {
  resultado += "No todas las palabras son correctas.";
}

alert(resultado);
