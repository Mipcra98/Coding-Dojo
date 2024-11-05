import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Stack, TextField, Typography, Button, Checkbox, Select, Grid2, FormGroup, FormControlLabel, FormHelperText, FormControl } from '@mui/material'
import SPHeaders from '../components/SongPlaylistHeader';

const CrearPlaylist = () => {
    const [form, setForm] = useState({ nombre: '', canciones: [], checked: false });
    const [canciones, setCanciones] = useState([]);
    const [errores, setErrores] = useState();

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/playlist', form);
            const data = response.data;
            const status = response.status;
            console.log(data, status);
            setErrores({})
            setForm({ nombre: '', canciones: [], checked: false });
        } catch (error) {
            console.log(error.response.data.error.errors);
            setErrores(error.response?.data?.error.errors)
        }
    }

    const listarCanciones = async () => {
        try {
            const response = await axios.get('/api/canciones');
            const data = response.data;
            // const status = response.status;
            // console.log(data, status);
            setCanciones(data);
        } catch (error) {
            console.log(error.response.data.message)
            setErrores(error.response?.data?.message)
        }
    }

    const handleAnhadirCancion = (cancionId) => {
        if (form.canciones.includes(cancionId)) {
            const canciones = form.canciones.filter(c => c !== cancionId);
            setForm({ ...form, canciones: canciones });
        } else {
            setForm({ ...form, canciones: [...form.canciones, cancionId] });
        }
    }

    useEffect(() => {
        listarCanciones();
    }, [])

    return (
        <>
            <SPHeaders />
            <Stack sx={{ ml: 30, mr: 30, mt: 5, mb: 5 }}>
                <Stack className="container">
                    <Typography variant='h1'>Crear Playlist</Typography>
                    <Stack spacing={2}>
                        <TextField
                            label="Nombre"
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            // placeholder='Nombre'
                            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                            error={errores?.nombre ? true : false}
                            helperText={errores?.nombre ? errores.nombre.message : ''}
                        />

                        {/* {form.canciones.length > 1 && <FormLabel component="legend">Escoge a 2</FormLabel>} */}
                        <FormControl
                            required
                            error={errores}
                            component="fieldset"
                            sx={{ m: 3 }}
                            variant="standard"
                        >
                            {/* <FormLabel component="legend">Pick two</FormLabel> */}
                            <FormGroup spacing={2} >
                                {
                                    canciones ? canciones.map((cancion, id) => {
                                        return (
                                            <FormControlLabel key={id}
                                                control={
                                                    <Checkbox key={cancion._id} checked={form.canciones.includes(cancion._id)} onChange={(e) => handleAnhadirCancion(cancion._id)} name={cancion.nombre} />
                                                }
                                                label={`${cancion.nombre} - ${cancion.genero} - - - by: ${cancion.artista}`}
                                            />
                                        )
                                    }) : <></>
                                }
                            </FormGroup>
                            {errores?.canciones && <FormHelperText>{errores.canciones.message}</FormHelperText>}
                        </FormControl>
                        <Button variant="contained" color="primary" onClick={formSubmit}>Crear Playlist</Button>
                    </Stack>
                </Stack>
            </Stack >
        </>
    )
}

export default CrearPlaylist;