//      Algoritmo para Palídromo, palídromo significa, una palabra que se puede leer igual de enfrente que de atrás.
// function esPalindromo(arreglo) {
//     for(var izquierda=0; izquierda<arreglo.length/2; izquierda++) {
//         var derecha = arreglo.length-1-izquierda;
//         if(arreglo[izquierda] != arreglo[derecha]) {
//             return "No es un palíndromo :(";
//         }
//     }
//     return "¡¡¡SI es un palíndromo!!!";
// }
// Le damos las letras de la palabra una a una para que pueda comparar    
// var resultado1 = esPalindromo( ["r", "a", "d", "a", "r"] );
// console.log(resultado1);

// var resultado2 = esPalindromo( ["c", "a", "s", "a"] );
// console.log(resultado2);


//   Algoritmo para invertir un arreglo
// arreglo = [1, 2, 3, 4, 5]
// arreglo.reverse()

// ¿Revisamos?
// console.log(arreglo)


// Algoritmo para calcular un circulo
// function calcularCirculo() {
//     var radio = Math.round(Math.floor(Math.random() * 10) + 1); // Genera un radio aleatorio entre 1 y 10
//     var perimetro = Math.round(2 * Math.PI * radio); // Calcula el perímetro del círculo
//     var area = Math.round(Math.PI * Math.pow(radio, 2)); // Calcula el área del círculo
//     return { radio: radio, perimetro: perimetro, area: area };
// }

// var circuloAleatorio = calcularCirculo();

// console.log("Radio: " + circuloAleatorio.radio);
// console.log("Perímetro: " + circuloAleatorio.perimetro);
// console.log("Área: " + circuloAleatorio.area);


//Algoritmo para generar una contraseña aleatoria, basada en la longitud que necesitas
// function generarContraseña(longitud) {
//     var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     var contraseña = "";
//     for (var i = 0; i < longitud; i++) {
//         var indice = Math.floor(Math.random() * caracteres.length);
//         contraseña += caracteres.charAt(indice);
//     }
//     return contraseña;
// }

// var contraseñaAleatoria = generarContraseña(8); // Genera una contraseña de longitud 8
// console.log("Contraseña aleatoria: " + contraseñaAleatoria);


//Adivinanza de numeros
// var numeroSecreto = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
// var intentos = 0;

// while (true) {
//     var intento = Math.floor(Math.random() * 10) + 1; // Una persona debe ingresar un número, pero para efectos del ejercicio se dejó aleatorio
//     if (intento === null || intento === "") {
//         console.log("Has cancelado el juego o no has ingresado un número. El número secreto era " + numeroSecreto + ".");
//         break;
//     } else {
//         intentos++;
//         intento = parseInt(intento);
//         if (isNaN(intento)) {
//             console.log("Por favor, introduce un número válido.");
//         } else if (intento < numeroSecreto) {
//             console.log("Demasiado bajo. ¡Sigue intentándolo!");
//         } else if (intento > numeroSecreto) {
//             console.log("Demasiado alto. ¡Sigue intentándolo!");
//         } else {
//             console.log("¡Felicidades! ¡Has adivinado que el número secreto era", numeroSecreto + "!");
//             break;
//         }
//     }
// }




//Desafíos: usar el arreglo de los personajes de Stranger Things abajo y bucles:

// Imprime en la consola (console.log) los nombres de los objetos personajesYMonstruosStrangerThings cuyo id es divisible por 5
// Imprime en la consola (console.log) los nombres de los objetos personajesYMonstruosStrangerThings que tienen más de un tipo
// Imprime en la consola (console.log) los nombres de los personajes cuyo tipo sea «humano»
// Imprime en la consola (console.log) el nombre de todos los personajes cuyo nombre comience con la letra J

// Desafío adicional: Imprime en la consola /console.log) los nombres al revés de los personajes cuyo tipo sea «monstruo»

// var superheroes = { 
//     id: 1,   
//     nombre: "Once",
//     tipo: ["humano", "telequinético"], 
//     descripcion: "Una joven con habilidades telequinéticas." 
// }

// console.log(superheroes.descripcion)

// console.log(superheroes.tipo[1])

