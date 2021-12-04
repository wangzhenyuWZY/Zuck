import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./view/home.vue')
        },
        {
            path: '/MysteryBoxes',
            name: 'MysteryBoxes',
            component: () => import('./view/mystery-boxes.vue')
        }
    ]
})

export default router
