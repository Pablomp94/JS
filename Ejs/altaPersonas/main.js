var arr,opc = 5;
arr = [];

const pablo = new Persona("Pablo", "Morales", "2004");

const david = new Persona("David","asdasd","2003");

arr.push(pablo);
arr.push(david);


opc = prompt("Intrduce la opción a realizar: 1.Crear 2.Eliminar 3.Actualizar 4.Ver");

if(opc == 1){
    crear();
}



function Persona(name, sname, nac){
    
    this.nombre = name,

    this.apellido = sname,

    this.fecha = nac;

    crear();
}

function crear(){
    var princ = prompt("Introduce el titulo del contacto");
    var name = prompt("Introduce el nombre de la persona a añadir");
    var sname = prompt("Introduce el apellido de la persona a añadir");
    var nac = prompt("Introduce la fecha de nacimiento de la persona a añadir");

    princ = new Persona(name,sname,nac);

    arr.push(princ);
}