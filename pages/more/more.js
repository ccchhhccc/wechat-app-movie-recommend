import { http, delUrl } from '../../utils/util.js'

// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moreKey:'moveIn',
    hotMovie:{
      data: {
        type: 'movie',
        tag: '%E7%83%AD%E9%97%A8',
        page_start: 0,
        page_limit: 20
      },
      url:'https://movie.douban.com/j/search_subjects'
    },
    moveIn: {
      data: {
        apikey: '0b2bdeda43b5688921839c8ecb20399b',
        start: 0,
        count: 20,
        client: '',
        udid: '',
      },
      url: 'https://api.douban.com/v2/movie/in_theaters'
    },
    rankMovie: {
      data: {
        type: 'movie',
        tag: '%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86',
        page_start: 0,
        page_limit: 20
      },
      url: 'https://movie.douban.com/j/search_subjects'
    },
    notHotMovie: {
      data: {
        type: 'movie',
        tag: '%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87',
        source: 'index'
      },
      url: 'https://movie.douban.com/j/search_subjects'
    },
    show:[]
  },
  // 获取冷门高分
  getNotHotMovie: function () {
    let data = {
      type: 'movie',
      tag: '%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87',
      source: 'index'
    }
    let url = delUrl('https://movie.douban.com/j/search_subjects', this.data.notHotMovie.data)
    http('/toApi', url).then((rel) => {
      console.log(rel)
      this.setData({
        show: rel.subjects
      })
    })
  },
  //获取排行榜  分页
  getRankMovie(){
    let url = delUrl('https://movie.douban.com/j/search_subjects', this.data.rankMovie.data)
    http('/toApi', url).then((rel) => {
      var startNum = this.data.rankMovie.data.page_start+20
      var showArr = this.data.show.concat(rel.subjects)
      this.setData({
        show: showArr,
        'rankMovie.data.page_start': startNum
      })
      
    })
  },
  //获取热门电影
  getHotMovie(){
    let url = delUrl('https://movie.douban.com/j/search_subjects', this.data.hotMovie.data)
    http('/toApi', url).then((rel) => {
      console.log(rel)
      var startNum = this.data.hotMovie.data.page_start + 20
      var showArr = this.data.show.concat(rel.subjects)
      this.setData({
        show: showArr,
        'hotMovie.data.page_start': startNum
      })
    })
  },
  //获取放映中电影
  getMovieIn(){
    let url = delUrl('https://api.douban.com/v2/movie/in_theaters', this.data.moveIn.data)
    http('/toApi', url).then((rel) => {
      console.log(rel)
      var startNum = this.data.moveIn.data.start +20
      var showArr = this.data.show.concat(rel.subjects)
      console.log(showArr,startNum)
      this.setData({
        show: showArr,
        'moveIn.data.start': startNum
      })
    })
  },
  chooseFn(options){
    console.log(this)
    let mykey = options === undefined ? this.data.moreKey:options.key;
    this.setData({
      moreKey: mykey
    })
    if (mykey === 'notHotMovie') {
      this.getNotHotMovie()
      wx.setNavigationBarTitle({
        title: '冷片最佳'
      })
    } else if (mykey === 'hotMove') {
      this.getHotMovie()
      wx.setNavigationBarTitle({
        title: '热门电影'
      })
    } else if (mykey === 'moveIn') {
      this.getMovieIn()
      wx.setNavigationBarTitle({
        title: '放映中'
      })
    } else {
      this.getRankMovie()
      wx.setNavigationBarTitle({
        title: '高分榜'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.chooseFn(options)
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
    this.chooseFn()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})