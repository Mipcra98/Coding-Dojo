import express from "express";
const router = express.Router();

//importamos el controlador
import CancionController from "../controllers/cancion.controller.js";

//Definimos las rutas
//Buscar todas
router.get("/", CancionController.buscarTodas);

//Buscar por ID
router.get("/:id", CancionController.buscarCancion);

//Buscar por nombre
router.get("/name/:nombre", CancionController.buscarCancionPorNombre);

//Crear canción
router.post("/", CancionController.crearCancion);

//Actualizar canción
router.patch("/:id", CancionController.actualizarCancion);

//Borrar canción
router.delete("/:id", CancionController.eliminarCancion);

export default router
