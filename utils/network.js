import {globalURLs} from "urls.js"

const network = {
  // 电影列表
  getMovieList: function(params) {
    params.type = "movie"
    this.getItemList(params)
  },
  // 电视剧列表
  getTvList: function(params) {
    params.type = "tv"
    this.getItemList(params)
  },
  // 综艺列表
  getShowList: function(params) {
    params.type = "show"
    this.getItemList(params)
  },
  getItemList: function (params) {
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
  },

  // 详情页信息
  getItemDetail: function (params) {
    const type = params.type
    const id = params.id
    // 判断获取网络请求地址
    let url = ''
    if (params.type === 'movie') {
      url = globalURLs.movieDetail + id
    } else if (params.type === 'tv') {
      url = globalURLs.tvDetail + id
    } else {
      url = globalURLs.showDetail + id
    }
    wx.request({
      url: url,
      success: function (res) {
        const item = res.data
        if (params && params.success) {
          params.success(item)
        }
      }
    })
  },
  // 详情页标签
  getItemTags: function (params) {
    const type = params.type
    const id = params.id
    // 判断获取网络请求地址
    let url = ''
    if (params.type === 'movie') {
      url = globalURLs.movieTags(id)
    } else if (params.type === 'tv') {
      url = globalURLs.tvTags(id)
    } else {
      url = globalURLs.showTags(id)
    }
    wx.request({
      url: url,
      success: function (res) {
        const item = res.data.tags
        if (params && params.success) {
          params.success(item)
        }
      }
    })
  },
  // 详情页短评
  getItemComments: function(params) {
    const type = params.type
    const id = params.id
    const start = params.start ? params.start : 0
    const count = params.count ? params.count : 3
    let url = ''
    if (params.type === 'movie') {
      url = globalURLs.movieComments(id, start, count)
    } else if (params.type === 'tv') {
      url = globalURLs.tvComments(id, start, count)
    } else {
      url = globalURLs.showComments(id, start, count)
    }
    console.log(url)

    wx.request({
      url: url,
      success: function (res) {
        const data = res.data
        if (params && params.success) {
          params.success(data)
        }
      }
    })
  },
  // 搜索
  getSearch: function (params) {
    const q = params.q
    let url = globalURLs.searchUrl(q)
    console.log(url)
    wx.request({
      url: url,
      success: function (res) {
        const data = res.data
        if (params && params.success) {
          params.success(data.subjects)
        }
      }
    })
  }
}

export {network}  // 导出