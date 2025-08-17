import './bootstrap';
import { createApp } from 'vue';

import Guest from './Layouts/Guest.vue';
// import Dashboard from './Layouts/Dashboard.vue';

const app = createApp({});
app.component('Guest', Guest);
app.component('Dashboard', Dashboard);

app.mount('#app');


