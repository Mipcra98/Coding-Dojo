import { faker } from "@faker-js/faker";

const crearCancion = () => {
    const song = {
        id: faker.number.int({ min: 0, max: 100}),
        title: faker.music.songName(),
        artist: faker.music.artist(),
        album: faker.music.album(),
        duration: `${faker.number.int({ min: 0, max: 7 })}:${faker.number.int({ min: 0, max: 59 })}`,
        genre: faker.music.genre(),
        year: faker.number.int({ min: 1900, max: 2022 }),
    };
    return song;
};

const crearPlaylist = (cantidad) => {
    const playlist = {};
    playlist.id = faker.number.int({ min: 0, max: 100});
    playlist.name = faker.lorem.words(4);
    playlist.description = faker.lorem.sentence();
    playlist.songs = [];
    for (let i = 0; i < cantidad; i++) {
        playlist.songs.push(crearCancion());
    }
    return playlist;
}

export default {crearCancion,crearPlaylist};