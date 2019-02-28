// pages/detail/detail.js
import { network } from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    const type = options.type
    const id = options.id
    network.getItemDetail({
      type: type,
      id: id,
      success: function (item) {
        // 电影类型标签
        var genres = item.genres
        genres = genres.join(" / ")
        item.genres = genres
        // 演员前三
        var actors = item.actors
        var actorsnames = []
        if (actors.length > 3) {
          actors = actors.slice(0, 3)
        }
        for (var index=0; index < actors.length;index++) {
          actorsnames.push(actors[index].name)
        }
        actors = actorsnames.join(" / ")
        // 导演
        var director = item.directors[0].name
        var authors = director + "(导演) / " + actors
        item.authors = authors

        that.setData({
          item: item
        })
      }
    })
    // 标签网络请求
    network.getItemTags({
      type: type,
      id: id,
      success: function (tags) {
        that.setData({
          tags: tags
        })
      }
    })
    network.getItemComments({
      type: type,
      id: id,
      success: function (data) {
        that.setData({
          comments: data.interests,
          commentstotal: data.total
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 
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