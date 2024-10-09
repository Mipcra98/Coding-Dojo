// Ejercicio 1: Conversor de Temperatura
// Crea una función flecha que convierta temperaturas de grados Celsius a Fahrenheit. La fórmula para convertir Celsius a Fahrenheit es (Celsius * 9/5) + 32.

const cambiarCaF = (celsius) => (celsius * 9/5) + 32;


// Ejercicio 2: Generador de Mensajes Personalizados
// Implementa una función flecha que tome un nombre y una edad como argumentos y devuelva un mensaje personalizado que diga, por ejemplo, «Hola Juan, tienes 30 años de edad».

const mensajePersonalizado = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años de edad.`;


// Ejercicio 3: Convertir de Millas a Kilómetros
// Crea una función flecha que convierta millas a kilómetros. Recuerda que una milla equivale a 1.60934 kms.

const convertirMillaAKm = (millas) => millas * 1.60934;


// Ejercicio 4: Que llevar con el clima
// Crea una función flecha que te aconseje llevar paraguas si está lloviendo o llevar sombrero si hay sol. Tu función debe aceptar una palabra que describa el clima actual y retorne un consejo adecuado.

const consejo = (clima) => clima === 'lloviendo' ? 'Lleva paraguas' : 'Lleva sombrero';
