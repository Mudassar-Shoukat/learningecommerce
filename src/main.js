import { createApp } from 'vue'
import '/src/style.css';
import App from './App.vue';
import router from './router.js';
import Store from './Store.js'
createApp(App).use(router).use(Store).mount('#app')
// createApp(App).use(router).mount('#app')



