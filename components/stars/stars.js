// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate: {
      type: Number,
      value: 0,
      observer(newVal, oldVal, changedPath) {
        this.updateRate()
      }
    },
    starsize: {
      type: Number,
      value: 20  // rpx
    },
    fontsize: {
      type: Number,
      value: 20
    },
    fontcolor: {
      type: String,
      value: '#ccc'
    },
    istext: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateRate: function() {
      const rate = this.properties.rate
      const intRate = parseInt(rate)
      // 高亮星
      const light = parseInt(intRate / 2)
      const lights = []
      for (let index = 0; index < light; index++) {
        lights.push(index)
      }
      // 半星
      const half = intRate % 2
      const halfs = []
      for (let index = 0; index < half; index++) {
        halfs.push(index)
      }
      // 灰星
      const gray = 5 - light - half
      const grays = []
      for (let index = 0; index < gray; index++) {
        grays.push(index)
      }
      const ratetext = rate && rate > 0 ? rate.toFixed(1) : '未评分'
      this.setData({
        lights: lights,
        halfs: halfs,
        grays: grays,
        ratetext: ratetext
      })
    }
  },

  // 组件生命周期
  lifetimes: {
    attached: function() {
      this.updateRate()
    }
  }
})
