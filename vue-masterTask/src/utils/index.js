import store from '@/store/index'

const clearCache = function (routerName) {
    store.commit('REMOVE_CACHED_INCLUDE', routerName)
    store.commit('ADD_CACHED_EXCLUDE', routerName)
}
const newCache = function (routerName) {
    store.commit('ADD_CACHED_INCLUDE', routerName)
    store.commit('REMOVE_CACHED_EXCLUDE', routerName)
}

export {
    clearCache, newCache
}