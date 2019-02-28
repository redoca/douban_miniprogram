// pages/comment/comment.js
import { network } from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentstotal: 0,
    start: 1,
    count: 20,
    preLoading: false,
    nextLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this 
    that.setData(options)
    // 请求评论数据
    that.getComments(1)
  },
  // 网络请求评论数据
  getComments: function(start) {
    const that = this
    if (start < that.data.start) {
      that.setData({
        preLoading: true
      })       
    } else {
      that.setData({
        nextLoading: true
      })  
    }
    network.getItemComments({
      type: that.data.type,
      id: that.data.id,
      start: start,
      count: that.data.count,
      success: function (data) {
        that.setData({
          start: start,
          comments: data.interests,
          commentstotal: data.total
        })
        that.setData({
          preLoading: false,
          nextLoading: false
        })
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 0
        })
      }
    })
  },
  onItemTapEvent: function (event) {
    wx.navigateBack({})  // 返回至上一页
  },
  // 上一页
  onPrePageTap: function (event) {
    var that = this
    var start = that.data.start - that.data.count
    if (start > 0) {
      that.getComments(start)
    }
  },
  // 下一页 
  onNextPageTap: function (event) {
    var that = this
    var start = that.data.start + that.data.count
    that.getComments(start)
  }
}) 