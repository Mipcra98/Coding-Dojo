import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Registro = () => {

    const [form, setForm] = useState({ nombre: "", apellido: "", email: "", contrasena: "" })

    const [errores, setErrores] = useState([])

    const navegar = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("/api/usuario", form)
            setForm({ nombre: "", apellido: "", email: "", contrasena: "" })
            setErrores([])
            navegar("/")
        } catch (err) {
            setErrores(err.response.data.error.errors)
            console.log(err.response.data)
        }
    }

    return (
        <>
            <Stack className="containter" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh"
            }} spacing={2}>
                <Typography variant="h3">Registrar Usuario</Typography>
                <Container className="container" sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}>
                    <TextField
                        label="Nombre"
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        error={errores?.nombre ? true : false}
                        helperText={errores?.nombre ? errores.nombre.message : ""}
                    ></TextField>
                    <TextField
                        label="Apellido"
                        type="text"
                        name="apellido"
                        value={form.apellido}
                        onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                        error={errores?.apellido ? true : false}
                        helperText={errores?.apellido ? errores.apellido.message : ""}
                    ></TextField>
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        error={errores?.email ? true : false}
                        helperText={errores?.email ? errores.email.message : ""}
                    ></TextField>
                    <TextField
                        label="Contraseña"
                        type="password"
                        name="contrasena"
                        value={form.contrasena}
                        onChange={(e) => setForm({ ...form, contrasena: e.target.value })}
                        error={errores?.contrasena ? true : false}
                        helperText={errores?.contrasena ? errores.contrasena.message : ""}
                    ></TextField>
                    <TextField
                        label="Confirmación de contraseña"
                        type="password"
                        name="confirmarContrasena"
                        value={form.confirmarContrasena}
                        onChange={(e) => setForm({ ...form, confirmarContrasena: e.target.value })}
                        error={errores?.confirmarContrasena ? true : false}
                        helperText={errores?.confirmarContrasena ? errores?.confirmarContrasena?.message : ""}
                    ></TextField>
                    <Button variant="contained" onClick={handleSubmit} sx={{ width: '300px', margin: 'auto' }}>Registrarse</Button>
                </Container>
                <Typography variant="h6" color="textSecondary" align="center">Ya tiene una cuenta? <Link className="underline text-black" to={'/login'}>Iniciar sesión</Link></Typography>
            </Stack>
        </>
    )
}


export default Registro