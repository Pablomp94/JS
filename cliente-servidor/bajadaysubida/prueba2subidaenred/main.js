window.addEventListener("load", function (){

    let main = document.body;


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "post",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: "title=Mi mensaje&body=Mensaje de prueba&userId=5"
    })


    let nombre = prompt("Introduce el nombre a añadir");
    let numero = prompt("Introduce el numero a añadir");
    let body = prompt("Introduce el texto a añadir");

    let data={
        title:nombre,
        body:body,
        userId:numero
    }
    
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(function (response) {
        return response.text();
    }).then(function (text){
        console.log(text);
    }).catch(function (error){
        console.log(error);
    })






    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {

        if(response.ok){
            return response.json();
        }else{
            throw new Error("Los datos no consiguieron llegar");
        }
    }).then((json) => {
        
        
        let tabla = document.createElement("table");

        for(let obj of json){
            let fila = document.createElement("tr");

            let coluId = document.createElement("th");
            let uId = obj.userId;
            coluId.textContent = uId;
            fila.appendChild(coluId);
            
            let colId = document.createElement("th");
            let id = obj.id;
            colId.textContent = id;
            fila.appendChild(colId);
            
            let colTitle = document.createElement("th");
            let title = obj.title;
            colTitle.textContent = title;
            fila.appendChild(colTitle);

            let colBody = document.createElement("th");
            let body = obj.body;
            colBody.textContent = body;
            fila.appendChild(colTitle);

            tabla.appendChild(fila);
        }

        
        main.appendChild(tabla);

    }).catch(error => {
        main.textContent = "Error :" + error;
    })


    

});