// importamos el Router de express
import express from "express";
const router = express.Router();

// importamos el controlador
import AlbumController from "../controllers/album.controller.js";

// creamos las rutas
router.get("/", AlbumController.getAllAlbums);
router.get("/:id", AlbumController.getAlbumById);
router.post("/", AlbumController.createAlbum);
router.put("/:id", AlbumController.updateAlbumById);
router.delete("/:id", AlbumController.deleteAlbumById);

// exportamos el router
export default router;