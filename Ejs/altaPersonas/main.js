var arr = [],opc;


const pablo = new Persona("Pablo", "Morales", "2004");

const david = new Persona("David", "asdasd", "2003");

arr.push(pablo);
arr.push(david);

do {
  opc = prompt(
    "Intrduce la opción a realizar: 1.Crear 2.Eliminar 3.Actualizar 4.Ver"
  );

  if(opc == 1) {
    crearPersona();
  }


  if(opc == 4){
    console.log(arr);
  }
} while (opc != 0);

function Persona(name, sname, nac) {
  (this.name = name), (this.sname = sname), (this.nac = nac);
}

function crearPersona() {
    
    var name = prompt("Introduce el nombre de la persona a añadir");
    var sname = prompt("Introduce el apellido de la persona a añadir");
    var nac = prompt("Introduce la fecha de nacimiento de la persona a añadir");

    var princ = new Persona(name, sname, nac);

    arr.push(princ);
}

function eliminarPersona(){
   //Hacer bucle for each del array, ir mostrandolo para elejir posición del array para eliminar contacto//
}