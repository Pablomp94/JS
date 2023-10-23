var arr;

function Persona(name, age, dni){
    
    this.nombre = name,

    this.edad = age,

    this.id = dni;
}

const pablo = new Persona("Pablo", 18, "123456789A");

const david = new Persona("David",19,"9776127389D");

arr = [];

arr.push(pablo);
arr.push(david);

console.log(pablo);