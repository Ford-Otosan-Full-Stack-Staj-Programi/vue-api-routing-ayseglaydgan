// router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/views/Home.vue')
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: () => import('./components/views/Details.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
