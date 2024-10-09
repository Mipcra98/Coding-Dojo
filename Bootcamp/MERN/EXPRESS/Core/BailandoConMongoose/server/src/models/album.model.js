import { Schema,model} from "mongoose";  //Se importan los modulos de mongoose



//Generamos el Schema básico para un album (Titulo, Artistas, Año de Lanzamiento, Género y TimesTamps)
const AlbumSchema = new Schema({
    title: {
        type: String,
        required: [true, "Titulo es requerido"],
        minlength: [3, "El título debe tener al menos 3 caracteres"]
    },
    artist: {
        type: String,
        required: [true, "El nombre del artista es requerido"],
    },
    year: {
        type: Number,
        required: [true, "El año de lanzamiento es requerido"],
        // min: [1900, "El año de lanzamiento debe ser mayor a 1900"],
        // max: [2025, "El año de lanzamiento debe ser menor a 2025"]
    },
    genre: {
        type: String,
        required: [true, "El género es requerido"],
    }

},{timestamps: true})



//Creamos el modelo de album
const Album = model("Album", AlbumSchema);


//Exportamos el modelo
export default Album;