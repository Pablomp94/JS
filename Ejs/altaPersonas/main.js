var arr = [],
  opc;

const pablo = new Persona("Pablo Morales", "18", "04/11/2004");

const david = new Persona("David asdasd", "19", "10/01/2004");

arr.push(pablo);
arr.push(david);

do {
  opc = prompt(
    "Intrduce la opción a realizar: 1.Crear 2.Eliminar 3.Buscar 4.Ordenar 5.Listar"
  );

  if (opc == 1) {
    crearPersona();
  }

  if (opc == 2) {
    eliminarPersona();
  }


  if(opc == 4){
    ordenar();
  }

  if (opc == 5) {
    verPersonas();
  }
} while (opc != 0);

function Persona(name, edad, nac) {
  (this.name = name),
  (this.edad = edad),
  (this.nac = nac);
}

function crearPersona() {
  var name = prompt("Introduce el nombre y apellido de la persona a añadir");
  var edad = prompt("Introduce la edad de la persona a añadir");
  var nac = prompt("Introduce la fecha de nacimiento de la persona a añadir");

  var princ = new Persona(name,edad, nac);

  arr.push(princ);
}

function eliminarPersona(){
  //Decir que para que se elimine una persona se tiene que ver la lista para saber la posición de dicha persona para eliminarla//

  //Preguntar por la persona a eliminar y eliminar con el delete arr[]//
}

function ordenar(){
  let f = prompt("Ordenarlo por: 1.Ascendente 2.Descendente 3.Invertir Listado");

  //Ver como se ordena//

  if(f == 1){
    arr.sort(function(a, b){return a - b});
  }

  if(f == 2){
    arr.sort(function(a, b){return b - a});
  }

  if(f == 3){
    arr.reverse();
  }
}

function verPersonas(){
  document.write("---------------------------------------<br>" );
  for(let i = 0; i < arr.length; i++){
    document.write(i," ");
    document.write(arr[i].name," ");
    document.write(arr[i].edad," ");
    document.write(arr[i].nac,"<br>"); 
  }
  document.write("---------------------------------------<br>" );

  /*Intentar que al mostrar la lista que se quede para siempre 
  y si es posible que cuando se vuelva a escribir que se sobreescriba*/
}


