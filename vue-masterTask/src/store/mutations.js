import {
    USER_INFO,
    MIN_TASK
} from './const'
// 改变state的初始值的方法
export default {
    [USER_INFO] (state, payload) {
        state.userInfo = payload
    },
    [MIN_TASK] (state, payload) {
        state.minTask = payload
    }
}
