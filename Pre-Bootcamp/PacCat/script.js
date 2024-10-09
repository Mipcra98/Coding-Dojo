var filas = Math.ceil(Math.random() * 15);
while (filas < 10 || filas > 10) {
  filas = Math.ceil(Math.random() * 15);
}

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var vidas = 3;
var totalPuntos = 0;
var mundo = [];
for (let i = 0; i < filas; i++) {
  //creación del mundo
  let array = [];
  for (var l = 0; l < filas; l++) {
    if (l == 0 || l == filas - 1 || i == 0 || i == filas - 1) {
      array[l] = 1;
    } else if (i == 5 && l == 1) {
      //ubicación vacía para el Gato
      array[l] = 0;
    } else if (i == 5 && l <= 4) {
      //ubicación vacia para el Perro
      array[l] = 0;
    } else {
      array[l] = random(-1, 4);
      if (array[l] == 2) {
        totalPuntos++;
      } else if (array[l] == 3) {
        totalPuntos += 5;
      }
    }
  }
  mundo[i] = array;
}

for (let i = 1; i < filas - 1; i++) {
  //modificaión para mejorar el mundo y evitar bloques sin conexión, Obs. igual pueden aparecer pero con meos frecuencia
  for (var l = 1; l < filas - 1; l++) {
    if (mundo[i][l] == 1) {
      continue;
    } else {
      if (
        mundo[i][l] != 1 &&
        mundo[i - 1][l] == 1 &&
        mundo[i + 1][l] == 1 &&
        mundo[i][l - 1] == 1 &&
        mundo[i][l + 1] == 1
      ) {
        mundo[i][l] = 1;
      }
      if (
        mundo[i][l] == 1 &&
        mundo[i - 1][l + 1] == 1 &&
        i - 1 != 0 &&
        l + 1 != filas - 1
      ) {
        mundo[i - 1][l + 1] == 0;
      }
      if (
        mundo[i][l] == 1 &&
        mundo[i + 1][l - 1] == 1 &&
        i + 1 != 0 &&
        l - 1 != filas - 1
      ) {
        mundo[i + 1][l - 1] == 0;
      }
      if (
        mundo[i][l] == 1 &&
        i + 1 != filas - 1 &&
        i - 1 != 0 &&
        l - 1 != 0 &&
        l + 1 != filas - 1 &&
        mundo[i + 1][l - 1] == 1 &&
        mundo[i + 1][l + 1] == 1
      ) {
        mundo[i][l] = 0;
      }
      if (
        mundo[i][l] == 1 &&
        i + 1 != filas - 1 &&
        i - 1 != 0 &&
        l - 1 != 0 &&
        l + 1 != filas - 1 &&
        mundo[i - 1][l - 1] == 1 &&
        mundo[i - 1][l + 1] == 1
      ) {
        mundo[i][l] = 0;
      }
    }
  }
}

var diccionarioMundo = {
  0: "blank",
  1: "pared",
  2: "burguer",
  3: "papitas",
};

function dibujarMundo() {
  var output = "";
  for (var fila = 0; fila < mundo.length; fila++) {
    output += "<div class = 'fila'>";
    for (var x = 0; x < mundo[fila].length; x++) {
      output +=
        "<div class = '" + diccionarioMundo[mundo[fila][x]] + "'></div>";
    }
    output += "</div>";
  }
  if (puntos > 0) {
    output +=
      "<p>Los puntos logrados son: " +
      puntos +
      " de un total de " +
      totalPuntos +
      ' "posibles"</p><p>Te quedan ' +
      vidas +
      " vidas</p>";
  }
  if (puntos === totalPuntos) {
    output += "<p>Has logrado el máximo de puntos</p>";
  }
  if (vidas == 0) {
    output +=
      "<p>Se acabaron tus vidas, ya no se moverá el gato ni el perro, deverá recargar la página para reiniciar.</p>";
  }

  document.getElementById("mundo").innerHTML = output;
}
dibujarMundo();

var gato = {
  x: 1,
  y: 5,
};

function dibujarGato() {
  document.getElementById("gato").style.top = gato.y * 40 + "px";
  document.getElementById("gato").style.left = gato.x * 40 + "px";
}
dibujarGato();

var perro = {
  x: 4,
  y: 5,
};

function dibujaPerro() {
  document.getElementById("perro").style.top = perro.y * 40 + "px";
  document.getElementById("perro").style.left = perro.x * 40 + "px";
}

dibujaPerro();
var seguimiento = [
  [3, 5],
  [2, 5],
  [1, 5],
];

function muevePerro() {
  seguimiento.push([gato.x, gato.y]);
  perro.x = seguimiento[0][0];
  perro.y = seguimiento[0][1];
  seguimiento.shift();
  dibujaPerro();

  // do {
  //     var lado = random(-1, 4);                   //ruta aleatoria para perro
  //     console.log(lado)
  // } while (validarMovPerro(lado) == false)
  // dibujaPerro();
}

// function validarMovPerro(lado) {
//     if (lado === 0 && mundo[perro.y - 1][perro.x] !== 1) {              //cálculos para NO colisión de perro aleatorio contra la pared
//         //arriba
//         perro.y--;
//         console.log('Perro arriba')
//         return true;
//     } else if (lado === 1 && mundo[perro.y + 1][perro.x] !== 1) {
//         //abajo
//         perro.y++;
//         console.log('Perro abajo')
//         return true;
//     } else if (lado === 2 && mundo[perro.y][perro.x - 1] !== 1) {
//         //izquierda
//         perro.x--;
//         console.log('Perro izquierda')
//         return true;
//     } else if (lado === 3 && mundo[perro.y][perro.x + 1] !== 1) {
//         //derecha
//         perro.x++;
//         console.log('Perro derecha')
//         return true;
//     } else {
//         return false;
//     }
// }

var puntos = 0;
document.onkeydown = function (e) {
  if (perro.x == gato.x && perro.y == gato.y && vidas > 0) {
    vidas -= 1;
  }
  muevePerro();
  if (perro.x == gato.x && perro.y == gato.y && vidas > 0) {
    vidas -= 1;
  }
  if (e.keyCode === 37 && vidas > 0) {
    //izquierda
    if (mundo[gato.y][gato.x - 1] !== 1) {
      if (mundo[gato.y][gato.x - 1] == 2) {
        puntos += 1;
      } else if (mundo[gato.y][gato.x - 1] == 3) {
        puntos += 5;
      }
      gato.x--;
    }
  }
  if (e.keyCode === 38 && vidas > 0) {
    //arriba
    if (mundo[gato.y - 1][gato.x] !== 1) {
      if (mundo[gato.y - 1][gato.x] == 2) {
        puntos += 1;
      } else if (mundo[gato.y - 1][gato.x] == 3) {
        puntos += 5;
      }
      gato.y--;
    }
  }
  if (e.keyCode === 39 && vidas > 0) {
    //derecha
    if (mundo[gato.y][gato.x + 1] !== 1) {
      if (mundo[gato.y][gato.x + 1] == 2) {
        puntos += 1;
      } else if (mundo[gato.y][gato.x + 1] == 3) {
        puntos += 5;
      }
      gato.x++;
    }
  }
  if (e.keyCode === 40 && vidas > 0) {
    //abajo
    if (mundo[gato.y + 1][gato.x] !== 1) {
      if (mundo[gato.y + 1][gato.x] == 2) {
        puntos += 1;
      } else if (mundo[gato.y + 1][gato.x] == 3) {
        puntos += 5;
      }
      gato.y++;
    }
  }
  mundo[gato.y][gato.x] = 0;
  dibujarMundo();
  dibujarGato();
};
