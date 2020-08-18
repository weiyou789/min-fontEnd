export const Phone = (rule, value, callback) => {
    const Reg = /^1\d{10}$/
    if (value && !(Reg.test(value))) {
        return callback(new Error('请输入正确的手机号码'))
    }
    callback()
}

export const address = (rule, value, callback) => {
    const Reg = /^[\u4e00-\u9fa5\-#a-zA-Z0-9]+$/
    if (value && !(Reg.test(value))) {
        return callback(new Error('仓库地址只能输入中文，英文，数字和特殊字符-，#'))
    }
    callback()
}

export const Money = (rule, value, callback) => {
    var Reg = /(^[1-9]([0-9]{1,12})?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
    if (value && !(Reg.test(value))) {
        return callback(new Error('金额格式为小数点前十三位，小数点后两位'))
    }
    callback()
}

export const Password = (rule, value, callback) => {
    var Reg = /^[A-Za-z0-9]+$/
    if (value && !(Reg.test(value))) {
        return callback(new Error('密码只能为数字或字母'))
    }
    callback()
}
