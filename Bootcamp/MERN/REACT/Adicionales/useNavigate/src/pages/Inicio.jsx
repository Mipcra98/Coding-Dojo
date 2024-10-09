import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Inicio = () => {
  const [respuesta, setRespuesta] = useState('');
  const navegar = useNavigate();

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    navegar('/respuestas', { state: { respuesta } });
  };

  return (
    <div className="inicio-contenedor">
      <h1>Pregunta Rápida</h1>
      <form onSubmit={manejarEnvio}>
        <label>
          ¿Cuál es tu color favorito?
          <input
            type="text"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="boton-enviar">Enviar</button>
      </form>
    </div>
  );
};

export default Inicio;