// indicatorDot 是否显示面板指示点
//  indicatorColor  指示点颜色
// indicatorActiveColor 当前选中的指示点颜色
// autoplay  是否自动切换
// circular  是否采用衔接滑动
Component({
    properties: {
        // 是否显示面板指示点
        indicatorDots: {
            type: Boolean,
            value: true
        },
        // 指示点颜色
        indicatorColor: {
            type: String,
            value: "#fff"
        },
        // 当前选中的指示点颜色
        indicatorActiveColor: {
            type: String,
            value: "#c20c0c"
        },
        // 是否自动切换
        autoplay: {
            type: Boolean,
            value: true
        },
        // 是否采用衔接滑动
        circular: {
            type: Boolean,
            value: true
        },
        // 轮播图的数据
        swiperData: {
            type: Array,
            value: []
        }
    },
    methods: {
        swiperTap(e) {
            console.log(e.currentTarget.dataSet.swiperdata)
        }
    }
})