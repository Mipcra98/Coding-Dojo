import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Article from './components/Article'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/art/:id' element={<Article/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
