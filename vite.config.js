import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
    
],
server: { 
  host: '0.0.0.0'
},
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src",import.meta.url))
    },
  },
});
