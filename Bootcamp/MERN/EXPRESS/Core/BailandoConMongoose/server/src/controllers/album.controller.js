//importamos el Modelo de Album
import Album from "../models/album.model.js";


//Creamos un nuevo Album
const createAlbum = async (req, res) => {
    try {
        const newAlbum = new Album(req.body);
        const savedAlbum = await newAlbum.save();
        res.status(201).json(savedAlbum);
    } catch (error) {
        console.log('Ha ocurrido un error', error)
        res.status(500).json({ message: error.message });
    }
}

//Obtenemos todos los Albums
const getAllAlbums = async (req, res) => {

    // const album= {title: "El titulo",artist:"artista",year:2020,genre:"rock"}
    // const newAlbum = new Album(album);
    // await newAlbum.save();


    try {
        const albums = await Album.find();
        console.log(albums);
        if (albums.length!==0) {
            res.status(200).json(albums);
        } else {
            res.status(404).json({ message: 'No se encontraron albums' });
        }
    } catch (error) {
        console.log('Ha ocurrido un error', error)
        res.status(500).json({ message: error.message });
    }
}

//Obtenemos un Album por ID
const getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (album) {
            res.status(200).json(album);
        } else {
            res.status(404).json({ message: 'No se encontro el album' });
        }
    } catch (error) {
        console.log('Ha ocurrido un error', error)
        res.status(500).json({ message: error.message });
    }
}

//Actualizamos un Album por ID
const updateAlbumById = async (req, res) => {
    const opciones = { new: true, runValidators: true };
    try {
        const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, opciones);
        res.status(200).json(updatedAlbum);
    } catch (error) {
        console.log('Ha ocurrido un error', error)
        res.status(500).json({ message: error.message });
    }
}

//Eliminamos un Album por ID
const deleteAlbumById = async (req, res) => {
    try {
        const deletedAlbum = await Album.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Se borró el registro existosamente" });
    } catch (error) {
        console.log('Ha ocurrido un error', error)
        res.status(500).json({ message: error.message });
    }
}

//Exportamos los métodos
export default {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbumById,
    deleteAlbumById
}