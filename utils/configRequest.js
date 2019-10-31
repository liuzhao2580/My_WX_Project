const Configrequest = (params)=> {
    return new Promise ((resolve, reject) => {
        wx.request({
            url: params.url,  // 请求地址
            data: params.data, // 请求参数
            method: params.method || "GET", //请求方式
            dataType: params.dataType || "json",  // 返回的数据格式
            success:(res) => {
                resolve(res)
            },
            fail:(res) => {
                reject(res)
            }
        })
    })
}
export default Configrequest