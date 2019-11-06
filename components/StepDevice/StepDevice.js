Component({
    lifetimes: {
        // 在组件实例进入页面节点树时执行
        attached: function () {
            this.init()
        },
    },
    properties: {
        stepNum: {
            type: Number,
            value: 1
        }
    },
    data: {
        // 减号 是否显示 灰色
        subtractBtnFlag: true
    },
    methods: {
        // 初始化
        init() {
            const getSetpNum = this.properties.stepNum
            if (getSetpNum != 1) {
                this.setData({
                    subtractBtnFlag: false
                })
            }
        },
        // 给父组件传值
        stepChange() {
            this.triggerEvent("changeStepNum", {
                stepNum: this.properties.stepNum
            })
        },
        // 减 按钮
        subtractBtn() {
            let getSetpNum = this.properties.stepNum
            if (getSetpNum == 1) {
                this.setData({
                    subtractBtnFlag: true
                })
                this.stepChange()
                return
            } else if (getSetpNum > 1) {
                this.setData({
                    subtractBtnFlag: false,
                    stepNum: getSetpNum - 1
                })
                if (this.properties.stepNum == 1) {
                    this.setData({
                        subtractBtnFlag: true
                    })
                }
                this.stepChange()
            }
            
        },
        // 加 按钮
        addBtn() {
            let getSetpNum = this.properties.stepNum
            this.setData({
                subtractBtnFlag: false,
                stepNum: getSetpNum + 1
            })
            this.stepChange()
        }
    },
})