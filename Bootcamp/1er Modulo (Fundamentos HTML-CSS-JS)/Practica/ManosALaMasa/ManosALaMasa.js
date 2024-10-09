console.log("Práctica, Manos a la masa");

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {        //se crea la funcion PizzaOven
  var Pizza = {                     //se crea el objeto Pizza
    tipoCorteza: tipoCorteza,       //se añade la característica "tipoCorteza" al objeto Pizza
    tipoSalsa: tipoSalsa,           //se añade la característica "tipoSalsa" al objeto Pizza
    quesos: quesos,                 //se añade la característica "quesos" al objeto Pizza
    salsas: salsas,                 //se añade la característica "salsas" al objeto Pizza
  };
  console.log("¡una deliciosa pizza!");
  return Pizza;
}

console.log("1era Pizza");
console.log(
  pizzaOven(
    "estilo Chicago",
    "tradicional",
    ["mozzarella"],
    ["pepperoni", "salchicha"]
  )
); //se llama a la funcion PizzaOven y se le pasan los ingredientes de la pizza

console.log("2da Pizza");
console.log(
  pizzaOven(
    "lanzada a mano",
    "marinara",
    ["mozzarella", "feta"],
    ["champiñones", "aceitunas", "cebollas"]
  )
); //se llama a la funcion PizzaOven y se le pasan nuevos ingredientes para la pizza

console.log("3era Pizza");
console.log(
  pizzaOven(
    "crispy",
    "barbacoa",
    ["queso cheddar", "queso mozzarella"],
    ["tocino", "pimientos"]
  )
); //se llama a la funcion PizzaOven y se le pasan nuevos ingredientes para la tercera pizza

console.log("4ta Pizza");
console.log(
  pizzaOven(
    "a la piedra",
    "pesto",
    ["queso parmesano", "queso gorgonzola"],
    ["piña", "anchoas"]
  )
); //se llama a la funcion PizzaOven y se le pasan nuevos ingredientes para la cuarta pizza
