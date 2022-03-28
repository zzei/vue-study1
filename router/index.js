import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routers = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home')
            },
            ,
            {
                path: '/menu',
                name: 'menu',
                component: () => import('../views/menu')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user')
            },
            {
                path: '/role',
                name: 'role',
                component: () => import('../views/role')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

export default router