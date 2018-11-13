
import { http, delUrl} from '../../utils/util.js'
Page({
  data: {
    bannel:[
      {
        title:'热门电影',
        key:'hotMove'
      },
      {
        title: '放映中',
        key: 'moveIn'
      },
      {
        title: '高分榜',
        key: 'rankMoive'
      },
      {
        title: '冷片最佳',
        key: 'notHotMovie'
      }
    ],
    interval: '3000',
    src: '../../assets/imgs/stop.png',
    test: true,
    movieIn:[],
    movieInToal:0,
    hotMovie:[],
    hotMovieTotal:0,
    rankMovie:[],
    rankMovieTotal:0,
    noHotMovie:[],
    noHotMovieTotal:0
  },
  getMovieIn:function(){
    let data = {
      apikey:'0b2bdeda43b5688921839c8ecb20399b',
      start:0,
      count:20,
      client:'',
      udid:''
    }
    let url = delUrl('https://api.douban.com/v2/movie/in_theaters', data)
    http('/toApi', url).then((rel)=>{
      console.log(rel)
      this.setData({
        movieIn: rel.subjects,
        movieInToal: rel.total
      })
    })
  },
  getHotMovie: function () {
    let data = {
      type: 'movie',
      tag:'%E7%83%AD%E9%97%A8',
      page_start:0,
      page_limit:20
    }
    let url = delUrl('https://movie.douban.com/j/search_subjects', data)
    http('/toApi', url).then((rel) => {
      console.log(rel)
      this.setData({
        hotMovie: rel.subjects,
        hotMovieTotal: rel.subjects.length
      })
    })
  },
  getRankMovie: function () {
    let data = {
      type: 'movie',
      tag: '%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86',
      page_start: 0,
      page_limit:20
    }
    let url = delUrl('https://movie.douban.com/j/search_subjects', data)
    http('/toApi', url).then((rel) => {
      console.log(rel)
      this.setData({
        rankMovie: rel.subjects,
        rankMovieTotal: rel.subjects.length
      })
    })
  },
  getNotHotMovie: function () {
    let data = {
      type: 'movie',
      tag: '%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87',
      source: 'index'
    }
    let url = delUrl('https://movie.douban.com/j/search_subjects', data)
    http('/toApi', url).then((rel) => {
      console.log(rel)
      this.setData({
        noHotMovie: rel.subjects,
        noHotMovieTotal: rel.subjects.length
      })
    })
  },
  goToClass(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/more/more?key=' + e.currentTarget.dataset.id,
    })
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
    this.getMovieIn()
    this.getHotMovie()
    this.getRankMovie()
    this.getNotHotMovie()
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