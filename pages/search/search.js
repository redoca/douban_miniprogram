// pages/search/search.js
import { network } from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    histories: [],
    subjects: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  onShow: function (options) {
    // 获取历史记录
    const that = this
    wx.getStorage({
      key: 'searched',
      success: function (res) {
        console.log(res.data)
        that.setData({
          histories: res.data
        })
      },
    })
  },
  // 搜索
  onSearchInputEvent: function (options) {
    const that = this
    const value = options.detail.value
    console.log(value)
    if (!value || value === "") {
      that.setData({
        subjects: []
      })
      return
    } 
    network.getSearch({
      q: value,
      success: function (subjects) {
        console.log(subjects)
        that.setData({
          subjects: subjects
        })
      }
    })
  },
  // 跳转详情页
  onItemTapEvent: function (event) {
    const that = this
    const id = event.currentTarget.dataset.id
    const type = event.currentTarget.dataset.type
    const title = event.currentTarget.dataset.title
    var histories = that.data.histories
    // 判断是否已存在历史记录中
    var isExisted = false;
    for (var index = 0; index < histories.length; index++) {
      var movie = histories[index];
      console.log(movie.id)
      console.log(id)
      if (movie.id == id) {
        isExisted = true;
        break;
      } 
    }
    if (!isExisted) {
      // 未存在则保存
      histories.push({ id: id, type: type, title: title })
      wx.setStorage({
        key: 'searched',
        data: histories,
        success: function() {
          console.log("存储成功")
        }
      })
    }
    wx.navigateTo({
      url: '/pages/detail/detail?type=' + type + '&id=' + id,
    })
  },
  // 清除历史记录
  onClearEvent: function (event) {
    const that = this
    wx.removeStorage({
      key: 'searched',
      success: function(res) {
      },
    })
    that.setData({
      histories: []
    })
  }
})