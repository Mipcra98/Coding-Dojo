import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormularioUsuario from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormularioUsuario />
  </StrictMode>,
)
