import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "AlRitmoDeMern",
        });
        console.log("¡Connected to the database!");
    } catch (error) {
        console.error("Error connecting to the database: ", error)
        throw error;
    }
}

export default connectDB;