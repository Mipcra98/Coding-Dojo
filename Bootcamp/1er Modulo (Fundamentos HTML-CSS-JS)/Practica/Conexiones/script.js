var perfil = document.querySelector('.perfil-section');         //Seleccionar solamente el campo del "Perfil"
perfil.querySelector('#btn-edit').addEventListener('click', function () { //Seleccionar el boton de editar y agregar un evento solamente para este perfil
    perfil.querySelector('h1').innerHTML = 'Javier Fritsch'; //Cambiar el nombre del perfil
});


document.querySelectorAll('.request').forEach(function (elemento) { //Seleccionar todos los elementos con la clase "request"
    elemento.querySelector('.check').addEventListener('click', function () { //Agregar un evento a cada elemento
        sumar(elemento);        //llamamos a la funcion encargada de sumar al contador y agregar un usuario a la lista de conexiones
        restar(elemento);       //llamamos a la funcion encargada de restar al contador y eliminar un usuario de la lista de solicitudes
    });
});

function sumar (elem) {
    document.querySelector('.friends-list').querySelector('span').textContent = parseInt(document.querySelector('.friends-list').querySelector('span').textContent) + 1;    //Detecta el valor dentro del "Span", le suma 1 y vuelve a mostrar en pantalla

    var li = document.createElement('li');      //creamos un nuevo elemento "li" para añadirlo luego
    li.innerHTML = '<img src="'+elem.querySelector('img').src+'" alt="'+elem.querySelector('a').textContent+'"><a href="#">'+elem.querySelector('a').textContent+'</a>';        //le asignamos el contenido del elemento seleccionado, en este caso la src de la imagen, la "alternativa a la imagen" y el nombre del usuario
    document.querySelector('.friends-list').querySelector('ul').appendChild(li);    //y por ultimo añadimos a la lista de conexiones el nuevo elemento creado
}

function restar (elem) {
    document.querySelector('.friend-requests').querySelector('span').textContent = parseInt(document.querySelector('.friend-requests').querySelector('span').textContent) - 1;     //Detecta el valor dentro del "Span", le resta 1 y vuelve a mostrar en pantalla
    if (elem)               //comprueba la existencia del elemento para evitar posibles fallas
        elem.remove();      // una vez comprobada, borra el elemento, en este caso todo el elemento padre
    else{
        console.log('No se pudo encontrar') //Caso se falle en la comprobación saldrá un mensaje en consola este mensaje
    
    }
}
