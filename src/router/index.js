import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pic from '../views/Pic.vue';
import { showLightboxCount } from '@/store';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            showLightbox: false
        }
    },
    {
        path: '/pic/:id',
        name: 'Pic',
        component: Pic,
        meta: {
            showLightbox: false
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from) => {
    if ((from.name === 'Home' && to.name === 'Pic') || (from.name === 'Pic' && to.name === 'Pic')) {
        // 改變路由參數會保留狀態、影響後續行為
        to.matched[0].components.default = Home;
        to.matched[0].components.lightbox = Pic;
        to.meta.showLightbox = true;

        showLightboxCount.value++;
    }
});

export default router;
