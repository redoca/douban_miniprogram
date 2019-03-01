// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isNavigator: {
      type: Boolean,
      value: false
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
    onInputEvent: function(event) {
      // 组件绑定事件
      this.triggerEvent("searchinput", { "value": event.detail.value }, {})
    }
  }
})
