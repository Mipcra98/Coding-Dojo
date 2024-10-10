import express from "express";
const router = express.Router();

// importamos los controladores
import userRoutes from "../controllers/user.controller.js";




//creamos las rutas

//POST
router.post("/", userRoutes.crearUser);
//GET ALL
router.get("/", userRoutes.buscarTodos);
//GET BY ID
router.get("/:id", userRoutes.buscarId);
//PUT BY ID
router.put("/:id", userRoutes.actualizarId);
//DELETE BY ID
router.delete("/:id", userRoutes.eliminarId);



export default router;