import { http, delUrl } from '../../utils/util.js'

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: ['(248,165,45,.5)', '(255,153,2,.5)', '(165,112,243,.5)', '(71,158,255,.5)', '(154,205,50,.5)', '(145,44,238,.5)', '(238,121,66,.5)'],
    colors: ['#f8a52d', '#ff9902', '#a570f3', '#479eff', '#9ACD32', '#912CEE', '#EE7942'],
    detailObj: {},
    show: false,
    showall: false
  },
  getDetail: function (movieId) {
    wx.showLoading({
      title: '玩命加载中',
      mask: false
    })
    let data = {
      apikey: '0b2bdeda43b5688921839c8ecb20399b'
    }
    let url = delUrl('https://api.douban.com/v2/movie/subject/' + movieId, data)
    http('/toApi', url).then((rel) => {
      console.log(rel)
      wx.hideLoading()
      this.setData({
        detailObj: rel,
        showall: true,
        index: parseInt(Math.random() * 7)
      })
    })
  },
  toShowDetail() {
    this.setData({
      show: true
    })
  },
  previewImage(e) {
    let current = e.target.dataset.src;
    let imglist = [current]
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imglist // 需要预览的图片http链接列表  
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getDetail(options.movieId)
    //this.getDetail('26865690')
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