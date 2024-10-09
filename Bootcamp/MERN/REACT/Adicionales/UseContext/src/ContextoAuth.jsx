import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const ContextoAuth = createContext();

// Proveedor del contexto
export const ProveedorAuth = ({ children }) => {
    const [estaAutenticado, setEstaAutenticado] = useState(false);

    const iniciarSesion = () => setEstaAutenticado(true);
    const cerrarSesion = () => setEstaAutenticado(false);

    return (
        <ContextoAuth.Provider value={{ estaAutenticado, iniciarSesion, cerrarSesion , usuario:"John"}}>
            {children}
        </ContextoAuth.Provider>
    );
};

// Hook para usar el contexto
export const usarAuth = () => {
    return useContext(ContextoAuth);
};