import { Button, Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const UserDetailPage = () => {

    const { id } = useParams(); //Obtenemos el ID de la URL

    const navigate = useNavigate(); //Hook para navegar entre páginas

    //Utilizamos un State para almacenar los datos del usuario
    const [user, setUser] = useState({})

    //Función para obtener datos del usuario basado en su ID
    const getUser = async () => {
        const response = await axios.get(`api/users/${id}`)
        const data = response.data
        setUser(data)
    }

    //Utilizamos un Hook para que se ejecute la función getUser cuando se renderice el componente
    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
            <Typography variant="h3">
                User Detail Page {id}
            </Typography>

            <Card>
                <Typography variant="h5">
                    user.email: {user.email}
                </Typography>
                <Typography variant="h6">
                    user.password: {user.password}
                </Typography>
            </Card>

            <Button variant="contained" color="primary" onClick={() => navigate("/users")}>
                Lista de usuarios
            </Button>
        </div>
    )
}

export default UserDetailPage;