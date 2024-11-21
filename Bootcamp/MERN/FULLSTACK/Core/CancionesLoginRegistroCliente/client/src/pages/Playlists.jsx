import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Grid2,  TextField, Typography } from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Playlists = () => {

    const navigate = useNavigate();
    const [playlists, setPlaylists] = useState([]);
    const [guardado, setGuardado] = useState([])
    const [errores, setErrores] = useState([]);
    const [buscado, setBuscado] = useState('');

    const cargarPlaylists = async () => {
        try {
            const response = await axios.get('/api/playlist');
            const data = response.data;
            setGuardado(data);
            setPlaylists(data);
            setErrores([]);
        } catch (error) {
            setErrores(error.response?.data?.message);
        }
    }

    const buscarPlaylist = (nombre) => {
        if (buscado != '') {
            const actual = guardado.filter((cancion) => cancion.nombre.includes(nombre))
            setPlaylists(actual)
        } else {
            setPlaylists(guardado)
        }
    }

    useEffect(() => {
        cargarPlaylists()
    },)

    return (
        <>
            <Typography variant='h4'>Lista de Playlists</Typography><TextField sx={{ borderRadius: 5, width: 600, mt: 3, mb: 3, ml: 40, mr: 40 }} label="Buscar Playlist" id="outlined-basic" value={buscado} onChange={(e) => (setBuscado(e.target.value), buscarPlaylist(e.target.value))} variant="outlined" />
            <Grid2 container spacing={3} sx={{ justifyContent: 'center' }}>
                {
                    errores?.length > 0 ? <Typography color='error' sx={{ fontWeight: 'bold' }}>{errores}</Typography> : playlists.length === 0 ? <Typography color='error' sx={{ fontWeight: 'bold' }}>No se encontraron canciones con el nombre {buscado}</Typography> : playlists?.map((playlist, id) => {
                        return (
                            <Card key={playlist._id} sx={{ width: 350, boxShadow: 5, p: 1 }}>
                                <CardActionArea onClick={() => { navigate(`/playlist/${playlist._id}`) }}>
                                    <LibraryMusicIcon sx={{ fontSize: 50, m: 1 }} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {playlist.nombre}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Incluye {playlist.canciones.length} canciones</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })
                }
            </Grid2>
        </>
    )
}

export default Playlists;