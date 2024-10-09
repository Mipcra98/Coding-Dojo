import React, { useReducer } from 'react';

const estadoInicial = {
  nombre: '',
  errorNombre: '',
  edad: '',
  errorEdad: '',
  seHaEnviado: false
};

const reducer = (estado, accion) => {
  switch (accion.tipo) {
    case 'ESTABLECER_VALOR_NOMBRE':
      return {
        ...estado,
        nombre: accion.valor
      };
    case 'ESTABLECER_ERROR_NOMBRE':
      return {
        ...estado,
        errorNombre: accion.valor
      };
    case 'ESTABLECER_VALOR_EDAD':
      return {
        ...estado,
        edad: accion.valor
      };
    case 'ESTABLECER_ERROR_EDAD':
      return {
        ...estado,
        errorEdad: accion.valor
      };
    case 'ESTABLECER_SE_HA_ENVIADO':
      return {
        ...estado,
        seHaEnviado: accion.valor
      };
    default:
      return estado;
  }
};

const App = () => {

  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  const manejarCambioNombre = (e) => {
    dispatch({ tipo: 'ESTABLECER_VALOR_NOMBRE', valor: e.target.value });
  };

  const manejarCambioEdad = (e) => {
    dispatch({ tipo: 'ESTABLECER_VALOR_EDAD', valor: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    let valido = true;

    if (estado.nombre.trim() === '') {
      dispatch({ tipo: 'ESTABLECER_ERROR_NOMBRE', valor: 'El nombre es obligatorio' });
      valido = false;
    } else {
      dispatch({ tipo: 'ESTABLECER_ERROR_NOMBRE', valor: '' });
    }

    if (isNaN(estado.edad) || estado.edad.trim() === '') {
      dispatch({ tipo: 'ESTABLECER_ERROR_EDAD', valor: 'La edad debe ser un número' });
      valido = false;
    } else {
      dispatch({ tipo: 'ESTABLECER_ERROR_EDAD', valor: '' });
    }

    if (valido) {
      dispatch({ tipo: 'ESTABLECER_SE_HA_ENVIADO', valor: true });
      estado.nombre = ''
      estado.edad = ''
    }else{
      estado.seHaEnviado = false
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={estado.nombre} onChange={manejarCambioNombre} />
        {estado.errorNombre && <span>{estado.errorNombre}</span>}
      </div>
      <div>
        <label>Edad:</label>
        <input type="text" value={estado.edad} onChange={manejarCambioEdad} />
        {estado.errorEdad && <span>{estado.errorEdad}</span>}
      </div>
      <button type="submit">Enviar</button>
      {estado.seHaEnviado && <p>Formulario enviado con éxito</p>}
    </form>
  );
};

export default App;
