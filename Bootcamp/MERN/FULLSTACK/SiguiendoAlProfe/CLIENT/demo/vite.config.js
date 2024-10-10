import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4095,   //Configura el puerto que se quiere usar para el cliente
    proxy: {
      '/api': {
        target: 'http://localhost:4094',
        changeOrigin: false,
        secure: false,
      },
    },  //El PROXY permite configurar los predijos a las peticiones. por lo tanto el "target" hace referencia a la URI en donde se encuentra corriendo el Servidor
  },
});
