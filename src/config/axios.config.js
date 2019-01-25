import axios from "axios"
// interface Res {
//     code:number
//     msg:string
// }
axios.interceptors.request.use(function(config){      
    return config
},function(error){    
    return Promise.reject(error)
})
axios.interceptors.response.use(function(response){          
    if (response.status >= 200 && response.status < 300) {        
        return response.data
    }
    return response.data
},function(error){
    // const { status } = error.response

    // if(error.response === 401){
    //     //去登录
    // }
    // if (status <= 504 && status >= 500) {
    //     window.location.href="/user/500"
    //     return
    // }
    // if (status >= 403&& status < 422) { // 403无权限
    //     window.location.href="/user/404"
    // }
    return Promise.reject(error)
})