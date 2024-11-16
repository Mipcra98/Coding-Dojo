import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Canciones from './pages/Canciones'
import CrearCancion from './components/CrearCancion'
import Cancion from './pages/Cancion'
import Playlists from './pages/Playlists'
import CrearPlaylist from './components/CrearPlaylist'
import Playlist from './pages/Playlist'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Canciones}></Route>
          <Route path='/playlists' Component={Playlists}></Route>
          <Route path='/song/:id' Component={Cancion}></Route>
          <Route path='/songs/:action' Component={CrearCancion}></Route>
          <Route path='/songs/:action/:id' Component={CrearCancion}></Route>
          <Route path='/playlist/:id' Component={Playlist}></Route>
          <Route path='/playlists/:action' Component={CrearPlaylist}></Route>
          <Route path='/playlists/:action/:id' Component={CrearPlaylist}></Route>
          <Route path='/*' element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
