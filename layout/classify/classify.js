// layout/classify/classify.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        // 首先设置当前的分类栏下标 
        currentClassify: 0,
        // 左边分类栏
        classifyData: [
            {
                classifyName: "华语乐坛"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            },
            {
                classifyName: "推荐分类"
            }
        ],
        // 右边内容区
        classifyContent: {
            // 轮播图
            swiperData: [

            ],
            // 详细内容
            detailContent: [
                {
                    detailConTitle: "男歌手",
                    detailConList: [
                        {
                            img: "https://p2.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg?param=640y300"
                        }
                    ]
                }

            ]
        },
        loading: true
    },
    // 左边分类的点击事件
    classifyTab(e) {
        console.log(e.currentTarget.dataset)
        const getCurrentClass = e.currentTarget.dataset.currentindex
        this.setData({
            currentClassify: getCurrentClass
        })
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
        this.setData({
            loading: false
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