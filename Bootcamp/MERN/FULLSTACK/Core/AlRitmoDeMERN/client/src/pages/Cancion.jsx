import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SPHeaders from '../components/SongPlaylistHeader';
import { Avatar, Button, Grid2, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const Cancion = () => {

    const [cancion, setCancion] = useState([])
    const { id } = useParams();
    const [errores, setErrores] = useState([])
    const navegar = useNavigate();

    const cargarCancion = async () => {
        try {
            const respuesta = await axios.get(`/api/canciones/${id}`)
            const data = respuesta.data;
            setCancion(data);
            setErrores({})
        } catch (error) {
            setErrores(error.response?.data?.message)
        }
    }

    useEffect(() => {
        cargarCancion();
    }, [])

    return (
        <>
            <SPHeaders />
            <Stack spacing={2} sx={{ mt: 5, ml: 30, mr: 30, mb: 5 }}>
                <Typography variant='h3'>Detalles de la Canción</Typography>

                {errores.length > 0 ? <Typography variant='h6' color='error' sx={{ fontWeight: 'bold' }}>{errores}</Typography> :
                    < Grid2 >
                        <Stack key={cancion._id} spacing={2} sx={{ direction: 'column' }}>
                            <Grid2 container spacing={2} size={10} sx={{ alignItems: 'center' }}>
                                <Typography variant='h5'>Artista: {cancion.artista}</Typography>
                                <Avatar /* src={cancion.imagen} */ />
                            </Grid2>
                            <Typography variant='h5'>Nombre de la Canción: {cancion.nombre}</Typography>
                            <Typography variant='h6'>Género: {cancion.genero}</Typography>
                            <Typography variant='h6'>Duración: {cancion.duracion} seg.</Typography>
                            <Typography variant='h6'>Fecha de Lanzamiento: {dayjs(cancion.lanzamiento).format('DD/MM/YYYY')}</Typography>
                            <Button sx={{ backgroundColor: '#ff2f3f', color: 'white', fontSize: '1.2rem', fontWeight: '600', padding: '0.5rem 1rem', width: '300px' }} onClick={() => navegar(`/songs/edit/${cancion._id}`)}>Editar</Button>
                        </Stack>
                    </Grid2 >
                }
            </Stack >
        </>
    );
}

export default Cancion;