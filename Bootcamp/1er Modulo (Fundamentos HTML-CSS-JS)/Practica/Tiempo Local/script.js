window.onload = function () {           //funcion que se ejecuta cuando la ventana se carga
    alert('Cargando Reporte del clima');    //genera el alerta de "cargando página"
}


document.querySelector('.cookies button').addEventListener('click', function () {   //detecta la pulsación del botón de las cookies
    document.querySelector('.cookies').style.display = 'none';    //oculta el apartado de las cookies una vez pulsado el boton mencionado anteriormente
    setTimeout(() => {
        mostrarciudad('Buenos Aires');
    }, 2000);
});

document.querySelectorAll('nav button').forEach((elemento) => {    //Selecciona todos los elementos con la tag "nav a" para luego usarlos
    elemento.addEventListener('click', function (e) {    //detecta la pulsación de los elementos
        if (document.querySelector('.cookies').style.display == 'none') {
            mostrarciudad(elemento.textContent);
        }
    })
});

var dias = ['Hoy', 'Mañana', 'Miercoles', 'Jueves', 'Viernes']    //La lista de días que se mostrarán posteriormente

var climas = {      //Se crea una lista de climas para poder vincular con las img posteriormente
    'soleado': 'suny',
    'nublado': 'cloudy',
    'lluvioso': 'rainy',
    'tormentoso': 'storm',
    'parcialmente nublado': 'partlyCloudy',
}

var ciudades = {        //Se crea una lista de ciudades con sus características separadas en 5 días
    "Buenos Aires": [['nublado', '22', '15'], ['lluvioso', '20', '13'], ['tormentoso', '18', '11'], ['parcialmente nublado', '21', '14'], ['soleado', '24', '17']],
    "Ciudad de México": [['soleado', '28', '19'], ['nublado', '26', '18'], ['lluvioso', '24', '17'], ['tormentoso', '22', '16'], ['parcialmente nublado', '25', '18']],
    "Santiago": [['parcialmente nublado', '23', '16'], ['soleado', '26', '18'], ['nublado', '24', '17'], ['lluvioso', '22', '15'], ['tormentoso', '20', '13']],
    "São Paulo": [['lluvioso', '26', '19'], ['tormentoso', '25', ' 18'], ['parcialmente nublado', '27', '20'], ['soleado', '30', '22'], ['nublado', '28', '21']],
    "Quito": [['tormentoso', '17', '10'], ['parcialmente nublado', '19', '14'], ['soleado', '22', '15'], ['nublado', '20', '13'], ['lluvioso', '18', '12']]
}

function capitalize(s)      //Se crea una función para capitalizar la primera letra de cada palabra
{
    return s[0].toUpperCase() + s.slice(1);
}

function cambiarGrad() {    //Se crea una función para poder mostrar en Grados Cº o Fº basados en el boitón que se presenta en el Navbar
    let tipo = document.querySelector('#grad').value        //Detectar cual opción está activa por el usuario
    document.querySelectorAll('#max').forEach(elemento => {     //Buscar todos los elementos del documento que correspondan al máximo de temperatura
        if (elemento.innerHTML.includes("°")) {
            if (elemento.innerHTML.includes("°F")) {      //Validar si es necesario re-calcular
                elemento.innerHTML = elemento.innerHTML.slice(0, -2)    //Quitar el símbolo de grados
                elemento.innerHTML = Math.round(((elemento.innerHTML - 32) * 5) / 9)   //Re-calcular de Fº a Cº
            } else {
                elemento.innerHTML = elemento.innerHTML.slice(0, -2)    //Quitar el símbolo de grados
            }
        }
        if (tipo == 'C') {
            elemento.innerHTML = elemento.innerHTML + "°C"      //Añadir el símbolo de grados Cº
        } else {
            elemento.innerHTML = Math.round(((elemento.innerHTML * 9) / 5) + 32) + "°F"   //Calcular y añadir el símbolo de grados Fº
        }
    });
    document.querySelectorAll('#min').forEach(elemento => { //Buscar todos los elementos del documento que correspondan al mínimo de temperaturaif (elemento.innerHTML.includes("º")){
        if (elemento.innerHTML.includes("°")) {
            if (elemento.innerHTML.includes("°F")) {      //Validar si es necesario re-calcular
                elemento.innerHTML = elemento.innerHTML.slice(0, -2)    //Quitar el símbolo de grados
                elemento.innerHTML = Math.round(((elemento.innerHTML - 32) * 5) / 9)   //Re-calcular de Fº a Cº
            } else {
                elemento.innerHTML = elemento.innerHTML.slice(0, -2)    //Quitar el símbolo de grados
            }
        }
        if (tipo == 'C') {
            elemento.innerHTML = elemento.innerHTML + "°C"  //Añadir el símbolo de grados Cº
        } else {
            elemento.innerHTML = Math.round(((elemento.innerHTML * 9) / 5) + 32) + "°F" //Calcular y añadir el símbolo de grados Fº
        }
    });
}

function mostrarciudad(ciudad) {             //se crea la funcion que genera las muestras del clima
    var h1 = document.createElement('h1');      //se crea un elemento h1 para el título de la ciudad
    h1.textContent = ciudad;                    //se le asigna el valor de la ciudad a la etiqueta h1
    var div = document.createElement('div');    //se crea un div para contener los datos del clima
    div.className = 'clima'                       //se añade la clase "clima" al div para que los estilos puedan ser aplicados correctamente
    var content = ''
    for (let i = 0; i < ciudades[ciudad].length; i++) { //se recorre el array de ciudades para obtener los datos de cada día en una ciudad específica
        content += '<span class="card"><img src="./img/' + climas[ciudades[ciudad][i][0]] + '.png" alt="' + ciudades[ciudad][i][0] + '"><h3>' + dias[i] + '</h3><p id="tipo">' + capitalize(ciudades[ciudad][i][0]) + '</p><p><span id="max">' + ciudades[ciudad][i][1] + '</span> <span id="min">' + ciudades[ciudad][i][2] + '</span></p></span>'
    }
    div.innerHTML = content;        //se añade el contenido al div para que pueda ser reflejado posteriormente
    document.querySelector('#ciudad').innerHTML = ''    //se Borra todos los datos que se encuentren dentro del 'section.ciudad' para que no se dupliquen
    document.querySelector('#ciudad').appendChild(h1)   //Se añade el h1 al section con sus datos recién borrados
    document.querySelector('#ciudad').appendChild(div)  //Se añade el div al mismo section para que se muestren en pantalla

    cambiarGrad();
}