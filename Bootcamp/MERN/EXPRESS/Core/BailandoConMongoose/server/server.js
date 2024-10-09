import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import conectarDB from "./config/mongoose.config.js";
import AlbumsRoutes from "./src/routers/album.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

conectarDB();

app.use("/api/albums", AlbumsRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})