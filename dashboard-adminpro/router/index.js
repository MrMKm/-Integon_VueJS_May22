import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from '../src/pages/dashboard';
import Login from '../src/auth/login';
import Register from '../src/auth/register';

Vue.use(VueRouter);

export const routes = [
    {
        path: '',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
}) 

export default router