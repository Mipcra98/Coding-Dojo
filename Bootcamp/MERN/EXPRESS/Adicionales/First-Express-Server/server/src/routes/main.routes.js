//Archivo contenedor de todas las rutas del proyecto

//importamos express
import express from 'express';
import MainController from '../controllers/main.controller.js';
import Authenticate from '../middlewares/Authenticate.js';

//Incorporamos el "Router" de express
const router = express.Router();

//Definimos las rutas
router.get('/',Authenticate, MainController.paginaMain)
router.get('/about',Authenticate, MainController.paginaAbout)

//Exportamos las rutas a traves del objeto Router
export default router;