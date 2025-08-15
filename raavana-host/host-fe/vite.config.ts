import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";


export default defineConfig({
  plugins: [
    react(),
    federation({
            name: 'host-fe',
            remotes: {
                ui_components_fe:"http://localhost:5174/remoteEntry.js",
            },
            shared: ['react']
        })
  ],

 
})
