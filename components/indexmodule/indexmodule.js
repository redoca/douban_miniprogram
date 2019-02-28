// components/indexmodule/indexmodule.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {  // 标题
      type: String,
      value: ""
    },
    moreurl:{  // 更多跳转地址
      type: String,
      value: ""
    },
    items: {  // 数据
      type: Array,
      value: []
    },
    type: {  // 类型
      type: String,
      value: ""
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

  }
})
