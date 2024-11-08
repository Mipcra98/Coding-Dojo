import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SPHeaders from '../components/SongPlaylistHeader';
import { Card, CardActionArea, CardContent, Grid2, TextField, Typography } from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Playlists = () => {
    const navigate = useNavigate();
    const [playlists, setPlaylists] = useState([]);
    const [errores, setErrores] = useState([]);
    const [busca, setBusca] = useState(false);
    const [playlist, setPlaylist] = useState('');
    const [buscado, setBuscado] = useState('');

    const cargarPlaylists = async () => {
        try {
            const response = await axios.get('/api/playlist');
            const data = response.data;
            setPlaylists(data);
            setErrores([]);
        } catch (error) {
            setErrores(error.response?.data?.message);
        }
    }

    const buscarPlaylist = async (nombre) => {
        try {
            if (nombre == '') {
                setBusca(false);
                setBuscado('')
                setPlaylist('');
                return
            }
            setBusca(true);
            const response = await axios.get(`/api/playlist/name/${nombre}`);
            const data = response.data;
            setPlaylist(data);
            setErrores([]);
        } catch (error) {
            setErrores(error.response?.data?.message);
        }
    }

    useEffect(() => {
        if (!busca && !buscado) {
            cargarPlaylists()
        }
    })

    return (
        <>
            <SPHeaders />
            <TextField sx={{ borderRadius: 5, width: 600, mt: 3, mb: 3, ml: 40, mr: 40 }} label="Buscar Playlist" id="outlined-basic" value={buscado} onChange={(e) => setBuscado(e.target.value)} variant="outlined" onKeyDown={(e) => e.key === 'Enter' && buscarPlaylist(buscado)} />
            <Grid2 container sx={{ ml: 20, mr: 20, mt: 0, mb: 3, justifyContent: 'center' }} spacing={3}>
                {
                    errores?.length > 0 ? <Typography color='error' sx={{ fontWeight: 'bold' }}>{errores}</Typography> : !playlist ? playlists?.map((playlist, id) => {
                        return (
                            <Card key={playlist._id} sx={{ width: 350, boxShadow: 5, p: 1 }}>
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
                    }) :
                        <Card key={playlist._id} sx={{ width: 350, boxShadow: 5, p: 1 }}>
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

                }
            </Grid2>
        </>
    )
}

export default Playlists;