import { Model, Schema } from "mongoose";

//Definimos el Esquema de un libro, es decir su estructura base.
const bookSchema = new Schema({
    titulo: {
        type: String,
        required: [true, '¡El título es obligatorio!']
    },
    autor: {
        type: String,
        required: [true, '¡El autor es obligatorio!']
    },
    genero: String,
    lanzamiento: Number,
}, {
    timestamps: true
})

//Se crea el modelo de libro a partir del esquema.
const libro = ('Libro', bookSchema);


//Exportamos el modelo para poder utilizarlo en otros archivos.
export default libro;