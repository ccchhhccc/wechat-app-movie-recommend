import { http, delUrl } from '../../utils/util.js'

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    show:false
  },
  getDetail: function (movieId){
    let data = {
      apikey:'0b2bdeda43b5688921839c8ecb20399b'
    }
    let url = delUrl('https://api.douban.com/v2/movie/subject/'+movieId, data)
    http('/toApi', url).then((rel) => {
      console.log(rel)
      this.setData({
        detailObj:rel
      })
    })
  },
  toShowDetail(){
    this.setData({
      show:true
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