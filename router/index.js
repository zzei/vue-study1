import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routers = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

export default router