import express from "express";
const router = express.Router();

//importamos el controlador
import CancionController from "../controllers/cancion.controller.js";
import AutenticacionJWT from "../../config/jwt.config.js";

//Definimos las rutas
//Buscar todas
router.get("/", AutenticacionJWT, CancionController.buscarTodas);

//Buscar por ID
router.get("/:id", AutenticacionJWT, CancionController.buscarCancion);

//Buscar por nombre
router.get("/name/:nombre", AutenticacionJWT, CancionController.buscarCancionPorNombre);

//Crear canción
router.post("/", AutenticacionJWT, CancionController.crearCancion);

//Actualizar canción
router.patch("/:id", AutenticacionJWT, CancionController.actualizarCancion);

//Borrar canción
router.delete("/:id", AutenticacionJWT, CancionController.eliminarCancion);

export default router
