var arr;
var pal;
var i, x;
var word;
var arr2;

arr = prompt("Pon el texto a verificar si es palindromo o no");

arr = arr.split(" ");

console.log(arr);

//Quiero un bucle que coja la ultima posicion del array y lo invierta, poniendolo en la posicion numero 0 del array pal//

for(i=(arr.length - 1); i<= 0; i--){
    
    word = arr[i];

    console.log(word);

    word = word.split(``).reverse();

    x = 0;

    pal[x] = word;
    
    x ++;
}

console.log(pal);