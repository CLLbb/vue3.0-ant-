import service from "@/utils/request";

export function getCode(val){
    service.request({
        url:'/account/login/',
        method:'get',
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


