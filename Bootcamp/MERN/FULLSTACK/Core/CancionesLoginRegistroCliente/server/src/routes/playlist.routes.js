import express from "express";
import playlistController from "../controllers/playlist.controller.js";
import AutenticacionJWT from "../../config/jwt.config.js";

const router = express.Router();

//Crear Playlist
router.post("/", AutenticacionJWT, playlistController.crearPlaylist);

//Buscar todas las playlists
router.get("/", AutenticacionJWT, playlistController.getAllPlaylists);

//Buscar una playlist por id
router.get("/:id", AutenticacionJWT, playlistController.getByIdPlaylist);

//Buscar una playlist por nombre
router.get("/name/:nombre", AutenticacionJWT, playlistController.getByNamePlaylist);

//Editar una playlist
router.patch("/:id", AutenticacionJWT, playlistController.updatePlaylist);

//Eliminar una playlist
router.delete("/:id", AutenticacionJWT, playlistController.deletePlaylist);

export default router;