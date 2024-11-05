import Playlist from "../models/playlist.model.js";

const crearPlaylist = async (req, res) => {
    const { nombre, canciones } = req.body;
    try {
        // if (!canciones || canciones.length === 0) {
        //     res.status(400).json({ error: { errors: "La playlist debe tener al menos una canción" } });
        //     return;
        // }
        const playlist = new Playlist({ nombre, canciones });
        await playlist.save();
        res.status(201).json(playlist);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
        return;
    }
}

const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find();
        if (playlists.length === 0) {
            res.status(404).json({ message: "No se encontraron playlists" });
            return;
        }
        res.status(200).json(playlists);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
        return;
    }
}

const getByIdPlaylist = async (req, res) => {
    const { id } = req.params;
    try {
        const playlist = await Playlist.findById(id);
        if (!playlist) {
            res.status(404).json({ message: "No se encontró la playlist" });
            return;
        }
        res.status(200).json(playlist);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
        return;
    }
}

const getByNamePlaylist = async (req, res) => {
    const { nombre } = req.params;
    try {
        const playlist = await Playlist.findOne({ nombre: nombre });
        if (!playlist) {
            res.status(404).json({ message: `No se encontró la playlist con nombre: ${nombre}` });
            return;
        }
        res.status(200).json(playlist);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
        return;
    }
}

// const updatePlaylist = async (req, res) => {
//     const { id } = req.params;
//     const { nombre, canciones } = req.body;
//     try {
//         const playlist = await Playlist.findByIdAndUpdate(id, { nombre, canciones }, { new: true ,runValidators: true });
//         if (!playlist) {
//             res.status(404).json({ message: "No se encontró la playlist" });
//             return;
//         }
//         res.status(200).json({message: 'Se modificó la playlist correctamente'});
//         return;
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error });
//         return;
//     }
// }

const deletePlaylist = async (req, res) => {
    const { id } = req.params;
    try {
        const playlist = await Playlist.findByIdAndDelete(id);
        if (!playlist) {
            res.status(404).json({ message: "No se encontró la playlist" });
            return;
        }
        res.status(200).json({ message: 'Se eliminó la playlist correctamente' });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
        return;
    }
}

export default {
    crearPlaylist,
    getAllPlaylists,
    getByIdPlaylist,
    getByNamePlaylist,
    // actualizarPlaylist,
    deletePlaylist
}