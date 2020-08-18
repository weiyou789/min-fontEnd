// new Data()过后的时间转YYYY-MM-DD HH:mm
const formatterTime = function (time) {
    const data = new Date(time)
    const year = data.getFullYear()
    const month = (data.getMonth() + 1) < 10 ? '0' + (data.getMonth() + 1) : (data.getMonth() + 1)
    const date = (data.getDate()) < 10 ? '0' + (data.getDate()) : data.getDate()
    const hour = (data.getHours()) < 10 ? '0' + (data.getHours()) : data.getHours()
    const minute = (data.getMinutes()) < 10 ? '0' + (data.getMinutes()) : data.getMinutes()

    return time ? (year + '-' + month + '-' + date + ' ' + hour + ':' + minute) : '-'
}

// new Data()过后的时间转YYYY-MM-DD HH:mm
const formatterDate = function (time) {
    const data = new Date(time)
    const year = data.getFullYear()
    const month = (data.getMonth() + 1) < 10 ? '0' + (data.getMonth() + 1) : (data.getMonth() + 1)
    const date = (data.getDate()) < 10 ? '0' + (data.getDate()) : data.getDate()

    return time ? (year + '-' + month + '-' + date) : '-'
}

// 金额格式化
const money = function (val) {
    val = val && val.toString().replace(/\$|,/g, '')
    if (isNaN(val)) {
        val = '0'
    }
    let sign = (val === (val = Math.abs(val))).toString()
    val = Math.floor(val * 100 + 0.50000000001)
    let cents = val % 100
    val = Math.floor(val / 100).toString()
    if (cents < 10) {
        cents = '0' + cents
    }
    for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
        val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3))
    }

    return (((sign) ? '' : '-') + val + '.' + cents)
}

export default {
    formatterTime,
    formatterDate,
    money
}
