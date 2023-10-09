

const loteria = 50;
const primitiva = [];
let a,b,c;
let x, y,z;

for(let i = 0; i<loteria; i++){
    primitiva[i] = i+1; 
}

console.log(primitiva);


a = prompt("Elije el numero 1 de tu lotería, del 1 al 50");
b = prompt("Elije el numero 2 de tu lotería, del 1 al 50");
c = prompt("Elije el numero 3 de tu loteria, del 1 al 50");

for(i = 0; i<loteria; i++){
    let uno, dos;
    uno = parseInt(Math.random() * primitiva.length);
    dos = parseInt(Math.random() * primitiva.length);
    
    [primitiva[uno], primitiva[dos]] = [primitiva[dos], primitiva[uno]];
}
console.log(primitiva);

x = primitiva[0];
y = primitiva[1];
z = primitiva[2];


alert("Los numeros de la lotería son: " + x +" " + y + " " + z);
alert("Tus numeros son: " + a +" " + b + " " + c)



if((a,b,c)==(x,y,z)){
    alert("!!!!!HAS GANADO!!!!!");
}