import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import AcercaDe from './components/AcercaDe';
import Navegacion from './components/Navegacion';

const App = () => (
  <Router>
    <Navegacion/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/acerca" element={<AcercaDe />} />
    </Routes>
  </Router>
);

export default App;