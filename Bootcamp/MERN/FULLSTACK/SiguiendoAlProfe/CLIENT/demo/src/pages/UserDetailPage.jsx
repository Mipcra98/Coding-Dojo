import { Button, Card, Container, Divider, FormControlLabel, Stack, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const UserDetailPage = () => {

    const { id } = useParams(); //Obtenemos el ID de la URL

    const navigate = useNavigate(); //Hook para navegar entre páginas

    //Utilizamos un State para almacenar los datos del usuario
    const [user, setUser] = useState({})

    const [editMode, setEditMode] = useState(false)

    //Función para obtener datos del usuario basado en su ID
    const getUser = async () => {
        const response = await axios.get(`/api/users/${id}`)
        const data = response.data
        setUser(data)
    }

    const handleUpdateUser = async () => {
        const response = await axios.put(`/api/users/${id}`, user)
        const data = response.data
        setUser(data)
        setEditMode(false)
    }

    //Utilizamos un Hook para que se ejecute la función getUser cuando se renderice el componente
    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
            <Container spacing={2}>
                <Typography variant="h3">
                    User Detail Page
                </Typography>

                <Card sx={{ p: 2 }} elevation={3}>
                    <FormControlLabel control={
                        <Switch
                            checked={editMode}
                            onChange={() => setEditMode(!editMode)}
                            color="primary"
                        />
                    } label="Edit Mode" />
                    <Divider />
                    <Stack sx={{ width: 300 }} spacing={2}>
                        <TextField
                            type="email"
                            placeholder="example@gmail.com"
                            variant="outlined"
                            label="Email"
                            value={user.email || ""}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            disabled={!editMode}
                        />
                        < TextField
                            type={!editMode ? "text" : "password"}
                            variant="outlined"
                            label="Password"
                            value={user.password || ""}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            disabled={!editMode}
                        />
                        {editMode ?
                            <Button variant="contained" color="primary" onClick={handleUpdateUser} >
                                Editar
                            </Button> :
                            <Button variant="contained" color="success" /* onClick={handleRegister} */ >
                                Eliminar
                            </Button>}
                    </Stack>
                </Card>
                <Button variant="contained" color="primary" onClick={() => navigate("/users")}>
                    Lista de usuarios
                </Button>
            </Container>
        </div>
    )
}

export default UserDetailPage;