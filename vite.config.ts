import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',  // Accepte les connexions depuis n'importe quelle adresse
    port: 5173,        // Le port où ton serveur fonctionne
  },
});
