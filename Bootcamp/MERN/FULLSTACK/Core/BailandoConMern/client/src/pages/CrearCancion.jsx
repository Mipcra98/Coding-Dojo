import axios from 'axios';
import React, { useState } from 'react';
import { Stack, TextField, Typography, Button } from '@mui/material'
import SPHeaders from '../components/SongPlaylistHeader';


//Importamos todo lo necesario para hacer funcionar una demo de "DatePicker" de MaterialUI
//Para instalarlo, se utilizó "npm install @mui/x-date-pickers"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

const CrearCancion = () => {
    const [form, setForm] = useState({ nombre: '', artista: '', genero: '', duracion: 15, lanzamiento: dayjs() });

    const [errores, setErrores] = useState();

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/canciones', form);
            const data = response.data;
            const status = response.status;
            console.log(data, status);
            setErrores({})
            setForm({ nombre: '', artista: '', genero: '', duracion: 15, lanzamiento: dayjs() });
        } catch (error) {
            console.log(error.response.data.errors)
            setErrores(error.response?.data?.errors)
        }
    }

    return (
        <>
            <SPHeaders />
            <Stack sx={{ ml: 30, mr: 30, mt: 5, mb: 5 }}>
                <Stack className="container">
                    <Typography variant='h1'>Crear Canción</Typography>
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
                        <TextField
                            label="Artista"
                            type="text"
                            name="artista"
                            // placeholder='Artista'
                            value={form.artista}
                            onChange={(e) => setForm({ ...form, artista: e.target.value })}
                            error={errores?.artista ? true : false}
                            helperText={errores?.artista ? errores.artista.message : ''}
                        />
                        <TextField
                            label="Genero"
                            type="text"
                            name="genero"
                            // placeholder='Genero'
                            value={form.genero}
                            onChange={(e) => setForm({ ...form, genero: e.target.value })}
                            error={errores?.genero ? true : false}
                            helperText={errores?.genero ? errores.genero.message : ''}
                        />
                        <TextField
                            label="Duracion"
                            type="number"
                            name='duracion'
                            placeholder='Duracion'
                            value={form.duracion}
                            onChange={(e) => setForm({ ...form, duracion: e.target.value })}
                            error={errores?.duracion ? true : false}
                            helperText={errores?.duracion ? errores.duracion.message : ''}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="Fecha de Lanzamiento"
                                    type='date'
                                    name='lanzamiento'
                                    placeholder='Fecha de lanzamiento'
                                    value={dayjs(form.lanzamiento) || dayjs()}
                                    onChange={(e) => setForm({ ...form, lanzamiento: e.format('MM/DD/YYYY') })}
                                    // error={errores?.lanzamiento ? true : false}
                                    // helperText={errores?.lanzamiento ? errores.lanzamiento.message : ''}
                                    slotProps={{
                                        textField: {
                                            error: errores?.lanzamiento ? true : false,
                                            helperText: errores?.lanzamiento ? errores.lanzamiento.message : "",
                                        },
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <Button variant="contained" color="primary" onClick={formSubmit}>Crear Canción</Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default CrearCancion;