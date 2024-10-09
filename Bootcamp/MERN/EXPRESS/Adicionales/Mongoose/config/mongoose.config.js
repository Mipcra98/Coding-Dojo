import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI_MONGO = process.env.MONGODB_URI;      //URI de la base de datos que tenemos registrado en el .env

async function conectarDB() {
    try {
        await mongoose.connect(URI_MONGO, {         //se intenta conectar al Cluster
            dbName: "pruebaDB",             //Nombre de la base de datos
        });
        console.log("Conectado a la base de datos");
    }catch (error){
        console.log("Error al conectar a la base de datos", error);
        throw error;
    }
}

export default conectarDB;