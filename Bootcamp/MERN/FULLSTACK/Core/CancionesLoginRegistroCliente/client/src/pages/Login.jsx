import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import UserContext from "../components/UserContext"

const Login = () => {

    const { setUsuario, setUsuarioCargado } = useContext(UserContext.UserContext)

    const [form, setForm] = useState({ email: "", contrasena: "" })

    const [errores, setErrores] = useState([])

    const navegar = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/sesion/login', form)
            setUsuario(null)
            setUsuarioCargado(false)
            // axios.get('/api/sesion/userData').then(async ({ data }) => {
            //     const userData = await axios.get(`/api/usuario/${data.id}`)
            //     setUsuario(userData.data)
            //     setUsuarioCargado(true)
            // })
            setForm({ email: "", contrasena: "" })
            setErrores([])
            navegar("/songs")
        } catch (err) {
            setErrores(err?.response?.data?.error?.errors)
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
                <Typography variant="h3">Login</Typography>
                <Container className="container" sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}>
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
                    <Button variant="contained" onClick={handleSubmit} sx={{ width: '300px', margin: 'auto' }}>Iniciar sesión</Button>
                </Container>
                <Typography variant="h6" color="textSecondary" align="center">Aún no estas registrado? <Link className="underline text-black" to={'/register'}>Registrese ahora</Link></Typography>
            </Stack>
        </>
    )
}


export default Login