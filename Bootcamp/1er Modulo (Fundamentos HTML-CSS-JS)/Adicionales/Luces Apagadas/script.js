window.onload = function () {
    generarLuces();
}

const level = document.getElementById('actual-level');      //se guarda el valor que tiene el Span en una variable

document.getElementById('level-mas').addEventListener('click', () => {      //Se detecta la pulsación del "mas"
    let nivel = parseInt(level.innerHTML)
    if (nivel + 1 > 10) {
        alert('No se puede aumentar mas');                      //Se alerta que no se puede superar el nivel 10
    } else {
        if ((level.innerHTML = nivel + 1) < 10) {               //Si el nivel es menor que 10, se le añade un 0 delante
            level.innerHTML = '0' + (nivel + 1);
        } else {
            level.innerHTML = nivel + 1;
        }
        generarLuces();
    }
})

document.getElementById('level-menos').addEventListener('click', () => {        //Se detecta la pulsación del "menos"
    let nivel = parseInt(level.innerHTML)
    if (nivel - 1 < 5) {
        alert('No se puede disminuir mas');                     //Se alerta que no se puede bajar del nivel 5
    } else {
        if ((level.innerHTML = nivel - 1) < 10) {               //Si el nivel es menor que 10, se le añade un 0 delante
            level.innerHTML = '0' + (nivel - 1);
        } else {
            level.innerHTML = nivel - 1;
        }
        generarLuces();
    }
})

var lista = new Array(); //Se crea una lista vacía

function generarLuces() {
    lista = new Array(); //Se vacía la lista para que no se añadan luces de niveles anteriores
    let cantidad = parseInt(level.innerHTML)
    for (let i = 0; i < cantidad; i++) {
        lista[i] = new Array()
        for (let j = 0; j < cantidad; j++) {
            const rand = Math.floor(Math.random() * 5); //Se generan luces encendidas o apagadas aleatoriamente
            if (rand == 1) {
                lista[i][j] = '<div class="box encendido" id="' + i + "-" + j + '"></div>';     //se generan las luces encendidas y sealmacenan en la lista
            } else {
                lista[i][j] = '<div class="box apagado" id="' + i + "-" + j + '"></div>';       //se generan las luces apagadas y se almacenan en la lista
            }
        }
    }
    mostrarLuces();
}

function mostrarLuces() {
    const boxList = document.getElementById('box-list');       //Se almacena el apartado box para poder modificarlo luego
    let html = '';

    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista[i].length; j++) {
            html += lista[i][j];                            //Se hace el llamado a la lista para poder mostrar todas las luces
        }
    }

    boxList.style.gridTemplateColumns = 'repeat(' + lista.length + ', 1fr)';
    boxList.style.gridTemplateRows = 'repeat(' + lista.length + ', 1fr)';
    boxList.innerHTML = html;

    const recuadro = document.querySelector('.recuadro');
    recuadro.style.width = (lista.length * 2.25) + 2 + 'rem';
    addListener();
}

function cambiarLuces(select) { 
    const ij = select.id.split('-');
    ij[0] = parseInt(ij[0]);
    ij[1] = parseInt(ij[1]);
    cambiarCasilla(ij[0], ij[1]);           //Cambiar estado de casilla Arriba
    if (ij[0]-1>=0){
        cambiarCasilla(ij[0]-1, ij[1]);
        if (ij[1]-1>=0){                     //Cambiar estado de casilla Arriba e Izquierda 
            cambiarCasilla(ij[0]-1, ij[1]-1);
        }
        if (ij[1]+1<lista.length){           //Cambiar estado de casilla Arriba y Derecha
            cambiarCasilla(ij[0]-1, ij[1]+1);
        }
    }
    if (ij[0]+1<lista.length){              //Cambiar estado de casilla Abajo
        cambiarCasilla(ij[0]+1, ij[1]);
        if (ij[1]-1>=0){                     //Cambiar estado de casilla Abajo e Izquierda
            cambiarCasilla(ij[0]+1, ij[1]-1);
        }
        if (ij[1]+1<lista.length){           //Cambiar estado de casilla Abajo y Derecha
            cambiarCasilla(ij[0]+1, ij[1]+1);
        }
    }
    if (ij[1]-1>=0){                         //Cambiar estado de casilla Izquierda
        cambiarCasilla(ij[0], ij[1]-1);
    }
    if (ij[1]+1<lista.length){               //Cambiar estado de casilla Derecha
        cambiarCasilla(ij[0], ij[1]+1);
    }
    addListener();
}

function cambiarCasilla(a,b) {        //función que verifica si la casilla está encendida o apagada y la cambia al otro estado
    const cambio = document.getElementById(parseInt(a) + "-" + parseInt(b));
    if (cambio.classList.contains('apagado')) {
        cambio.classList.remove('apagado');
        cambio.classList.add('encendido');
    } else {
        cambio.classList.remove('encendido');
        cambio.classList.add('apagado');
    }
    return
}

function addListener() {
    document.querySelectorAll('.box').forEach(boton => {
        boton.addEventListener('click', () => {
            if (boton.classList.contains('box')) {
                cambiarLuces(boton);
            }
        })
    })
}