// layout/index/index.js
import configRequest from "../../utils/configRequest"
const InnerAudioContext = wx.createInnerAudioContext()
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        loading: true,
        // 轮播图
        swiperData: [
            {
                img: "/assets/images/index/bnsdmm.jpg",
                title: "不能说的秘密"
            },
            {
                img: "/assets/images/index/qlx.jpg",
                title: "七里香"
            },
            {
                img: "/assets/images/index/qt.jpg",
                title: "晴天"
            },
        ],
        // 导航栏
        navBarData: [
            {
                img: "/assets/images/index/tuijian.jpg",
                title: "推荐"
            },
            {
                img: "/assets/images/index/gedan.jpg",
                title: "歌单"
            },
            {
                img: "/assets/images/index/paihangbang.jpg",
                title: "排行榜"
            },
            {
                img: "/assets/images/index/diantai.jpg",
                title: "电台"
            },
            {
                img: "/assets/images/index/zhibo.jpg",
                title: "直播"
            }
        ],
        // 推荐歌单
        recommandData: [
            {
                img: "/assets/images/index/zj-aybco.jpeg",
                title: "哎呦,不错哦",
                playNum: "6.3亿",
                content: "2014年12月26日《哎呦，不错哦》预购CD精装版6万2，USB限量版1万，音乐数字专辑是超过15万张。"
            },
            {
                img: "/assets/images/index/zj-bdgj.jpeg",
                title: "八度空间",
                playNum: "6.3亿",
                content: "2002年7月19日《八度空间》上市仅三周销量就达到惊人的100万。"
            },
            {
                img: "/assets/images/index/zj-cbgs.jpeg",
                title: "床边故事",
                playNum: "6.3亿",
                content: "2016年6月24日《周杰伦的床边故事》总计销售的数字专辑已突破100万张。"
            },
            {
                img: "/assets/images/index/zj-yrftx.jpeg",
                title: "依然范特西",
                playNum: "6.3亿",
                content: "2006年9月5日《依然范特西》 唱片亚洲年度销售量达360万张，亚洲销售冠军 累计销量670万。"
            },
            {
                img: "/assets/images/index/zj-yehuimei.jpeg",
                title: "叶惠美",
                playNum: "6.3亿",
                content: "2003年7月31日《叶惠美》唱片亚洲年度销售量达300万张，亚洲销售冠军 ，累计销量820万。第一主打【以父之名】 ，全亚洲共有10亿人收听。"
            },
            {
                img: "/assets/images/index/zj-whm.jpeg",
                title: "我很忙",
                playNum: "6.3亿",
                content: "2007年11月2日《我很忙》发片当天公布了全亚洲首批出货107万张的实际销售数字。"
            },
            {
                img: "/assets/images/index/zj-syydxb.jpeg",
                title: "十一月的肖邦",
                playNum: "6.3亿",
                content: "2005年11月1日《十一月的萧邦》唱片亚洲年度销售量达270万张，亚洲销售冠军 累计销量550万。"
            },
            {
                img: "/assets/images/index/zj-sexz.jpeg",
                title: "十二新作",
                playNum: "6.3亿",
                content: "2012年12月28日《十二新作》官方统计大概是180多万。"
            },
            {
                img: "/assets/images/index/zj-qlx.jpeg",
                title: "七里香",
                playNum: "6.3亿",
                content: "2004年8月3日《七里香》唱片亚洲年度销售量达350万张，亚洲销售冠军 ，累计销量600万。"
            },
            {
                img: "/assets/images/index/zj-mjz.jpeg",
                title: "魔羯座",
                playNum: "6.3亿",
                content: "2008年10月15日《魔杰座》唱片亚洲年度销售量达200万张，亚洲销售冠军 累计销量260万。"
            },
            {
                img: "/assets/images/index/zj-ksd.jpeg",
                title: "跨时代",
                playNum: "6.3亿",
                content: "2010年5月18日《跨时代》尚无确切数量，首月销量187万，现在截止到2010年4月，250万了。"
            },
            {
                img: "/assets/images/index/zj-jth.jpeg",
                title: "惊叹号",
                playNum: "6.3亿",
                content: "2011年11月11日《惊叹号》截止至12月10日惊叹号销量已突破276万张。"
            },
            {
                img: "/assets/images/index/zj-JAY.jpeg",
                title: "JAY",
                playNum: "6.3亿",
                content: "2000年11月7日《JAY》唱片台湾年度销售量达50万张，台湾年度销售冠军 ，累计销量260万。"
            },
            {
                img: "/assets/images/index/zj-ftx.jpeg",
                title: "范特西",
                playNum: "6.3亿",
                content: "2001年9月20日《范特西》唱片亚洲年度销售量170万张，大中华区年度销售亚军 ，累计销量780万。"
            }
        ],
        // 播放器操作按钮
        playOperation: [
            {
                className: "operation-previous",
                iconName: "iconfont icon-icon-2",
                title: "previous"
            },
            {
                className: "operation-stop",
                iconName: "iconfont icon-icon-",
                title: "stopORplay"
            },
            {
                className: "operation-next",
                iconName: "iconfont icon-icon-1",
                title: "next"
            }, {
                className: "play-list",
                iconName: "iconfont icon-liebiao",
                title: "list"
            }
        ],
        // 播放器
        playData: {
            playerImg: "https://p1.music.126.net/dHRFJJ9nfF_9YTxOz9UXUQ==/109951163901435148.jpg?param=130y130",
            playerName: "你说",
            songer: "枯木逢春"
        },
        // 是否正在播放
        isPlay: false
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
        
        
        InnerAudioContext.src = "http://m701.music.126.net/20191031184559/e6a59121c6cd1b14131149292baecde3/jdyyaac/025f/5359/035d/552d1d7661d35be4bc9b473d5e074729.m4a"
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

    },
    playTap(e) {
        const nowOperation = e.currentTarget.dataset.title
        if (nowOperation == "stopORplay") {
            // 说明音乐还没播放
            if (!this.data.isPlay) {
                let errorFlag = false
                // 监听音频播放事件
                InnerAudioContext.onPlay(() => {
                    if (!errorFlag) {
                        let setIcon = this.data.playOperation
                        setIcon[1].iconName = "iconfont icon-icon-3"
                        wx.showToast({
                            title: "开始播放",
                            duration: 2000
                        })
                        this.setData({
                            playOperation: setIcon,
                            isPlay: true
                        })
                    }
                })
                InnerAudioContext.play()
                // 监听音频播放错误事件
                InnerAudioContext.onError((res) => {
                    errorFlag = true
                    console.log(3333)
                    console.log(res)
                })
            }
            // 说明音乐正在播放
            else if (this.data.isPlay) {
                // 监听音频暂停事件
                InnerAudioContext.onPause(() => {
                    let setIcon = this.data.playOperation
                    setIcon[1].iconName = "iconfont icon-icon-"
                    wx.showToast({
                        title: "暂停播放",
                        duration: 2000
                    })
                    this.setData({
                        playOperation: setIcon,
                        isPlay: false
                    })
                })
                InnerAudioContext.pause()
            }
        }
    }
})