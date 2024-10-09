import React, { useState } from 'react';

const FormularioViaje = () => {
    const [destino, setDestino] = useState('');
    const [duracion, setDuracion] = useState('');
    const [presupuesto, setPresupuesto] = useState('');
    const [errorFormulario, setErrorFormulario] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (!destino || !duracion || !presupuesto) {
            setErrorFormulario('Por favor, completa todos los campos.');
            return;
        }
        if (isNaN(duracion) || isNaN(presupuesto)) {
            setErrorFormulario('La duración y el presupuesto deben ser números.');
            return;
        }
        // Aquí enviarías los datos del formulario si todo está bien
        console.log('¡Formulario enviado correctamente!');
        // Resetear campos después del envío
        setDestino('');
        setDuracion('');
        setPresupuesto('');
        setErrorFormulario('');
    };

    return (
        <form onSubmit={manejarEnvio}>
            <h2>¡Registra tu próximo viaje!</h2>
            {errorFormulario && <p style={{ color: 'red' }}>{errorFormulario}</p>}
            <label htmlFor="destino">Destino:</label>
            <input
                type="text"
                id="destino"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
            />
            <label htmlFor="duracion">Duración (días):</label>
            <input
                type="text"
                id="duracion"
                value={duracion}
                onChange={(e) => setDuracion(e.target.value)}
            />
            <label htmlFor="presupuesto">Presupuesto ($):</label>
            <input
                type="text"
                id="presupuesto"
                value={presupuesto}
                onChange={(e) => setPresupuesto(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioViaje;