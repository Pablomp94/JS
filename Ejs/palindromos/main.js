var arr, pal, word, arr1 = [];

pal = prompt("Escribe:");

arr = pal.split(" ");

for(let i = 0; i< arr.length; i++){

    arr1[i] = arr[i].split(``).reverse().join("");
}

//pasar array a string y compararlo//