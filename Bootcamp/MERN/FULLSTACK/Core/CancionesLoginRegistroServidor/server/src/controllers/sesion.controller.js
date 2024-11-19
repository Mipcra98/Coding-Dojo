import Usuario from "../models/usuario.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    const { email, contrasena } = req.body;
    try {
        //Buscamos el Usuario, y si nó se encuentra retorna el mensaje de error
        const user = await Usuario.findOne({ email });
        if (!user) {
            return res.status(404).json({
                errors: {
                    email: {
                        message: "Usuario no encontrado"
                    }
                }
            });
        }

        //Encriptamos la contraseña que nos llega del body y lo comparamos con la contraseña del usuario
        const contraEncript = bcrypt.compareSync(contrasena, user.contrasena);

        //si las contraseñas no coinciden, generamos el mensaje correspondiente
        if (!contraEncript) {
            return res.status(401).json({
                errors: {
                    contrasena: {
                        message: "Contraseña incorrecta"
                    }
                }
            });
        }

        //Si todo está correcto, generamos el token
        const token = jwt.sign(
            {
                id: user._id,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        //Devolvemos el token
        res.status(200).cookie('userToken', token, { httpOnly: true }).json({ token });

    } catch (error) {
        res.status(500).json({
            errors: {
                message: "Error al iniciar sesión"
            }
        });
    }
}

const logout = async (req, res) => {
    res.status(200).clearCookie('userToken').json({ message: "Sesión cerrada" });
}

const userData = async (req, res) => {
    const { userToken } = req.cookies;

    if (!userToken) {
        return res.status(401).json({ message: "No hay sesión iniciada" });
    } else {
        try {
            jwt.verify(userToken, process.env.JWT_SECRET, (error, decoded) => {
                if (error) {
                    return res.status(401).json({ message: "Token inválido" });
                }
                req.user = decoded;
                res.status(200).json(req.user);
            })
        } catch (error) {
            res.status(500).json({
                errors: {
                    message: "Error al adquirir datos de la sesión"
                }
            });
        }
    }
}

export default {
    login,
    logout,
    userData
}