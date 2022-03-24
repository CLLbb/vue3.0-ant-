import service from "@/utils/request";

export function getCode(val){
    service.request({
        url:'/send/',
        method:'post',
        params:val  //params传参用于get请求
    })
}

export function getsms(val){
    service.request({
        url:'/user',
        method:'post',
        data:val  //data传参用于post请求
    })
}

// 注册接口

export function register(val){
    service.request({
        url:'/register',
        method:'post',
        data:val  //data传参用于post请求
    })
}

