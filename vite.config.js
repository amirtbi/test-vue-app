import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  test:{
    globals:true,
    environment: 'happy-dom',
    coverage:{
      reporter:['text', 'json', 'html'] // change this property to the desired output
    }
  }
})
