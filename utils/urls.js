const globalURLs = {
  // 电影列表接口
  movieList: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  // 电视剧列表接口
  tvList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  // 综艺列表接口
  showList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
 
  // 电影详表接口
  movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
  // 电视剧详表接口
  tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  // 综艺详表接口
  showDetail: "https://m.douban.com/rexxar/api/v2/tv/",

  // 电影标签
  movieTags: function(id) {
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/tags?count=8"
  },
  // 电视剧标签
  tvTags: function (id) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8"
  },
  // 综艺标签
  showTags: function (id) {
    return this.tvTags(id)
  },
  // 电影短评列表
  movieComments: function (id, start = 0, count = 3) {
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/interests?count=" + count + "&start=" + start
  },
  // 电视剧短评列表
  tvComments: function (id, start = 0, count = 3) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/interests?count=" + count + "&start=" + start
  },
  // 综艺短评列表
  showComments: function (id, start = 0, count = 3) {
    return this.tvComments(id, start, count)
  }
}

export {globalURLs}