import React, { useState } from 'react';

const ComponenteActividad = () => {
  const [actividad, setActividad] = useState('');
  const [cargando, setCargando] = useState(false);

  const obtenerActividad = async () => {
    setCargando(true);

    try {
      const respuesta = await fetch('https://www.boredapi.com/api/activity');
      const datos = await respuesta.json();
      setActividad(datos.activity);
    } catch (error) {
      console.error('Error al obtener la actividad:', error);
      setActividad('Error al obtener una actividad. Inténtalo de nuevo más tarde.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Eliminador de Aburrimiento</h1>
      <button
        onClick={obtenerActividad}
        disabled={cargando}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        {cargando ? 'Cargando...' : 'Obtener Actividad'}
      </button>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{actividad}</p>
    </div>
  );
};

export default ComponenteActividad;