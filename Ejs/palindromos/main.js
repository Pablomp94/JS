var arr, word, arr1 = [];



word = prompt("Escribe:");

arr = word.split(" ");

for(let i = 0; i< arr.length; i++){
    arr1[i] = arr[i].split(``).reverse().join("");
}

//pasar array a string y compararlo//

arr1.reverse();
var pal2 = arr1.join("");
var pal = arr.join("");

if(pal === pal2){
    alert("Son palindromos");
}else{
    alert("No son palindromos");
}