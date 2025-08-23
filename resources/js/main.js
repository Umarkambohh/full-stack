import './bootstrap.js';
import { createApp } from 'vue';
import router from './routes.js';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).mount('#app');
