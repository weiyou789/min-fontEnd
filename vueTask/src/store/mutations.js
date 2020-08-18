import {
    USER_INFO
} from './const'
// 改变state的初始值的方法
export default {
    [USER_INFO] (state, payload) {
        state.userInfo = payload
    }

}
