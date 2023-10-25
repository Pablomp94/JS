var arr = [],
  opc;

const pablo = new Persona("Pablo Morales", "18", "04/11/2004");

const david = new Persona("David asdasd", "19", "10/01/2004");

arr.push(pablo);
arr.push(david);

do {
  opc = prompt(
    "Intrduce la opción a realizar: 1.Crear 2.Eliminar 3.Actualizar 4.Ordenar 5.Ver"
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

function eliminarPersona() {
  //Hacer un bucle que muestre los datos del array//
  for(let i = 0; i < arr.length; i++){
    document.write(i," ")
    document.write(arr[i].name," ");
    document.write(arr[i].edad," ");
    document.write(arr[i].nac,"<br>"); 
  }
  //Preguntar por la persona a eliminar y eliminar con el delete arr[]//
}

function ordenar(){
  let f = prompt("Ordenarlo por: 1.Ascendente 2.Descendente 3.Invertir array");

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
  for(let i = 0; i < arr.length; i++){
    document.write(i," ")
    document.write(arr[i].name," ");
    document.write(arr[i].edad," ");
    document.write(arr[i].nac,"<br>"); 
  }
}
