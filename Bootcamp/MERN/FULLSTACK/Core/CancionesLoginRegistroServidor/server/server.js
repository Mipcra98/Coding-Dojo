//Importamos las Dependencias necesarias
import express from "express";
import connectDB from "./config/mongoose.config.js";
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();    //Cargamos el archivo .env

//importamos las rutas
import CancionRoutes from "./src/routes/cancion.routes.js"
import PlaylistRoutes from "./src/routes/playlist.routes.js"
import UsuarioRoutes from "./src/routes/usuario.routes.js"
import SesionRoutes from "./src/routes/sesion.routes.js"


const app = express();      //Utilizamos express para crear el servidor
const PORT = process.env.PORT || 8000;      //Definimos el puerto de escucha del archivo .env , sinó se usará el 8000 

//Midlewares
app.use(cookieParser());    //Permitimos el uso de cookies
app.use(express.json());    //permitimos el uso del formato JSON.
app.use(cors(
    {
        origin: ["http://localhost:5173", "http://127.0.0.1:5173"]     //Usando cors, definimos solamente el acceso al puerto 5173
    }
));

//Definimos las rutas que se usarán
app.use("/api/sesion", SesionRoutes);
app.use("/api/canciones", CancionRoutes);
app.use("/api/playlist", PlaylistRoutes);
app.use("/api/usuario", UsuarioRoutes);
app.use("*", (req, res) =>
    res.status(404).json({ message: "Ruta no encontrada" })
);


//conectamos a la BD
connectDB();


//Iniciamos el servidor
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
