let hr = document.getElementById('hour-hand');      //se almacena el elemento 'hora' del reloj para manipularlo despues
let min = document.getElementById('minute-hand'); //se almacena el elemento 'minuto' del reloj para manipularlo despues
let sec = document.getElementById('second-hand'); //se almacena el elemento 'segundo' del reloj para manipularlo despues

function displayTime(){
	let date = new Date();  //se almacena la fecha actual
	
	let hh = date.getHours();   //se almacena la hora actual
	let mm = date.getMinutes(); //se almacena el minuto actual
	let ss = date.getSeconds(); //se almacena el segundo actual

	let hRotation = 30*hh + mm/2;   //se calcula la rotación para la hora basada en la hora actual y el minuto actual
	let mRotation = 6*mm;          //se calcula la rotación para el minuto basada en el minuto actual
	let sRotation = 6*ss;          //se calcula la rotación para el segundo basada en el segundo actual
	
	hr.style.transform = `rotate(${hRotation}deg)`; //se actualiza la rotación del elemento 'hora' del reloj
	min.style.transform = `rotate(${mRotation}deg)`; //se actualiza la rotación del elemento 'minuto' del reloj
	sec.style.transform = `rotate(${sRotation}deg)`; //se actualiza la rotación del elemento 'segundo' del reloj

    if(hh < 10){
        hh = "0" + hh;  //caso la hora solo tenga 1 digito, se agrega el 0
    }
    if(mm < 10){
        mm = "0" + mm;  //caso el minuto solo tenga 1 digito, se agrega el 0
    }
    if(ss < 10){
        ss = "0" + ss;  //caso el segundo solo tenga 1 digito, se agrega el 0
    }

    document.getElementById('clock-time').innerHTML = hh + ":" + mm + ":" + ss;     //se añade el texto de manera a que sea más entendible la hora actual para quienes no entienden el funcionamiento de un reloj análogo
}
setInterval(displayTime, 1000); //se añade un intervalo de 1 segundo para actualizar la hora.

// 360 grados / 12 horas = 30 grados por hora
// 360 grados / 60 minutos = 6 grados por minuto
// 360 grados / 60 segundos = 6 grados por segundo

const cargarHoras = () => {
    document.querySelectorAll('.number').forEach((number) => {  //se seleccionan todos los elementos de la clase number
        number.style.transform = `rotate(${number.innerHTML*30+6}deg)`; //basado en el valor del 'number', se le asigna una rotación
    })
}


cargarHoras();