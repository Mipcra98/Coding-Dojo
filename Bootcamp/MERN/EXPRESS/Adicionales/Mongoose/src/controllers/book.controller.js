import libro from "../models/book.model.js";

//Función para crear un nuevo Libro
const crearLibro = async (req, res) => {
    try {
        const nuevoLibro = await libro.create(req.body);
        res.status(201).json(nuevoLibro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//Función para obtener todos los libros
const obtenerLibros = async (req, res) => {
    try {
        const libros = await libro.find();
        res.status(200).json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//Funcion para obtener un libro por su ID
const obtenerLibroID = async (req, res) => {
    try {
        const libro = await libro.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ message: "Libro no encontrado" });
            return;
        }
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


//Función para actualizar un libro por su ID
const actualizarLibroID = async (req, res) => {
    try {
        const libro = await libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!libro) {
            res.status(404).json({ message: "Libro no encontrado" });
            return;
        }
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//Función para eliminar un libro por su ID
const eliminarLibroID = async (req, res) => {
    try {
        const libro = await libro.findByIdAndDelete(req.params.id);
        if (!libro) {
            res.status(404).json({ message: "Libro no encontrado" });
            return;
        }
        res.json({ mensaje: "Libro eliminado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


//exportamos todas las funciones
export default {
    crearLibro,
    obtenerLibros,
    obtenerLibroID,
    actualizarLibroID,
    eliminarLibroID
}