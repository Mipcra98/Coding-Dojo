import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProveedorAuth } from './ContextoAuth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProveedorAuth>
      <App />
    </ProveedorAuth>
  </StrictMode>,
)
