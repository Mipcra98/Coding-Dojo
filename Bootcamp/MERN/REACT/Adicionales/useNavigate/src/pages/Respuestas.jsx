import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Respuestas = () => {
    const ubicacion = useLocation();
    const { respuesta } = ubicacion.state || {};

    const navigate = useNavigate(); // Para volver a la página anterior

    return (
        <div className="respuestas-contenedor">
            <h1>¡Respuestas!</h1>
            <p>
                ¿Tu color favorito es <strong>{respuesta}</strong>? ¡Eso es genial!
            </p>
            <p>¡Cada color tiene su propia magia y hace que el mundo sea más hermoso!</p>
            <button onClick={() => navigate(-1)}>Volver</button>         {/* Para volver a la página anterior */}
        </div>
    );
};

export default Respuestas;