var arr = [],
  opc;

const pablo = new Persona("Pablo Morales", "18", "04/11/2004");

const david = new Persona("David asdasd", "19", "10/01/2004");

arr.push(pablo);
arr.push(david);

do {
  opc = prompt(
    "Intrduce la opción a realizar: 1.Crear 2.Eliminar 3.Buscar por Nombre 4.Ordenar 5.Listar 6.Imprimir 0.Salir"
  );

  if (opc == 1) {
    crearPersona();
  }

  if (opc == 2) {
    eliminarPersona();
  }

  if (opc == 3) {
    buscarNombre();
  }

  if (opc == 4) {
    ordenar();
  }

  if (opc == 5) {
    verPersonas();
  }
  if(opc == 6){
    imprimir();
  }
} while (opc != 0);

function Persona(name, edad, nac) {
  (this.name = name), (this.edad = edad), (this.nac = nac);
}

function crearPersona() {
  var name = prompt("Introduce el nombre y apellido de la persona a añadir");
  var edad = prompt("Introduce la edad de la persona a añadir");
  var nac = prompt("Introduce la fecha de nacimiento de la persona a añadir");

  var princ = new Persona(name, edad, nac);

  arr.push(princ);
}

function eliminarPersona() {
  //Decir que para que se elimine una persona se tiene que ver la lista para saber la posición de dicha persona para eliminarla//
  var num = prompt(
    "Para eliminar debe de visualizar la lista y obtener el id de la persona"
  );
  //Preguntar por la persona a eliminar y eliminar con el delete arr[]//
    num = prompt("Introduce el id de la persona a eliminar:");

    arr.splice(num, 1);
}

function ordenar() {
  let f = prompt(
    "Ordenarlo por: 1.Ascendente 2.Descendente 3.Invertir Listado"
  );

  //Ver como se ordena//

  if (f == 1) {
    arr.sort(function (a, b) {
      return a - b;
    });
  }

  if (f == 2) {
    arr.sort(function (a, b) {
      return b - a;
    });
  }

  if (f == 3) {
    arr.reverse();
  }
}

function verPersonas() {
  document.write("---------------------------------------<br>");
  for (let i = 0; i < arr.length; i++) {
    document.write(i, " ");
    document.write(arr[i].name, " ");
    document.write(arr[i].edad, " ");
    document.write(arr[i].nac, "<br>");
  }
  document.write("---------------------------------------<br>");
}

function buscarNombre() {
  var nom = prompt("Introduce el nombre a buscar");
  var bol;

  for (let i = 0; i < arr.length; i++) {
    
    bol = ((arr[i].name).find(nom == arr[i].name));

    if(bol == true) {
      document.write(arr[i].name, " ");
      document.write(arr[i].edad, " ");
      document.write(arr[i].nac, "<br>");
    } 
  }
}

function imprimir(){
  
    var ventana = window.open('', 'PRINT', 'height=400,width=600');
    ventana.document.write(verPersonas().innerHTML);
    ventana.document.close();
    ventana.focus();
    ventana.print();
    ventana.close();
    return true;
}