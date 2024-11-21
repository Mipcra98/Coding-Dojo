import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Canciones from './pages/Canciones'
import CrearCancion from './components/CrearCancion'
import Cancion from './pages/Cancion'
import Playlists from './pages/Playlists'
import CrearPlaylist from './components/CrearPlaylist'
import Playlist from './pages/Playlist'
import Login from './pages/Login'
import Registro from './components/Registro'
import UserConext from './components/UserContext'
import Header from './components/Header'

const UserContextProvider = UserConext.UserContextProvider

function App() {

  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path='/' Component={Header}>
              <Route path='/' Component={Login}></Route>
              <Route path='/register' Component={Registro}></Route>
              <Route path='/songs' Component={Canciones}></Route>
              <Route path='/register' Component={Registro}></Route>
              <Route path='/playlists' Component={Playlists}></Route>
              <Route path='/song/:id' Component={Cancion}></Route>
              <Route path='/songs/:action' Component={CrearCancion}></Route>
              <Route path='/songs/:action/:id' Component={CrearCancion}></Route>
              <Route path='/playlist/:id' Component={Playlist}></Route>
              <Route path='/playlists/:action' Component={CrearPlaylist}></Route>
              <Route path='/playlists/:action/:id' Component={CrearPlaylist}></Route>
              <Route path='/*' element={<h1>404</h1>}></Route>
            </Route>
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
