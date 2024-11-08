import axios from 'axios';
import { Stack, Typography, Grid2, Card } from '@mui/material';
import { useEffect, useState } from 'react';
import SPHeaders from '../components/SongPlaylistHeader';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const Playlist = () => {
    const { id } = useParams()

    const navegar = useNavigate()

    const [errores, setErrores] = useState([])

    const [datosP, setDatosP] = useState([])

    const obtenerPlaylist = async () => {
        try {
            const respuesta = await axios.get(`/api/playlist/${id}`)
            const data = respuesta.data;
            const texto = data.canciones.map(async (cancion, index) => {
                const cancionres = await axios.get(`/api/canciones/${cancion}`)
                const canciondata = cancionres.data;
                data.canciones[index] = canciondata
            })
            const setter = await Promise.all(texto).then(() => {
                setDatosP(data)
            })

            setErrores([])
        } catch (error) {
            console.log(error)
            setErrores(error)
        }
    }

    useEffect(() => {
        obtenerPlaylist()
    }, [])

    return (
        <>
            <SPHeaders />
            <Stack sx={{ ml: 20, mr: 20, mt: 10, mb: 10 }} spacing={2}>
                <Typography variant='h3'>Detalles de la Playlist</Typography>

                {errores.length > 0 ? <Typography variant='h6' color='error' sx={{ fontWeight: 'bold' }}>{errores}</Typography> :
                    < Grid2 >
                        <Stack key={datosP._id} spacing={2} sx={{ direction: 'column' }}>
                            <Grid2 container spacing={2} size={10} sx={{ alignItems: 'center' }}>
                                <Typography variant='h5'>Nombre de la Playlist: {datosP.nombre}</Typography>
                            </Grid2>
                            <Typography variant='h5'>Canciones incluidas en la Playlist </Typography>
                            {
                                datosP.canciones ?
                                    datosP.canciones?.map((cancion, index) => {
                                        return (
                                            <Card key={index} sx={{ p: 1, boxShadow: 3 }}>
                                                <Typography variant='h5'>Nombre de la canción: {cancion.nombre}</Typography>
                                                <Typography variant='h6'>Género: {cancion.genero}</Typography>
                                                <Typography variant='h5'>Artista: {cancion.artista}</Typography>
                                                <Typography variant='h6' sx={{ fontSize: 12 }} onClick={() => navegar(`/songs/${cancion._id}`)}>Ház click aquí si deseas ver más detalles de la canción</Typography>
                                            </Card>
                                        )
                                    })
                                    : ''
                            }
                        </Stack>
                    </Grid2 >
                }
            </Stack>
        </>
    )
}

export default Playlist