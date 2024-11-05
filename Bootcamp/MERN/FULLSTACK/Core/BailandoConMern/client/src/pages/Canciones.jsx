import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SPHeaders from '../components/SongPlaylistHeader';
import { Grid2, ListItemText, Stack, Typography } from '@mui/material';
import AudioFileIcon from '@mui/icons-material/AudioFile';

const Canciones = () => {

    const navegar = useNavigate();

    const [lista, setLista] = useState([])

    const cargarlista = async () => {
        const respuesta = await axios.get('/api/canciones')
        const data = respuesta.data;
        // console.log(data);
        setLista(data);
    }

    useEffect(() => {
        cargarlista();
    }, [])

    return (
        <>
            <SPHeaders />
            <Stack sx={{ ml: 20, mr: 20, mt: 10, mb: 10 }} spacing={2}>
                <Typography variant='h2'>Lista de Canciones</Typography>
                <Grid2 container spacing={3}>
                    {lista.map((cancion) => {
                        return (
                            <Grid2
                                size={4}
                                onClick={() => { navegar(`/songs/${cancion._id}`) }}
                                key={cancion._id}
                            // disableGutters
                            >
                                <AudioFileIcon />
                                <ListItemText primary={cancion.nombre} secondary={cancion.artista} />
                            </Grid2>
                        )
                    })}
                </Grid2>
            </Stack >
        </>
    )

}

export default Canciones;