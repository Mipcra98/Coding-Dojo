import { model, Schema } from "mongoose";

const cancionSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre de la cancion es requerido"],
        minlength: [3, "El nombre de la cancion debe tener al menos 3 caracteres"]
    },
    artista: {
        type: String,
        required: [true, "El nombre del artista es requerido"],
        minlength: [3, "El nombre del artista debe tener al menos 3 caracteres"]
    },
    genero: {
        type: String,
        required: [true, "El genero de la cancion es requerido"],
        minlength: [3, "El genero de la cancion debe tener al menos 3 caracteres"]
    },
    duracion: {
        type: Number,
        required: [true, "La duracion de la cancion es requerida"],
        min: [15, "La duracion de la cancion debe ser al menos de 15 segundos"]
    },
    lanzamiento: {
        type: Date,
        required: [true, "La fecha de lanzamiento de la cancion es requerida"],
        validate: [fecha => fecha <= new Date(), "La fecha de lanzamiento debe ser menor a la fecha actual"]
    }
}, { timestamps: true })
const Cancion = model("Cancion", cancionSchema);

export default Cancion;