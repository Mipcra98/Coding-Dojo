import React, { useState, useEffect } from 'react';

const ComponenteCitas = () => {
  const [cita, setCita] = useState('');
  const [cargando, setCargando] = useState(true);

  const obtenerCita = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch('https://api.quotable.io/random');
      const datos = await respuesta.json();
      setCita(`${datos.content} - ${datos.author}`);
    } catch (error) {
      console.error('Error al obtener la cita:', error);
      setCita('Error al obtener una cita. Inténtalo de nuevo más tarde.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerCita();
    const idIntervalo = setInterval(() => {
      obtenerCita();
    }, 30000); // Actualiza la cita cada 30 segundos

    // Función de limpieza
    return () => {
      clearInterval(idIntervalo); // Limpia el temporizador
    };
  }, []); // El arreglo vacío significa que este efecto solo se ejecutará una vez al montar el componente

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Citas Inspiradoras</h1>
      <p style={{ fontStyle: 'italic', fontSize: '20px', margin: '20px 0' }}>
        {cargando ? 'Cargando...' : cita}
      </p>
      <button onClick={obtenerCita} disabled={cargando} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {cargando ? 'Cargando...' : 'Obtener Nueva Cita'}
      </button>
    </div>
  );
};

export default ComponenteCitas;