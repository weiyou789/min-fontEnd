import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/views/layout/Default.vue'

Vue.use(Router)

const routerMapping = [
    {
        path: '/home',
        component: () => import('./views/index/index'),
        name: 'index',
        meta: {
            title: '首页',
            icon: 'hosjoy_home',
            isMenu: true
        }
    },
    {
        path: '/vue',
        name: 'vue',
        meta: {
            title: 'VUE项目',
            icon: 'hosjoy_home',
            isMenu: true
        }
    },
    {
        path: '/react',
        name: 'react',
        meta: {
            title: 'react项目',
            icon: 'hosjoy_home',
            isMenu: true
        }
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
