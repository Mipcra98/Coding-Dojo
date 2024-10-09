const videojuegos = Object.freeze([
    { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },
    { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },
    { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },
    { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },
    { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },
    { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },
    { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },
    { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },
    { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },
    { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },
    { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },
    { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },
    { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },
    { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },
    { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },
    { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },
    { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },
    { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
    { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },
    { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },
    { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },
    { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },
    { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },
    { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }
]);

// // Filtrar juegos de aventura o acción-aventura
// const juegosAventura = videojuegos.filter(juego => juego.genero === "aventura" || juego.genero === "acción-aventura");

// // Obtener los nombres de los juegos
// const nombresJuegos = videojuegos.map(juego => juego.nombre);

// console.log(`Juegos de Aventura ${juegosAventura}`);
// console.log(`Nombre de Juegos${nombresJuegos}`);


// // Filtrar juegos que comiencen con la letra "F"
// const juegosConF = videojuegos.filter(juego => juego.nombre.startsWith("F"));
// console.log('Comienzan por F:',juegosConF);

// // Obtener los IDs de los juegos
// const idsJuegos = videojuegos.map(juego => juego.id);
// console.log('Id de juegos:',idsJuegos);

// Un conjunto de videojuegos cuyo número de identificación es divisible uniformemente por 3.
const divisiblePorTres = videojuegos.filter(juego => juego.id % 3 === 0);
console.log('1- Id divisibles por 3:',divisiblePorTres);


// Un conjunto de videojuegos que pertenecen al género «acción-RPG».
const RPG = videojuegos.filter(juego => juego.genero === "acción-RPG");
console.log('2- Juegos del género RPG:',RPG);


// Un conjunto de videojuegos que tienen más de un género.
const masGeneros = videojuegos.filter(juego => juego.genero.includes("-")?juego : null);
console.log('3- Juegos con más de un género:',masGeneros);


// Una lista con los nombres de los videojuegos.
const nombresDeJuegos = videojuegos.map(juego => juego.nombre);
console.log('4- Los nombres de los juegos son:',nombresDeJuegos);


// Una lista con los nombres de los videojuegos con un número de identificación superior a 19.
const idMayorA19 = videojuegos.filter(juego => juego.id > 19).map(juego => juego.nombre);
console.log('5- nombres de juegos con id mayor a 19:',idMayorA19);


// Una lista con los nombres de los videojuegos cuyo único género es «shooter».
const shooter = videojuegos.filter(juego => juego.genero === "shooter").map(juego => juego.nombre);
console.log('6- nombres de juegos del género de shooter:',shooter);


// Una lista que contenga solo el primer género de todos los videojuegos cuyo segundo género es «aventura».
const segundoGeneroAventura = videojuegos.filter(juego => juego.genero.includes("aventura") && juego.genero.length > "aventura".length).map(juego => juego.genero.split("-")[0]);
console.log('7- nombres de juegos que tienen el segúndo género como aventura:',segundoGeneroAventura);


// Un conteo del número de videojuegos que son del género «party».
const party = videojuegos.filter(juego => juego.genero.includes("party")).length;
console.log('8- Juegos que tengan el género "party":',party);



// Una lista con todos los videojuegos excepto aquellos cuyo número de identificación sea múltiplo de 5.
const multiploDe5 = videojuegos.filter(juego => juego.id % 5 !== 0);
console.log('9- Juegos que no tengan un id múltiplo de 5:',multiploDe5);


// Una lista con todos los videojuegos y para el videojuego con el número de identificación 5, se cambia su género por «otro».
const cambioGenero = videojuegos.map(juego => juego.id === 5 ? {...juego, genero: "otro"} : juego);
console.log('10- Juego con cambio de genero (id 5):',cambioGenero);