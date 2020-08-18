import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

// import editData from '@/views/goodsManage/store/index'

Vue.use(Vuex)

const userInfo = sessionStorage.getItem('userInfo')
const store = new Vuex.Store({
    state: {
        // TODO 数据源
        'userInfo': userInfo ? JSON.parse(userInfo) : {}
    },
    mutations,
    actions: {},
    modules: {
        // TODO 每个模块的vuex
    }
})

export default store
