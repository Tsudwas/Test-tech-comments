import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import Home from './pages/Home.vue';
import Article1 from './pages/Article1.vue';
import Article2 from './pages/Article2.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/article1', component: Article1 },
    { path: '/article2', component: Article2 },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App)

app.use(router)
app.mount('#app')