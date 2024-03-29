// layout/video/video.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 视频数据
        videoData: [
            {
                // 视频地址
                src: "https://tb-video.bdstatic.com/tieba-smallvideo-transcode-cae/23556074_9e69a005b9924cf5e40747b876fe34dd_0_cae.mp4",
                // 弹幕列表
                danmuList: [
                    {
                        text: "一路向北",
                        color: "pink",
                        time: 1
                    }
                ],
                // 视频信息
                videoInfo: {
                    title: "说好不哭 (with 五月天阿信)",
                    songer: "周杰伦",
                    playTime: "4560.3万",
                    pubDate: "2019-09-16"
                }
            },
            {
                src: "http://211.161.127.14/vcloud1049.tc.qq.com/1049_M0102222003SmPdQ2V7eNu1001139662.f30.mp4?vkey=A79A9FD027498B5E5D1104F824C8AC5402548B86081403FB21E69111A306C22DA0BF8E89C28BD580AEEF11D5474B2184B5BA2A008E30255B50762413834DA08B46C98327E2CBCF23AFA3D961710AC6D616636248C3CEC76A",
                // 弹幕列表
                danmuList: [
                    {
                        text: "不能说的秘密(live)",
                        color: "pink",
                        time: 1
                    }
                ],
                // 视频信息
                videoInfo: {
                    title: "不能说的秘密",
                    songer: "周杰伦",
                    playTime: "4560.3万",
                    pubDate: "2019-09-16"
                }
            }
        ]
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
        this.videoContext = wx.createVideoContext('myVideo')
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