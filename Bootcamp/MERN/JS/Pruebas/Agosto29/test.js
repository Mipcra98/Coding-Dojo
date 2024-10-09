// Definimos el objeto original utilizando 'const'
const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    propietario: 'Alicia Estevez',
    detalles: [
      {
        vin: '123456789ABCDEF',
        color: 'azul',
        kilometraje: 45000,
        puertas: 5,
        combustible: 'gasolina'
      }
    ],
    registradoEn: 1583945177623
  };

  // Usamos el operador Spread para hacer una copia independiente del objeto 'auto' y también una copia del objeto dentro de 'detalles'
  const autoCopia = {
    ...auto,
    detalles: [
      { ...auto.detalles[0] }
    ]
  };

  // Modificamos la copia
  autoCopia.propietario = 'Roberto Gomez';  // Cambio de propietario
  autoCopia.detalles[0].combustible = 'diesel';  // Cambio del combustible en el último detalle
  autoCopia.detalles[0].color = 'rojo';  // Cambio del color en el primer detalle

  // Le damos más pinta a nuestra salida con template strings
  console.log(`Copia modificada: ${JSON.stringify(autoCopia, null, 2)}`);
  console.log(`Objeto original: ${JSON.stringify(auto, null, 2)}`);

//   "use strict";    //super héroe tan solo con poner este "use strict" en el código

// function mostrarThis() {
//   console.log(this);
// }

// mostrarThis(); //Imprime undefined, en ves de referirse al objeto global