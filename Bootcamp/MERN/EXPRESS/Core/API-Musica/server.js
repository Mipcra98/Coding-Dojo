//Importaciones
import express from "express";
const PORT = 3000;

//importamos el generador de canciones y playlist aleatorias
import SongPlaylist from "./SongPlaylistGenerator.js"
//creamos 5 canciones y 3 playlist
const songs = [];
for (let i = 0; i < 5; i++) {
    songs.push(SongPlaylist.crearCancion())
    songs[i].id = i;
}

const playlists = [];
for (let i = 0; i < 3; i++) {
    playlists.push(SongPlaylist.crearPlaylist(3)); //el numero 3 es el numero de canciones que tendra la playlist
    for (let j = 0; j < playlists[i].songs.length; j++) {
        playlists[i].songs[j].id = j;
    }
    playlists[i].id = i;
}

const app = express();          //importamos express para crear el servidor
app.use(express.json());        //permitimos el uso de json en el servidor





//Rutas para las CANCIONES
app.get("/canciones", async (req, res) => {
    try {
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar las canciones' });
        console.error(error);
    }
});

app.get("/canciones/:id", async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(songs[parseInt(id)]);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'No se encontro la cancion con esa ID' });
    }
})

app.post("/canciones", async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        songs.push(data);
        songs[songs.length - 1].id = songs.length - 1;
        res.status(200).json({ message: 'Cancion creada' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la cancion' });
    }
})

app.put("/canciones/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    if (data.id == id) {
        try {
            songs[parseInt(id)] = data;
            res.status(200).json({ message: 'Cancion actualizada' });
        } catch (error) {
            console.error(error);
            res.status(404).json({ message: 'No se encontro la cancion' });
        }
    }else{
        res.status(400).json({ message: 'No puedes modificar el ID de la cancion' });
    }
})

app.delete("/canciones/:id", async (req, res) => {
    const { id } = req.params;
    try {
        songs.splice(parseInt(id), 1);
        res.status(200).json({ message: 'Cancion eliminada' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'No se encontro la cancion' });
    }
})








//Rutas para playlist
app.get("/playlist", async (req, res) => {
    try {
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar las playlist' });
        console.error(error);
    }
});

app.get("/playlist/:id", async (req, res) => {
    const { id } = req.params;
    if (playlists[parseInt(id)]) {
        res.status(200).json(playlists[id]);
    } else {
        res.status(404).json({ message: 'No se encontro la playlist' });
    }
})

app.post("/playlist", async (req, res) => {
    try {
        const data = req.body;
        playlists.push(data);
        playlists[playlists.length - 1].id = playlists.length - 1;
        res.status(200).json({ message: 'Playlist creada' });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la playlist' });
    }
})

app.put("/playlist/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    if (data.id == id) {
        try {
            playlists[parseInt(id)] = data;
            res.status(200).json({ message: 'Playlist actualizada' });
        } catch (error) {
            console.error(error);
            res.status(404).json({ message: 'No se encontro la playlist' });
        }
    }else{
        res.status(404).json({ message: 'No puedes cambiar el ID de la Playlist' });
    }
})

app.delete("/playlist/:id", async (req, res) => {
    const { id } = req.params;
    try {
        playlists.splice(parseInt(id), 1);
        res.status(200).json({ message: 'Playlist eliminada' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'No se encontro la Playlist' });
    }
})
// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})