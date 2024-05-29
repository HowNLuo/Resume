import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home/Home.vue';
import Portfolio from './views/portfolios/Portfolio.vue';
import Contact from './views/contact/Contact.vue';

const routes = [
  { path: '/', redirect: 'home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/contact', name: 'contact', component: Contact },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
