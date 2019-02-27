//index.js
import {network} from "../../utils/network.js"

//获取应用实例
const app = getApp()

Page({
  data: {
  },
  
  onLoad: function(options) {
    var that = this
    // 电影
    network.getMovieList({
      success: function(movies) {
        that.setData({
          movies: movies
        })
      }
    })
    // 电视剧
    network.getTvList({
      success: function (tvs) {
        that.setData({
          tvs: tvs
        })
      }
    })
    // 综艺
    network.getShowList({
      success: function (shows) {
        that.setData({
          shows: shows
        })
      }
    })
  }
})
