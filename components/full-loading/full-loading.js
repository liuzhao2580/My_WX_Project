// components/full-loading/full-loading.js
Page({
    onloadDown(e) {
        // this.triggerEvent("loadDown")
        console.log(55555)
    },

    /**
     * 页面的初始数据
     */
    data: {
        loading: "/assets/images/loading.png"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        
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
Component({
    properties:{
        isHidden: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        
    }
})