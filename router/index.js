
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },

  ],
});

const app = createApp(App);
app.use(router);

app.mount('#app');