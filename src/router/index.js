import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import Product from '../pages/Product.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/catalog', name: 'catalog', component: Catalog },
        { path: '/product/:id', name: 'product', component: Product, props: true },
        { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
})
