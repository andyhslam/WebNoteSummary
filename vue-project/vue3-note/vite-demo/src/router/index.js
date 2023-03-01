import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/Home/index.vue'),
        children: [{
                path: '/index',
                name: 'index',
                component: () =>
                    import ('../views/Home/index/index.vue')
            },
            {
                path: '/census',
                name: 'census',
                component: () =>
                    import ('../views/Home/census/index.vue')
            },
            {
                path: '/order',
                name: 'order',
                component: () =>
                    import ('../views/Home/order/index.vue')
            },
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router