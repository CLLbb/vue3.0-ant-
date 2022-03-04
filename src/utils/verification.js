
export function checkPhone(value){    //手机号校验
    let regPhong = /^1[3456789]\d{9}$/;
    return regPhong.test(value)
}

export function checkPassword(value){  //密码校验
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return regPassword.test(value);
}