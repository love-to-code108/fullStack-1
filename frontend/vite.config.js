import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  server:{
    proxy:{
      '/api': 'http://192.168.2.1:4000/',
    },
  },

  plugins: [react()],
})
