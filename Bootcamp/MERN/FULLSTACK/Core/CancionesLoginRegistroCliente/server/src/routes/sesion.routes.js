import express from 'express';
const router = express.Router();

import sesionController from '../controllers/sesion.controller.js'
import AutenticacionJWT from '../../config/jwt.config.js';

//Rupa para Login
router.post('/login', sesionController.login);


//Ruta para Logout
router.delete('/logout', AutenticacionJWT, sesionController.logout);

//Ruta para obtener datos de usuario
router.get('/userData', sesionController.userData);

export default router;
