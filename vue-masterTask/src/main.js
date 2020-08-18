import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/common.scss'
import {
    registerMicroApps,
    // setDefaultMountApp,
    start
} from "qiankun"

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

let apps = [
    {
        name:'vueTask',
        entry:'//localhost:8081',
        container:'#vueView',
        activeRule:'/vue'
    },
    {
        name:'reactTask',
        entry:'//localhost:3000',
        container:'#reactView',
        activeRule:'/react'
    }
]

registerMicroApps(apps,{
    beforeLoad: [
        app => {
            console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        },
    ],
    beforeMount: [
        app => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
    ],
    afterUnmount: [
        app => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
    ],
})


/*start({
    sandbox :{strictStyleIsolation: true}
})*/
start()
// 过滤器