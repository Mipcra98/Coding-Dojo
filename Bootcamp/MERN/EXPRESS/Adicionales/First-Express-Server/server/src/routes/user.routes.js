import express from "express";
import Authenticate from "../middlewares/Authenticate.js";
import UserController from "../controllers/user.controller.js";
const router = express.Router();



//Rutas para usuario...

router.get("/", Authenticate, UserController.getUser);
router.post("/", Authenticate, UserController.createNewUser)
router.put("/", Authenticate, UserController.updateUser)
router.delete("/", Authenticate, UserController.deleteUser)

export default router;