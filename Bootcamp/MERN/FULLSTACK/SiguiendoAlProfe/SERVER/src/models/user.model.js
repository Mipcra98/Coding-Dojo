import { model, Schema } from 'mongoose';
import customValidations from '../utils/customValidations.js';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, '¡El email es obligatorio!'],
        unique: [true, '¡El email ya existe!'],
        minLenght: [6, 'El email debe tener al menos 6 caracteres'],
        trim: true,       //Borra los espacios al final
        lowercase: true,   //Convierte todo a minuscula
        validate: [customValidations.validateEmail, 'El email no es valido']  //validamos el email usando la funcion validateEmail
    },
    password: {
        type: String,
        required: [true, '¡La contraseña es obligatoria!'],
        minLenght: [6, 'La contraseña debe tener al menos 6 caracteres']
    }
}, { timestamps: true });

const User = model('User', userSchema);     //creamos el objeto User basado en el modelo

export default User;        //exportamos el modelo