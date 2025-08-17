import './bootstrap.js';
import { createApp } from 'vue';
import router from './routes.js';
import App from './App.vue'; // root component that provides <router-view>

createApp(App).use(router).mount('#app');
