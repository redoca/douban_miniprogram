import {globalURLs} from "urls.js"

const network = {
  getMovieList: function(params) {
    // 电影
    params.type = "movie"
    this.getItemList(params)
  },
  getTvList: function(params) {
    // 电视
    params.type = "tv"
    this.getItemList(params)
  },
  getShowList: function(params) {
    // 综艺
    params.type = "show"
    this.getItemList(params)
  },

  getItemList: function (params) {
    // 综艺
    const count = params.count ? params.count : 7
    // 判断获取网络请求地址
    let url = ''
    if (params.type === 'movie') {
      url = globalURLs.movieList
    } else if (params.type === 'tv'){
      url = globalURLs.tvList
    } else {
      url = globalURLs.showList
    }
    wx.request({
      url: url,
      data: { count: count },
      success: function (res) {
        const items = res.data.subject_collection_items;
        if (items.length % 3 == 2) {
          items.push(null)
        }
        if (params && params.success) {
          params.success(items)
        }
      }
    })
  }
}

export {network}  // 导出