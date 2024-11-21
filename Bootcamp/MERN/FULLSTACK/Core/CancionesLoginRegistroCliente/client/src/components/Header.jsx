import { Breadcrumbs, Button, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import UserContext from './UserContext';
import { useContext, useEffect } from 'react';

const Header = () => {

    const { usuario, setUsuario } = useContext(UserContext.UserContext)

    const navegar = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await axios.delete('/api/sesion/logout')
            setUsuario(null)
            navegar('/')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
    }, [])

    return (
        <>
            <Typography variant='h4' sx={{ flexDirection: 'row', gap: '2rem', padding: '1rem', backgroundColor: '#3f3f3f', color: 'white', textAlign: 'center', textShadow: '2px 2px 20px white' }}>Canciones con Login y Registro, en Servidor y Cliente</Typography>
            {usuario ?
                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-around', gap: '2rem', alignItems: 'center', padding: '1rem', backgroundColor: '#3f3f3f' }}>
                    <Breadcrumbs separator=''>
                        <Button onClick={() => navegar('/songs')} sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Canciones</Button>
                        <Button onClick={() => navegar('/playlists')} sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Playlists</Button>
                        <Button onClick={() => navegar('/songs/new')} sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Nueva Canción</Button>
                        <Button onClick={() => navegar('/playlists/new')} sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Nueva Playlist</Button>
                    </Breadcrumbs>
                    <Breadcrumbs separator=''>
                        <Typography variant='h6' sx={{ ml: 'auto', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }} >{usuario?.nombre} - {usuario?.apellido}</Typography>
                        <Button onClick={handleLogout} sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Logout</Button>
                    </Breadcrumbs>
                </Stack>
                :
                <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: '2rem', alignItems: 'center', padding: '1rem', backgroundColor: '#3f3f3f' }}>
                    <Button onClick={() => navegar('/register')} sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}>Registrarse</Button>
                    <Button onClick={() => navegar('/')} sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}>Login</Button>
                </Stack>
            }
            <Stack sx={{ ml: 20, mr: 20, mt: 10, mb: 3 }} spacing={2}>
                <Outlet />
            </Stack>
        </>
    );
}

export default Header;