var personajesYMonstruosStrangerThings = [
    { id: 1,   nombre: "Once",           tipo: ["humano", "telequinético"], descripcion: "Una joven con habilidades telequinéticas." },
    { id: 2,   nombre: "Mike Wheeler",   tipo: ["humano"], descripcion: "Uno de los amigos cercanos de Will Byers, valiente y leal." },
    { id: 3,   nombre: "Dustin Henderson", tipo: ["humano"], descripcion: "Amigo de Mike, inteligente y carismático." },
    { id: 4,   nombre: "Lucas Sinclair", tipo: ["humano"], descripcion: "Otro amigo de Mike y Will, siempre alerta y listo para la acción." },
    { id: 5,   nombre: "Will Byers",     tipo: ["humano"], descripcion: "El niño que desaparece y es atrapado en el Mundo del Revés." },
    { id: 6,   nombre: "Jim Hopper",     tipo: ["humano"], descripcion: "Jefe de policía de Hawkins, comprometido en resolver misterios." },
    { id: 7,   nombre: "Joyce Byers",    tipo: ["humano"], descripcion: "Madre de Will, determinada a encontrar a su hijo desaparecido." },
    { id: 8,   nombre: "Jonathan Byers", tipo: ["humano"], descripcion: "Hermano mayor de Will, fotógrafo sensible y protector." },
    { id: 9,   nombre: "Steve Harrington", tipo: ["humano"], descripcion: "Popular chico de la escuela, inicialmente arrogante pero con un buen corazón." },
    { id: 10,  nombre: "Max Mayfield",   tipo: ["humano"], descripcion: "Nueva en Hawkins, se une al grupo de amigos y destaca por su valentía." },
    { id: 11,  nombre: "Billy Hargrove", tipo: ["humano"], descripcion: "Hermano abusivo de Max, con problemas de ira y comportamiento violento." },
    { id: 12,  nombre: "Demogorgon",     tipo: ["monstruo"], descripcion: "Criatura del Mundo del Revés, con pétalos de flor que abre para atacar." },
    { id: 13,  nombre: "Demodogs",       tipo: ["monstruo"], descripcion: "Versiones más pequeñas y ágiles del Demogorgon, con un comportamiento de manada." },
    { id: 14,  nombre: "Mind Flayer",    tipo: ["monstruo"], descripcion: "Entidad malévola que controla el Mundo del Revés y busca invadir el mundo real." },
    { id: 15,  nombre: "Dart",           tipo: ["monstruo"], descripcion: "Criatura D'Artagnan, un Demodog bebé cuidado por Dustin." },
    { id: 16,  nombre: "Nancy Wheeler",  tipo: ["humano"], descripcion: "Hermana mayor de Mike, inteligente y valiente." },
    { id: 17,  nombre: "Karen Wheeler",  tipo: ["humano"], descripcion: "Madre de Mike, Nancy y Holly, preocupada por su familia." },
    { id: 18,  nombre: "Scott Clarke",   tipo: ["humano"], descripcion: "Profesor de ciencias de la escuela secundaria de Hawkins, entusiasta y amigable." },
    { id: 19,  nombre: "Bob Newby",      tipo: ["humano"], descripcion: "Empleado en la tienda de electrónica, ingenioso y solidario con Joyce." },
    { id: 20,  nombre: "Martin Brenner", tipo: ["humano"], descripcion: "Científico del laboratorio, responsable de los experimentos con Eleven." },
    { id: 21,  nombre: "Ted Wheeler",    tipo: ["humano"], descripcion: "Padre de Mike, Nancy y Holly, dedicado pero algo ausente en la vida de sus hijos." },
    { id: 22,  nombre: "Scott Clarke",   tipo: ["humano"], descripcion: "Profesor de ciencias de la escuela secundaria de Hawkins, entusiasta y amigable." },
    { id: 23,  nombre: "Barb",           tipo: ["humano"], descripcion: "Amiga de Nancy, desaparece misteriosamente en la primera temporada." },
    { id: 24,  nombre: "Murray Bauman",  tipo: ["humano"], descripcion: "Periodista conspirativo, ayuda a Nancy y Jonathan a exponer la verdad." },
    { id: 25,  nombre: "Lonnie Byers",   tipo: ["humano"], descripcion: "Padre ausente de Will y Jonathan." }
];

var divisibles = [];
var masTipos = [];
var tipoHumano = [];
var iniciaEnJ = [];
var monstruosAlReves = [];

for (let i = 0; i < personajesYMonstruosStrangerThings.length; i++) {
    const {id, nombre, tipo} = personajesYMonstruosStrangerThings[i];
    id % 5 === 0 ? divisibles.push(nombre) : "";
    tipo.length > 1 ? masTipos.push(nombre) : "";
    tipo[0] === "humano" ? tipoHumano.push(nombre) : "";
    nombre.startsWith("J") ? iniciaEnJ.push(nombre) : "";
    tipo[0] === "monstruo" ? monstruosAlReves.push(nombre.split("").reverse().join("")) : "";
}

console.log("Id's disvisibles en 5:",divisibles);
console.log("Tienen más de un tipo:",masTipos);
console.log("Son de tipo humano:",tipoHumano);
console.log("Nombres que inician con J:",iniciaEnJ);
console.log("Son de tipo monstruo y se guardan al reves:",monstruosAlReves);