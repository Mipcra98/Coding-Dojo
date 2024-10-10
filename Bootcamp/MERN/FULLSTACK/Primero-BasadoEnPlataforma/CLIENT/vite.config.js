import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8192,       //Nos permite configurar el puerto para el cliente
    proxy: {
      '/api': {
        target: 'http://localhost:4096',    // Con este debemos apuntar al puerto del servidor, para que tome de acá en adelante las rutas
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
