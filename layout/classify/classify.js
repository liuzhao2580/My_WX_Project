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
                classifyName: "华语"
            },
            {
                classifyName: "欧美"
            },
            {
                classifyName: "日本"
            },
            {
                classifyName: "韩国"
            },
            {
                classifyName: "其他"
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
                {
                    img: "https://p1.music.126.net/jFwxd0Bq-qAMCElfL2oEzA==/109951164467418459.jpg?imageView&quality=89",
                    title: "优质男声"
                }
            ],
            // 详细内容
            detailContent: [
                {
                    detailConTitle: "男歌手",
                    detailConList: [
                        {
                            img: "https://p2.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg?param=640y300",
                            songer: "周杰伦"
                        },
                        {
                            img: "https://p2.music.126.net/_cB2figc8IpT89DYhpARxA==/3389794350704969.jpg?param=640y300",
                            songer: "林俊杰"
                        },
                        {
                            img: "https://p2.music.126.net/nILBk4DaE3yV__25uq-5GQ==/18641120139241412.jpg?param=640y300",
                            songer: "陈奕迅"
                        },
                        {
                            img: "https://p2.music.126.net/_D9P0JKRDYm3jEay9EfhRw==/109951163536274581.jpg?param=640y300",
                            songer:"许嵩"
                        },
                        {
                            img: "https://p1.music.126.net/XOx-Fl3hsNJXWNptumhOQg==/202310139527235.jpg?param=640y300",
                            songer:"王力宏"
                        }
                    ]
                },
                {
                    detailConTitle: "女歌手",
                    detailConList: [
                        {
                            img: "https://p1.music.126.net/d6_wbK2Qh1pbie2nFA0UMA==/109951164233339297.jpg?param=640y300",
                            songer: "孙燕姿"
                        },
                        {
                            img:"https://p1.music.126.net/o2qzE0Is5Qh1pfSKQiVGkA==/18646617697368402.jpg?param=640y300",
                            songer: "邓紫棋"
                        },
                        {
                            img: "https://p1.music.126.net/G49u1iXVIumEZP5Jxb1UcQ==/3445869445238595.jpg?param=640y300",
                            songer: "田馥甄"
                        }
                    ]
                },
                {
                    detailConTitle: "华语组合/乐队",
                    detailConList: [
                        {
                            img: "https://p1.music.126.net/YUFS4m_lTmQYM6UiIVLOYQ==/109951163720136153.jpg?param=640y300",
                            songer: "五月天"
                        },
                        {
                            img: "https://p1.music.126.net/Umy9RllboQslHMGkPlPVOA==/109951163720162979.jpg?param=640y300",
                            songer: "Beyond"
                        },
                        {
                            img: "https://p1.music.126.net/6StY0McCevvzjI1Q2mAX5Q==/109951163426691245.jpg?param=640y300",
                            songer: "GALA"
                        },
                        {
                            img: "https://p1.music.126.net/P2W12VnnitMxWpcTNrAvoA==/18493785580241377.jpg?param=640y300",
                            songer: "S.H.E"
                        }
                    ]
                },
            ]
        },
        // 
        loading: true
    },
    // 左边分类的点击事件
    classifyTab(e) {
        const getCurrentIndex = e.currentTarget.dataset.currentitem[0]
        const getCurrentItem = e.currentTarget.dataset.currentitem[1]
        this.setData({
            currentClassify: getCurrentIndex
        })
    },
    // 右边分类详情点击事件
    listTap(e) {
        const getTapSonger = e.currentTarget.dataset.detaillist
        console.log(getTapSonger)
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