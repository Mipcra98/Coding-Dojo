import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const llave = process.env.JWT_SECRET;       //importamos los datos del archivo .env

const AutenticacionJWT = (req, res, next) => {
    const token = req.cookies.userToken     //Obtenemos el token desde la cookie

    if (!token) {   //Si no hay token, enviar mensaje
        return res.status(401).json({ message: "Acceso denegado: No se proporcionó un token de autenticación." })
    }

    //Verificamos si el token recibido corresponde a la llave que existe en el archivo .env
    jwt.verify(token, llave, (err, decoded) => {
        if (err) {  //si el Token no es válido, enviar mensaje
            return res.status(401).json({ message: "Acceso denegado: Token inválido." })
        }

        //si el token es válido
        req.usuario = decoded   //añadimos al usuario como parte de la respuesta
        next()      //continuar con la ejecución del middleware
    })
}

export default AutenticacionJWT;