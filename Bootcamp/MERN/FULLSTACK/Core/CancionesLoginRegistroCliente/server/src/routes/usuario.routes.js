import express from 'express';
const router = express.Router();
import UserCont from '../controllers/usuario.controller.js';
import AutenticacionJWT from '../../config/jwt.config.js';

// Crear usuario
router.post('/', UserCont.crearUsuario);

// obtener todos los usuarios
router.get('/', AutenticacionJWT, UserCont.buscarTodos);

//obtener un usuario por id
router.get('/:id', UserCont.buscarUsuario);

// actualizar un usuario
router.patch('/:id', AutenticacionJWT, UserCont.actualizarUsuario);

// eliminar un usuario
router.delete('/:id', AutenticacionJWT, UserCont.eliminarUsuario);

export default router

