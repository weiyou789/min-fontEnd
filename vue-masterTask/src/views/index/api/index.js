import axios from 'axios'

// 平台公司经营概况
export const getPlatformInfo = (params) => axios.get('/report/api/index-page/business-overview', {
    params
})
// 运营数据分析
export const getOperationInfo = (params) => axios.get('/report/api/index-page/data-analysis', {
    params
})