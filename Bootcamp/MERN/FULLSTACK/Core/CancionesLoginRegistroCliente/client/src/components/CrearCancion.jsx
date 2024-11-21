import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Stack, TextField, Typography, Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';


//Importamos todo lo necesario para hacer funcionar una demo de "DatePicker" de MaterialUI
//Para instalarlo, se utilizó "npm install @mui/x-date-pickers"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

const CrearCancion = () => {

    const navegar = useNavigate();

    const { action, id } = useParams()

    const [form, setForm] = useState({ nombre: '', artista: '', genero: '', duracion: 0, lanzamiento: dayjs().add(-1, 'day') });

    const [errores, setErrores] = useState();

    const formReset = () => {
        setErrores({})
        setForm({ nombre: '', artista: '', genero: '', duracion: 0, lanzamiento: dayjs().add(-1, 'day') });
    }

    const cargarForm = async () => {
        try {
            const response = await axios.get(`/api/canciones/${id}`);
            const data = response.data;
            setForm(data);
        } catch (error) {
            setErrores(error)
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const intento = action === 'edit' ?
                await axios.patch(`/api/canciones/${id}`, form) :
                await axios.post('/api/canciones', form);
            formReset();
            navegar('/');
        } catch (error) {
            setErrores(error.response?.data?.error.errors)
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`/api/canciones/${id}`);
            navegar('/');
        } catch (error) {
            setErrores(error)
        }
    }

    useEffect(() => {
        if (id && action === 'edit' && form.nombre === '') cargarForm();
    })

    return (
        <>
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
                    <Button variant="contained" color="primary" onClick={formSubmit} sx={{ fontSize: '1.2rem', fontWeight: '600', padding: '0.5rem 1rem', width: '300px' }}>{action !== 'edit' ? 'Crear Canción' : 'Editar canción'}</Button>
                    {action === 'edit' ? <Button variant="contained" color="error" onClick={handleDelete} sx={{ fontSize: '1.2rem', fontWeight: '600', padding: '0.5rem 1rem', width: '300px' }}>Eliminar Canción</Button> : ''}
                </Stack>
            </Stack>
        </>
    )
}

export default CrearCancion;