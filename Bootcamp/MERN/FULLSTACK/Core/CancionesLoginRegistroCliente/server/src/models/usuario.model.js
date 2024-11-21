import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

// Estructura Base de un usuario con algunos requerimientos
const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es requerido'],
        minlength: [4, 'El apellido debe tener al menos 4 caracteres']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: [true, 'El email ya está en uso'],
        validate: {
            validator: function (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            },
            message: 'El email no es válido'
        },
    },
    contrasena: {
        type: String,
        required: [true, 'La contraseña es requerida'],
        minlength: [8, 'La contraseña debe tener al menos 8 caracteres']
    }
});


//Creación de un campo virtual para la confirmación de la contraseña
UsuarioSchema.virtual('confirmarContrasena')
    .get(function () {
        return this._confirmarContrasena
    })
    .set(function (value) {
        this._confirmarContrasena = value;
    })

//PRE-validación para verificar que la contraseña y la confirmación de la contraseña coincidan
UsuarioSchema.pre('validate', function (next) {
    if (this.contrasena !== this.confirmarContrasena) {
        this.invalidate('confirmarContrasena', 'La contraseña y la confirmación de la contraseña no coinciden');
    }
    next();
})

//Una vez pasado la validación de confirmación, se procede a guardar la contrasena con encriptación del mismo
UsuarioSchema.pre('save', function (next) {
    if (this.isModified('contrasena')) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(this.contrasena, salt);
            this.contrasena = hash;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next()
    }
})

const Usuario = model('Usuario', UsuarioSchema);

export default Usuario;