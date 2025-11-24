import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
    // router options go here
    history: createWebHistory(),
    routes: [
        // define your routes here
    ],

})

const app = createApp(App)

app.mount('#app');