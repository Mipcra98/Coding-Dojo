import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();            //Cargamos los datos del documento .env

const mongoUri = process.env.MONGODB_URI;       //utilizamos el enlace a la BD del archivo .env

const PORT = process.env.PORT || 3000;        //utilizamos el dato de PUERTO del archivo .env

//Validamos de que el campo exista en el archivo .env
if (!mongoUri) {
    console.error("La ruta de la Base de Datos no está definida en el archivo .env")
    process.exit(1); //Terminamos la ejecución del programa
}

//Caso no se haya finalizado la ejecución del programa, continuamos con intentar conectar a la BD
mongoose.connect(mongoUri).then(() => {
    console.log("Conexión exitosa a la Base de Datos");
}).catch((error) => {
    console.error("Error al conectar a la Base de Datos", error);
})

const app = express();

app.use(express.json());

// app.use('/api', /* Rutas */);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})