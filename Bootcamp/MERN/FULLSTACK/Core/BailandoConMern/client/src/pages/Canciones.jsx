import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SPHeaders from '../components/SongPlaylistHeader';
import { Card, Grid2, ListItemText, Stack, TextField, Typography } from '@mui/material';
import AudioFileIcon from '@mui/icons-material/AudioFile';

const Canciones = () => {

    const navegar = useNavigate();

    const [lista, setLista] = useState([])
    const [errores, setErrores] = useState([])
    const [unidad, setUnidad] = useState('')
    const [busca, setBusca] = useState(false)
    const [buscado, setBuscado] = useState('')

    const cargarlista = async () => {
        try {
            const respuesta = await axios.get('/api/canciones')
            const data = respuesta.data;
            setLista(data);
            setErrores([])
        } catch (error) {
            setErrores(error.response?.data?.message);
        }
    }

    const buscarCancion = async (nombre) => {
        try {
            if (nombre == '') {
                setBusca(false);
                setBuscado('')
                setUnidad('');
                return
            }
            setBusca(true);
            const response = await axios.get(`/api/canciones/name/${nombre}`);
            const data = response.data;
            setUnidad(data);
            setErrores([]);
        } catch (error) {
            setErrores(error.response?.data?.message);
        }

    }

    useEffect(() => {
        if (!busca && !buscado) {
            cargarlista()
        }
    }, [])

    return (
        <>
            <SPHeaders />
            <TextField sx={{ borderRadius: 5, width: 600, mt: 3, mb: 3, ml: 40, mr: 40 }} label="Buscar Playlist" id="outlined-basic" value={buscado} onChange={(e) => setBuscado(e.target.value)} variant="outlined" onKeyDown={(e) => e.key === 'Enter' && buscarCancion(buscado)} />
            <Stack sx={{ ml: 20, mr: 20, mt: 0, mb: 3, justifyContent: 'center' }} spacing={2}>
                <Typography variant='h2'>Lista de Canciones</Typography>
                <Grid2 container spacing={3} sx={{ justifyContent: 'center' }}>
                    {
                        errores?.length > 0 ? <Typography color='error' sx={{ fontWeight: 'bold' }}>{errores}</Typography> : !unidad ? lista?.map((cancion, index) => {
                            return (
                                <Card key={index} sx={{ boxShadow: 3, width: 120, p: 1 }}
                                    size={4}
                                    onClick={() => { navegar(`/songs/${cancion._id}`) }}>
                                    <AudioFileIcon />
                                    <ListItemText primary={cancion.nombre} secondary={cancion.artista} />
                                </Card>
                            )
                        }) :
                            <Card key={unidad._id} sx={{ boxShadow: 3, width: 120, p: 1 }}
                                size={4}
                                onClick={() => { navegar(`/songs/${unidad._id}`) }}>
                                <AudioFileIcon />
                                <ListItemText primary={unidad.nombre} secondary={unidad.artista} />
                            </Card>
                    }
                </Grid2>
            </Stack >
        </>
    )

}

export default Canciones;