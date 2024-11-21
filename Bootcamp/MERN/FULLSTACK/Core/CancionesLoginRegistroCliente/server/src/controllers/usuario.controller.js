import Usuario from "../models/usuario.model.js";

const crearUsuario = async (req, res) => {
    const user = req.body

    const { email } = user;
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
        return res.status(400).json({
            error: {
                errors: {
                    email: {
                        message: "El correo ya está en uso"
                    }
                }
            }
        });
    }

    try {
        const nuevoUsuario = await Usuario.create(user);
        res.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error });
    }
}

const buscarTodos = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error });
    }
}

const buscarUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Usuario.findById(id);
        if (!response) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error });
    }
}

const actualizarUsuario = async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    try {
        const response = await Usuario.findByIdAndUpdate(id, user, { new: true, runValidators: true });
        if (!response) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ error });
    }
}

const eliminarUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Usuario.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default {
    crearUsuario,
    buscarTodos,
    buscarUsuario,
    actualizarUsuario,
    eliminarUsuario
}