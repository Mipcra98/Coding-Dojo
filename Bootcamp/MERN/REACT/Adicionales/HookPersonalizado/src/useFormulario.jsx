import { useState, useCallback } from 'react';

// Definir el hook personalizado useFormulario con validación y manejo de errores

const useFormulario = (initialValues = { username: '', password: '' }) => {

    const [valores, setValores] = useState(initialValues);
    const [errores, setErrores] = useState({});

    // Función de validación simple

    const validar = (nombre, valor) => {
        let error;

        if (nombre === 'username' && !valor) {
            error = 'El nombre de usuario es requerido';
        } else if (nombre === 'password' && !valor) {
            error = 'La contraseña es requerida';
        }

        return error;
    };

    // Función para manejar cambios en los campos del formulario
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        const error = validar(name, value);

        setValores({
            ...valores,
            [name]: value,
        });

        setErrores({
            ...errores,
            [name]: error,
        });

    }, [valores, errores]);

    // Función para manejar el envío del formulario
    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        const nuevosErrores = {};

        Object.keys(valores).forEach((nombre) => {
            const error = validar(nombre, valores[nombre]);
            if (error) {
                nuevosErrores[nombre] = error;
            }
        });

        if (Object.keys(nuevosErrores).length === 0) {
            // Lógica de envío, por ejemplo, llamar a una API
            console.log('Enviando formulario:', valores);
        } else {
            setErrores(nuevosErrores);
        }

    }, [valores]);


    // Retornar los valores, errores y las funciones de manipulación
    return [valores, errores, handleChange, handleSubmit];
}

export default useFormulario;