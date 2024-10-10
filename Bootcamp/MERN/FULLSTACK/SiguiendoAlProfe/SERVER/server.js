import dotenv from 'dotenv';
import express from 'express';
import dbConnect from './config/mongoose.config.js'
import cors from 'cors';

//Importaciones de rutas
import userRoutes from './src/routes/user.routes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT;

//Configuraciones

app.use(express.json());    //Soporte para formatos JSOn dentro del servidor
app.use(cors(                   //Permite que el servidor acepte peticiones de otros dominios, en este caso, se le permite al proyecto Cliente en el puerto 4095
    {
        origin: "http://localhost:4095/"        //Recordar que el puerto puede cambiar en función a cual se elija en el Vite.config
    }
));     //Configuración de politicas de origen cruzada...

//Uso de rutas
app.use("/api/users", userRoutes)


//Conectamos a la Base de Datos desde Mongoose.config.js
dbConnect();


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})