import { http, delUrl } from '../../utils/util.js'

// pages/watch/watch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    tag:[
      {
        title:'推荐',
        tag:'%E7%83%AD%E9%97%A8'
      },
      {
        title: '综艺',
        tag: '%E7%BB%BC%E8%89%BA'
      },
      {
        title:'动漫',
        tag:'%E6%97%A5%E6%9C%AC%E5%8A%A8%E7%94%BB'
      },
      {
        title: '电视剧',
        tag: '%E5%9B%BD%E4%BA%A7%E5%89%A7'
      },
      {
        title: '纪录片',
        tag: '%E7%BA%AA%E5%BD%95%E7%89%87'
      }
    ],
    currStart:0,
    currTag:'%E7%83%AD%E9%97%A8'
  },
  getRecommondMovie(){
    let data = {
      type:'tv',
      tag:'%E7%83%AD%E9%97%A8',
      page_limit:20,
      page_start:0
    }
    wx.showLoading({
      title: '玩命加载中',
      mask: false
    })
    data.tag = this.data.currTag
    data.page_start = this.data.currStart
    let url = delUrl('https://movie.douban.com/j/search_subjects', data)
    http('/toApi', url).then((rel) => {
      console.log(rel)
      wx.hideLoading()
      var showArr = this.data.list.concat(rel.subjects)
      var num = this.data.currStart + 20
      this.setData({
        list: showArr,
        currStart: num
      })
    })
  },
  changeTag(e){
    this.setData({
      currStart:0,
      currTag: e.currentTarget.dataset.tagname,
      list:[]
    })
    this.getRecommondMovie()
  },
  goToDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?movieId=' + e.currentTarget.dataset.movieid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRecommondMovie()
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
    this.getRecommondMovie()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})