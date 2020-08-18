import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Default.vue'

Vue.use(Router)

const routerMapping = [
    {
        path: '/vue',
        component: Layout,
        name: 'index',
        meta: {
            title: 'VUE项目',
            icon: 'hosjoy_home',
            isMenu: true
        },
        children: [
            {
                path: '/vue',
                meta: {
                    title: 'VUE项目'
                },
                component: () => import('./views/index/index')
            }
        ]
    }
]
const router = new Router({
    mode: 'history',
    routes: [
        ...routerMapping
    ]
})


export default router
export {
    routerMapping
}
