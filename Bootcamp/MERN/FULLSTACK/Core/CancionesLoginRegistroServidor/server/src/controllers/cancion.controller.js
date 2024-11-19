import Cancion from "../models/cancion.model.js";

// Crear una cancion
const crearCancion = async (req, res) => {
    // console.log("crear cancion")
    try {
        const cancion = new Cancion(req.body);
        const cancionGuardada = await cancion.save();
        res.status(201).json(cancionGuardada);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
        return;
    }
}

//Buscar todas las canciones
const buscarTodas = async (req, res) => {
    // console.log("Buscando todas las canciones")
    try {
        const canciones = await Cancion.find();
        if (canciones.length === 0) {
            res.status(404).json({ message: "No se encontraron canciones" });
            return;
        }
        res.status(200).json(canciones);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
        return;
    }
}


//Buscar una cancion por id
const buscarCancion = async (req, res) => {
    // console.log("Buscando cancion por id")
    try {
        const { id } = req.params;
        const cancion = await Cancion.findById(id);
        if (!cancion) {
            res.status(404).json({ message: "No se encontro la cancion" });
            return;
        }
        res.status(200).json(cancion);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
        return;
    }
}

//Buscar canción por Nombre
const buscarCancionPorNombre = async (req, res) => {
    const { nombre } = req.params;
    try {
        const cancion = await Cancion.find({ nombre: nombre });
        if (!cancion) {
            res.status(404).json({ message: `No se encontro la cancion con nombre: ${nombre}` });
            return;
        }
        res.status(200).json(cancion);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
        return;
    }
}


//Editar una cancion
const actualizarCancion = async (req, res) => {
    // console.log("Actualizando cancion")
    try {
        const { id } = req.params;
        const data = req.body;
        const cancion = await Cancion.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!cancion) {
            res.status(404).json({ message: "Cancion no encontrada" });
            return;
        }
        res.status(200).json(cancion);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
        return;
    }
}


//Eliminar una cancion
const eliminarCancion = async (req, res) => {
    // console.log("Eliminando cancion")
    try {
        const { id } = req.params;
        const cancion = await Cancion.findByIdAndDelete(id);
        if (!cancion) {
            res.status(404).json({ message: "Cancion no encontrada" });
            return;
        }
        res.status(200).json("Se eliminó la canción correctamente");
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
        return;
    }
}


export default {
    crearCancion,
    buscarTodas,
    buscarCancion,
    buscarCancionPorNombre,
    actualizarCancion,
    eliminarCancion
}