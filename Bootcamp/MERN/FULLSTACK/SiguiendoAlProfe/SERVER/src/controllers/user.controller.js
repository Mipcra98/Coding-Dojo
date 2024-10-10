import User from "../models/user.model.js";


//Crear usuario
const crearUser = async (req, res) => {
    try {
        const data = req.body;
        const newElement = await User.create(data);
        res.status(201).json(newElement);
        return;
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
        return;
    }
}

//Buscar todos
const buscarTodos = async (req, res) => {
    try {
        const Elements = await User.find();
        res.status(200).json(Elements);
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        return;
    }
}

//Buscar por id
const buscarId = async (req, res) => {
    try {
        const { id } = req.params;
        const Element = await User.findById(id);
        if (!Element) {
            res.status(404).json({ message: "No se encontro el elemento" })
            return;
        }
        res.status(200).json(Element);
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        return;
    }
}

//actualizar por id
const actualizarId = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;
        const Element = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!Element) {
            res.status(404).json({ message: "No se encontro el elemento" })
            return;
        }
        res.status(200).json(Element);
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        return;
    }
}


//eliminar por id
const eliminarId = async (req, res) => {
    try {
        const { id } = req.params;
        const Element = await User.deleteById(id);
        if (!Element) {
            res.status(404).json({ message: "No se encontro el elemento" })
        }
        res.status(200).json('Se eliminó el elemento correctamente');
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        return;
    }
}


export default {
    crearUser,
    buscarTodos,
    buscarId,
    actualizarId,
    eliminarId
}