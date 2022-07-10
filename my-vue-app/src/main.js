import { createApp } from 'vue'
import App from './App.vue'
if (import.meta.hot) {
    import.meta.hot.on('my:greetings', (data) => {
      console.log(data.msg) // hello
    })
  }
createApp(App).mount('#app')
