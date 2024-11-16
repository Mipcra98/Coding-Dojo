import { Link } from 'react-router-dom';

const SPHeaders = () => {
    return (
        <header>
            <nav>
                <Link to="/">Canciones</Link>
                <Link to="/playlists">Playlists</Link>
                <Link to="/songs/new">Nueva Canción</Link>
                <Link to="/playlists/new">Nueva Playlist</Link>
            </nav>
        </header>
    );
}

export default SPHeaders;