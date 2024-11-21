import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5050',
        changeOrigin: true,
        secure: false,
        selfHandleResponse: false,
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            if (proxyRes.statusCode === 401) {
              // Si el servidor responde con un 401, redirigimos al usuario a la página de login
              res.writeHead(401, {
                'Location': '/'
              });
              res.end();
              return;
            }
            // continue normally
            proxyRes.pipe(res);
          });
        }
      },
    },
  }
})
