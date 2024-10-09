import React from 'react';
import { usarAuth } from './ContextoAuth';

const PerfilUsuario = () => {
    const { estaAutenticado, iniciarSesion, cerrarSesion, usuario} = usarAuth();

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <p>Usuario: {usuario}</p>
            <p>Estado: {estaAutenticado ? 'Conectado' : 'Desconectado'}</p>
            {estaAutenticado ?
                <button onClick={cerrarSesion}>Cerrar Sesión</button>    :
                <button onClick={iniciarSesion}>Iniciar Sesión</button>
            }
        </div>
    );
};

export default PerfilUsuario;