import express from "express";
const router = express.Router();

const listaCanciones = [
    {
        id: 1,
        nombre: "Bohemian Rhapsody",
        autor: "Queen",
        duracion: 5.55
    },
    {
        id: 2,
        nombre: "Stairway to Heaven",
        autor: "Led Zeppelin",
        duracion: 8.02
    },
    {
        id: 3,
        nombre: "Hotel California",
        autor: "Eagles",
        duracion: 6.30
    },
    {
        id: 4,
        nombre: "Sweet Child O' Mine",
        autor: "Guns N' Roses",
        duracion: 4.53
    }
]



//Ruta para obtener todas las canciones
router.get("/", (req, res) => {
    res.json(listaCanciones);
});

//Ruta para obtener una canción por su id
router.get("/:id", (req, res) => {
    const {id} = req.params;    //Obtenemos el ID a mostrarse
    const miCancion = listaCanciones.find((value, index) => {return value.id == id});
    if (miCancion) {
        res.status(200).json(miCancion);
    } else {
        res.status(404).json({ error: "Canción no encontrada" });
    }
});

//Ruta para actualizar una canción por su id
router.put("/:id", (req, res) => {
    const {id} = req.params;    //Obtenemos el ID a modificarse
    const data = req.body;    //Obtenemos los datos a modificar
    console.log(id, data);
    const miCancion = listaCanciones.find((value, index) => {return value.id == id});
    if (miCancion) {
        listaCanciones[parseInt(id) - 1] = data;  //Convertimos el ID a entero para asegurarnos de que sea procesable como número
        return res.status(200).json(listaCanciones);
    } else {
        return res.status(404).json({ error: "Canción no encontrada" });
    }
});


export default router;