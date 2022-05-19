
const init_data = {
    status:{
        0:false,
        1:true
    }
}

//json key match
export function matchkey( field , value){
    // 获取初始化的数据
    const data = init_data[field];
    if(!data){ return false }
    return data[value]

}

//响应报文的数据转换
// export function requestDataFormat(data,field,matchField){ 
    export function requestDataFormat(params){ 
    const request_data = params.data;
    const keys = Object.keys(request_data);
    const formState = params.form ;
    for (let key in formState){
        if(keys.includes(key)){ //匹配响应报文和表单字段
            if(params.match.includes(key)){ //匹配是否转换数据的字段
                formState[key]=matchkey( key, request_data[key] )
            }else{
                formState[key] = request_data[key]
            }
        }
    }
}
