import React, { useState, useRef, useEffect } from 'react';

const FormularioUsuario = () => {

  // Estado para almacenar el nombre del usuario
  const [nombre, setNombre] = useState('');

  // Ref para enfocar el campo de nombre cuando se monta el componente
  const nombreInputRef = useRef(null);

  // Efecto para enfocar el campo de nombre cuando el componente se monta
  useEffect(() => {
    nombreInputRef.current.focus();
  }, []);

  // Manejador de eventos para actualizar el nombre cuando el usuario escribe
  const manejarCambio = (evento) => {
    setNombre(evento.target.value);
  };

  // Manejador de eventos para enviar el formulario y limpiar el campo de nombre
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    // Aquí podríamos enviar los datos a un servidor
    // Después de enviar, limpiamos el campo de nombre
    setNombre('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={manejarCambio}
          ref={nombreInputRef}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioUsuario;