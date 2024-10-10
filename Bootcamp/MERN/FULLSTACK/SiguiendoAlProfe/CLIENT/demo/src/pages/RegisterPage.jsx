import { Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {

    const [formulario, setFormulario] = useState({})

    const handleRegister = async () => {
        try {
            const response = await axios.post("/api/users", formulario)     //Petición de creación al Backend
            const data = response.data
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Typography variant="h2">
                Register Page
            </Typography>
            <Stack sx={{ width: 300 }} spacing={2}>
                <TextField
                    type="email"
                    placeholder="example@gmail.com"
                    variant="outlined"
                    label="Email"
                    value={formulario.email || ""}
                    onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
                />
                < TextField
                    type="password"
                    variant="outlined"
                    label="Password"
                    value={formulario.password || ""}
                    onChange={(e) => setFormulario({ ...formulario, password: e.target.value })}
                />
                <Button variant="contained" color="primary" onClick={handleRegister}>Registrarse</Button>
            </Stack>
            <Link to="/users">Ver usuarios</Link>
        </div>
    )
}

export default Register;