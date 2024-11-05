import { model, Schema } from "mongoose";
import cancion from "./cancion.model.js";

const playlistSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la playlist es requerida'],
        validate: {
            validator: (value) => value.length > 5,
            message: 'El nombre de la playlist debe tener mas de 5 caracteres'
        }
    },
    canciones: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: cancion,
            trim: true,
            required: [true, 'Las canciones son requeridas']
        }],
        required: [true, 'Las canciones son requeridas'],
        validate: {
            validator: (value) => value.length >= 2,
            message: 'Debes al menos seleccionar 2 canciones para crear una playlist'
        }
    }

}, { timestamps: true })

const Playlist = model('Playlist', playlistSchema);

export default Playlist;