import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SPHeaders from '../components/SongPlaylistHeader';
import { Card, CardActionArea, CardContent, Grid2, Stack, Typography } from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Playlists = () => {
    const navigate = useNavigate();
    const [playlists, setPlaylists] = useState([]);
    const [errores, setErrores] = useState([]);

    const cargarPlaylists = async () => {
        try {
            const response = await axios.get('/api/playlist');
            const data = response.data;
            setPlaylists(data);
            // console.log(data);
            setErrores([]);
        } catch (error) {
            // console.log(error.response.data.message);
            setErrores(error.response?.data?.message);
        }
    }

    useEffect(() => {
        cargarPlaylists();
    })

    return (
        <>
            <SPHeaders />
            <Stack sx={{ ml: 20, mr: 20, mt: 10, mb: 10 }} spacing={3}>
                {
                    errores.length > 0 ? <Typography color='error' sx={{ fontWeight: 'bold' }}>{errores}</Typography> :
                        playlists.map((playlist, id) => {
                            return (
                                <Card key={playlist._id} sx={{ maxWidth: 350, boxShadow: 5, p: 1 }}>
                                    <CardActionArea onClick={() => { navigate(`/playlists/${playlist._id}`) }}>
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
            </Stack>
        </>
    )
}

export default Playlists;