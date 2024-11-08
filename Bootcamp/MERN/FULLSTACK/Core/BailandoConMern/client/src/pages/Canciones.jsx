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
    const [guardado, setGuardado] = useState([])
    const [buscado, setBuscado] = useState('')

    const cargarlista = async () => {
        try {
            const respuesta = await axios.get('/api/canciones')
            const data = respuesta.data;
            setLista(data);
            setGuardado(data);
            setErrores([])
        } catch (error) {
            setErrores(error.response?.data?.message);
        }
    }

    const buscarCancion = (nombre) => {
        if (buscado != '') {
            const actual = guardado.filter((cancion) => cancion.nombre.includes(nombre))
            setLista(actual)
        } else {
            setLista(guardado)
        }
    }

    useEffect(() => {
        if (!buscado) {
            cargarlista()
        }
    }, [])

    return (
        <>
            <SPHeaders />
            <TextField sx={{ borderRadius: 5, width: 600, mt: 3, mb: 3, ml: 40, mr: 40 }} label="Buscar Cancion" id="outlined-basic" value={buscado} onChange={(e) => (setBuscado(e.target.value), buscarCancion(e.target.value))} variant="outlined"/>
            <Stack sx={{ ml: 20, mr: 20, mt: 0, mb: 3 }} spacing={2}>
                <Typography variant='h4'>Lista de Canciones</Typography>
                <Grid2 container spacing={3} sx={{ justifyContent: 'center' }}>
                    {
                        errores?.length > 0 ? <Typography color='error' sx={{ fontWeight: 'bold' }}>{errores}</Typography> : lista.length === 0 ? <Typography color='error' sx={{ fontWeight: 'bold' }}>No se encontraron canciones con el nombre {buscado}</Typography> : lista?.map((cancion, index) => {
                            return (
                                <Card key={index} sx={{ boxShadow: 3, width: 120, p: 1 }}
                                    size={4}
                                    onClick={() => { navegar(`/songs/${cancion._id}`) }}>
                                    <AudioFileIcon />
                                    <ListItemText primary={cancion.nombre} secondary={cancion.artista} />
                                </Card>
                            )
                        })
                    }
                </Grid2>
            </Stack >
        </>
    )

}

export default Canciones;