import { http } from '../../utils/util.js'
// pages/top/top.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    tag: [
      {
        title: '外语',
        type: '1'
      },
      {
        title: '华语',
        type: '2'
      },
      {
        title: '关注',
        type: '4'
      },
      {
        title: '佳作',
        type: '8'
      },
      {
        title: '网络',
        type: '9'
      },
      {
        title: '冷门',
        type: '10'
      },
      {
        title: 'LGBT',
        type: '18'
      }
    ],
    type:1,
    list:[]
  },
  getRankMovie() {
    let url = 'https://movie.douban.com/ithil_j/activity/movie_annual2017/widget/'+this.data.type
    http('/toApi', url).then((rel) => {
      this.setData({
        list: rel.res.subjects
      })
    })
  },
  changeTag(e){
    this.setData({
      type: e.currentTarget.dataset.tagname
    })
    this.getRankMovie()
  },
  goToDetail(e){
    wx.navigateTo({
      url: '/pages/detail/detail?movieId=' + e.currentTarget.dataset.movieid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRankMovie()
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