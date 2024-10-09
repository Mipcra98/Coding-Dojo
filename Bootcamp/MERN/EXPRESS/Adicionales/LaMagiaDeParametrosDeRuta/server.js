import dotenv from "dotenv";
dotenv.config();                //Permite leer las variables de entorno (archivo .ENV)

import express from "express";

//Importamos las rutas de la carpeta de rutas
import Canciones from "./src/routes/Canciones.routes.js"
import ErrorHandler from "./src/middlewares/ErrorHandler.middleware.js";

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.json());

// app.use("/", ErrorHandler, (req, res) => {
//     res.send("Bienvenido a la pagina principal")
// });

app.use("/api/canciones",ErrorHandler, Canciones);





app.listen(PORT, () => console.log(`Server running on port ${PORT}`));