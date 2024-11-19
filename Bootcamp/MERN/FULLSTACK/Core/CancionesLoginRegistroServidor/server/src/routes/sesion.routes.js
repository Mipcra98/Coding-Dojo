import express from 'express';
const router = express.Router();

import sesionController from '../controllers/sesion.controller.js'

//Rupa para Login
router.post('/login', sesionController.login);


//Ruta para Logout
router.delete('/logout', sesionController.logout);

//Ruta para obtener datos de usuario
router.get('/userData', sesionController.userData);

export default router;
