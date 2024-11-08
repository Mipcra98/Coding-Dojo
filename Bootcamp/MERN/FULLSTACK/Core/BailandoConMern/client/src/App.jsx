import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Canciones from './pages/Canciones'
import CrearCancion from './pages/CrearCancion'
import Cancion from './pages/Cancion'
import Playlists from './pages/Playlists'
import CrearPlaylist from './pages/CrearPlaylist'
import Playlist from './pages/Playlist'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Canciones}></Route>
          <Route path='/playlists' Component={Playlists}></Route>
          <Route path='/songs/new' Component={CrearCancion}></Route>
          <Route path='/songs/:id' Component={Cancion}></Route>
          {/* <Route path='/songs/name/:nombre' element={<h1>Home</h1>}></Route> */}
          <Route path='/playlists/new' Component={CrearPlaylist}></Route>
          <Route path='/playlists/:id' Component={Playlist}></Route>
          {/* <Route path='/playlists/name/:nombre' element={<h1>Contact</h1>}></Route> */}
          <Route path='/*' element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
