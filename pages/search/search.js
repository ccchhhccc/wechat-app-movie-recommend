// pages/search/search.js

import { http, delUrl } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:'',
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  change(e){
    this.setData({
      info: e.detail.value
    })
  },
  search(e){
    wx.showLoading({
      title: '玩命加载中',
      mask: false
    })
    let url = 'https://movie.douban.com/j/subject_suggest?q=' + this.data.info
    http('/toApi', url).then((rel) => {
      console.log(rel)
      wx.hideLoading()
      this.setData({
        list:rel
      })
    })
  },
  goToDetail(e) {
    if (e.currentTarget.dataset.listtype !== 'movie') {
      return
    }
    wx.navigateTo({
      url: '/pages/detail/detail?movieId=' + e.currentTarget.dataset.movieid,
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