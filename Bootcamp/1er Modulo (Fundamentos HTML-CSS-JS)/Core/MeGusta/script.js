document.querySelectorAll('.feedback').forEach(function (elemento) {            //Obtenemos todos los elementos con la clase feedback y por cada uno de ellos ejecutamos una función
    elemento.querySelector('#like').addEventListener('click', function () {     //Para cada elemento de ID "like" que se encuentre dentro de la clase feedback le agregamos un evento de click que ejecutará otra función.
        elemento.querySelector('#likes-count').innerText++;                     //Para cada elemento de ID "likes-count" que se encuentre dentro de la clase feedback, se hace una "lectura" del valor, se añade uno al valor, se vuelve a guardar y mostrar en pantalla.
    });
})