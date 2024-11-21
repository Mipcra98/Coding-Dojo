import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(null);
    const [usuarioCargado, setUsuarioCargado] = useState(false);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        if (!usuario) {
            axios.get('/api/sesion/userData').then(async ({ data }) => {
                const userData = await axios.get(`/api/usuario/${data.id}`)
                setUsuario(userData.data)
                setUsuarioCargado(true)
            })
        }
    }, [usuario ,usuarioCargado])

    return (
        <UserContext.Provider value={{ usuario, setUsuario, usuarioCargado, setUsuarioCargado }}>
            {children}
        </UserContext.Provider>
    )
}

export default {
    UserContext,
    UserContextProvider
};