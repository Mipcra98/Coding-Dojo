// Predicción 1: ¿Qué indicará console.log cuando se llame a esta función?

function miEdad() {
  console.log("Tengo: " + 25 + " años"); //se mostrará el texto "Tengo: 25 años", todo junto en una sola línea, estará Concatenado el texto, número y texto nuevamente.
}

// Predicción 2: si necesitáramos enviar una edad hacia la función, le diríamos a la función «hey, aquí tienes una variable llamada edad». Lo hacemos agregando el nombre de la variable entre paréntesis.
// Entonces, si enviamos como variable edad el número 25 (var edad = 25), y se llama a esta función, ¿qué indicará console.log?

function miEdad(edad) {
  console.log("Tengo: " + edad + " años"); //también resultará en "Tengo: 25 años", también concatenará texto, número y texto pero a diferencia de la primera función, el texto que se mostrará podrá cambiar de valor en función al valor que se le pase como parámetro al hacer el llamado a la función.
}

//  Predicción 3: Vamos una vez más. Si var primerNumero = 50 y var segundoNumero = 27, ¿qué indicará console.log?

function restar(primerNumero, segundoNumero) {
  console.log("¡Restemos los números!");            //con este código se imprimirá lo que está dentro de las comillas simplemente

  console.log("primerNumero es:" + primerNumero);   //con este código se imprimirá lo que está dentro de las comillas y se concatenará el valor almacenado en la variable 'primerNumero'

  console.log("segundoNumero es:" + segundoNumero); //con este código se imprimirá lo que está dentro de las comillas y se concatenará el valor almacenado en la variable 'segundoNumero'

  var resultado = primerNumero - segundoNumero;     //este código como tal no mostrará nada, pero es el encargado de almacenar la resta del 'primerNumero' y 'segundoNumero' (50-27=23) en una variable 'resultado' (resultado=23)

  console.log(resultado);                           //y por último en esta línea de código se imprimirá lo almacenado en la variable 'resultado', que en este caso debe mostrar el valor numérico '23'
}
