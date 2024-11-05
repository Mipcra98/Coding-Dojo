import express from "express";
import playlistController from "../controllers/playlist.controller.js";

const router = express.Router();

//Crear Playlist
router.post("/", playlistController.crearPlaylist);

//Buscar todas las playlists
router.get("/", playlistController.getAllPlaylists);

//Buscar una playlist por id
router.get("/:id", playlistController.getByIdPlaylist);

//Buscar una playlist por nombre
router.get("/name/:nombre", playlistController.getByNamePlaylist);

//Editar una playlist
// router.patch("/:id", playlistController.actualizarPlaylist);

//Eliminar una playlist
router.delete("/:id", playlistController.deletePlaylist);

export default router;