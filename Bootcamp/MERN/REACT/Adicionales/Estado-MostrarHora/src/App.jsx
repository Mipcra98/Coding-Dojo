import React, { useState, useEffect } from 'react';
import Destino from './components/Destino.jsx'
import './App.css'

const Reloj = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Esta función se ejecuta cuando el componente se desmonta
    return () => {
      clearInterval(intervalo);
      console.log("El componente Reloj se ha desmontado");
    };
  }, []);

  return (
    <div>
      <p>Hora actual: {hora}</p>
    </div>
  );
}

const App = () => {
  const [mostrarReloj, setMostrarReloj] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrarReloj(!mostrarReloj)}>
        {mostrarReloj ? "Ocultar Reloj" : "Mostrar Reloj"}
      </button>
      {mostrarReloj && <Reloj />}
      <Destino lugar="París" impuesto={0.1} />
      <Destino lugar="Tokio" impuesto={0.08} />
      <Destino lugar="Nueva York" impuesto={0.0925} />
    </div>
  );
}

export default App;
