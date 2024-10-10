import User from "../models/user.model.js";


//Crear usuario
const crearUser = async (req, res) => {
    try {
        const data = req.body;
        const newElement = await User.create(data);
        res.json(newElement).status(201);
        return;
    } catch (error) {
        console.log(error)
        res.json(error).status(500)
        return;
    }
}

//Buscar todos
const buscarTodos = async (req, res) => {
    try {
        const Elements = await User.find();
        res.json(Elements).status(200);
        return;
    } catch (error) {
        console.log(error)
        res.json(error).status(500)
        return;
    }
}

//Buscar por id
const buscarId = async (req, res) => {
    try {
        const { id } = req.params;
        const Element = await User.findById(id);
        if (!Element) {
            res.json({ message: "No se encontro el elemento" }).status(404)
            return;
        }
        res.json(Element).status(200)
        return;
    } catch (error) {
        console.log(error)
        res.json(error).status(500)
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
            res.json({ message: "No se encontro el elemento" }).status(404)
            return;
        }
        res.json(Element).status(200);
        return;
    } catch (error) {
        console.log(error)
        res.json(error).status(500)
        return;
    }
}


//eliminar por id
const eliminarId = async (req, res) => {
    try {
        const { id } = req.params;
        const Element = await User.deleteById(id);
        if (!Element) {
            res.json({ message: "No se encontro el elemento" }).status(404)
        }
        res.json('Se eliminó el elemento correctamente').status(200)
        return;
    } catch (error) {
        console.log(error)
        res.json(error).status(500)
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