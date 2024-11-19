import express from 'express';
const router = express.Router();
import UserCont from '../controllers/usuario.controller.js';

// Crear usuario
router.post('/', UserCont.crearUsuario);

// obtener todos los usuarios
router.get('/', UserCont.buscarTodos);

//obtener un usuario por id
router.get('/:id', UserCont.buscarUsuario);

// actualizar un usuario
router.patch('/:id', UserCont.actualizarUsuario);

// eliminar un usuario
router.delete('/:id', UserCont.eliminarUsuario);

export default router

