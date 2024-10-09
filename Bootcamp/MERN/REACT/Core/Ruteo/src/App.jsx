import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Article from './components/Article'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/art/:id' element={<Article/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
