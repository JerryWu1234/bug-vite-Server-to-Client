import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), {
    name: "vite-plugin-watches",
    apply: "serve",

    configureServer(serve){
      serve.ws.send("my:greetings", { msg: "hello" });
    }
  }],
})
