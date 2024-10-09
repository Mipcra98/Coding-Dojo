import React from 'react';
import useFormulario from './useFormulario'; // Importar el hook personalizado
import './App.css'

function FormularioInicioSesion() {
  const [valores, errores, handleChange, handleSubmit] = useFormulario();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre de Usuario:
          <input
            type="text"
            name="username"
            value={valores.username}
            onChange={handleChange}
          />
        </label>
        {errores.username && <p>{errores.username}</p>}
      </div>
      <div>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={valores.password}
            onChange={handleChange}
          />
        </label>
        {errores.password && <p>{errores.password}</p>}
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default FormularioInicioSesion;