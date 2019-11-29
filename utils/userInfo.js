const app = getApp()
export const is_login = () => {
    return wx.getStorageSync("is_login") ? wx.getStorageSync("is_login") : app.globalData.is_login
    
}