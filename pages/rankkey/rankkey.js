// pages/rankkey/rankkey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // color:['#f8a52d', '#ff9902', '#a570f3', '#479eff', '#9ACD32', '#912CEE', '#EE7942'],
    color :['(248,165,45,.5)', '(255,153,2,.5)', '(165,112,243,.5)', '(71,158,255,.5)', '(154,205,50,.5)', '(145,44,238,.5)', '(238,121,66,.5)'],

    obj: [{
      title: '评分最高的华语电影',
      key: 1
    },
    {
      title: '评分最高的外语电影',
      key: 2
    },
    {
      title: '最受关注的院线电影',
      key: 4
    },
    {
      title: '最受关注的非院线电影',
      key: 5
    },
    {
      title: '最期待的华语独立佳作',
      key: 8
    },
    {
      title: '年度冷门佳片',
      key: 9
    },
    {
      title: '评分最高的韩国电影',
      key: 11
    },
    {
      title: '评分最高的日本电影',
      key: 12
    },
    {
      title: '评分最高的韩国电影',
      key: 14
    },
    {
      title: '年度LGBT电影',
      key: 15
    },
    {
      title: '评分最高喜剧',
      key: 17
    },
    {
      title: '评分最高的爱情片',
      key: 18
    },
    {
      title: '评分最高的科幻/动作片',
      key: 20
    },
    {
      title: '评分最高的恐怖/惊悚片',
      key: 21
    },
    {
      title: '评分最高的动画片',
      key: 23
    },
    {
      title: '评分最高的纪录片',
      key: 24
    },
    {
      title: '评分最高的短片',
      key: 26
    },
    {
      title: '年度电影原声',
      key: 27
    },
    {
      title: '评分最高的大陆剧集',
      key: 29
    },
    {
      title: '评分最高的英美剧（新剧）',
      key: 30
    },
    {
      title: '评分最高的英美剧（非新剧）',
      key: 31
    },
    {
      title: '评分最高的日剧',
      key: 33
    },
    {
      title: '评分最高的韩剧',
      key: 34
    },
    {
      title: '评分最高的大陆电视综艺',
      key: 36
    },
    {
      title: '评分最高的大陆网络综艺',
      key: 37
    },
    {
      title: '最受关注的韩国综艺',
      key: 38
    },
    {
      title: '评分最高的动画剧集',
      key: 40
    },
    {
      title: '评分最高的记录剧集',
      key: 41
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initColor()
  },
  initColor() {
    let num = this.data.color.length
    let obj = Object.assign({},this.data.obj)
    for(let i in obj){
      let randNum = parseInt(Math.random() * num) 
      obj[i].color = this.data.color[randNum]
      console.log(obj.color)
    }
    this.setData({
      obj:obj
    })
  },
  goToDetail(e) {
    wx.navigateTo({
      url: '/pages/rank/rank?id=' + e.currentTarget.dataset.id,
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