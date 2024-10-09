import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI_CONNECTION = process.env.MongoDB_URI

async function connectarDB() {
    try {
        await mongoose.connect(URI_CONNECTION,{
            dbName:"BailandoConMongoose",
        });
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log("Error al conectar a la base de datos", error);
    }
}

export default connectarDB;