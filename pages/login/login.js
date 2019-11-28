const app = getApp()
// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        is_login: true,
        needLogin: 0,
        rules: [
            {
                name: "username",
                rules: { required: true, message: '请填写用户名' }
            },
            {
                name: "password",
                rules: { required: true, message: '请填写密码' }
            }
        ],
        formData: {},
        error: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 传递过来的 needLogin 为 0 说明不需要登录 需要授权
        // 传递过来的 needLogin 为 1 说明需要登录 不需要授权
        console.log(options.needLogin)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        
    },
    // 用户登录
    getuserinfo(e) {
        console.log(e)
        const errMsg = e.detail.errMsg
        if (errMsg == "getUserInfo:ok") {
            wx.navigateBack({
                delta: 1
            })
        }
    },
    // 输入框
    formInputChange(e) {
        const { field } = e.currentTarget.dataset
        this.setData({
            [`formData.${field}`]: e.detail.value
        })
    },
    submitForm() {
        this.selectComponent('#form').validate((valid, errors) => {
            if (!valid) {
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    this.setData({
                        error: errors[firstError[0]].message
                    })
                }
            } else {
                wx.showToast({
                    title: '校验通过'
                })
                app.globalData.is_login = true
            }
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})