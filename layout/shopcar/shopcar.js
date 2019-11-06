// layout/shopcar/shopcar.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 左滑的按钮组
        slideButtons: [
            {
                text: "删除",
                type: 'warn'
            }
        ],
        // 店铺数据
        shopData: [
            {
                name: "华为官方旗舰店",
                detailimg: "https://img14.360buyimg.com/n1/s180x180_jfs/t1/57347/32/15197/210298/5dbe9b5dE4e002359/72fcfc120f1e15eb.jpg",
                detailtext: "华为 HUAWEI Mate 30 Pro 5G 麒麟990 OLED环幕屏双4000万徕卡电影四摄8GB+256GB亮黑色5G全网通版",
                argument: "华为Mate 30 Pro 5G",
                shopNum: 2,
                price: 5999
            }
        ]
    },
    stepChange(e) {
        const getStepNum = e.detail.stepNum
        console.log(getStepNum)
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