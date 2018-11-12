function http(route, requestUrl) {
  let rqurl = 'https://www.chenhaichao.cn' + route
  console.log(rqurl)
  let header = { }
  //let header = { requestUrl}
  //返回Promise对象  
  return new Promise((resolve, reject) => {
    console.log(requestUrl)
    wx.request({
      method: 'post',
      url: rqurl,
      data: { requestUrl:requestUrl},
      header: header,
      success: res => {
        //wx.hideNavigationBarLoading()
        let statusCode = res.statusCode

        switch (statusCode) {
          case 200:
            resolve(res.data)
            break
          case 201:
            resolve(res.data)
            break
          case 204:
            resolve(res.data)
            break
          case 401:
            wx.showToast({
              title: '授权过期，请重新登录',
              icon: 'none',
              duration: 2000
            })
            //wx.removeStorageSync('jwt')
            resolve(res.data)
            break

          case 403:
            resolve(res.data)
            break
          default:
            wx.showToast({
              title: '未知错误',
              icon: 'none',
              duration: 2000
            })
        }
        resolve(res);
      },
      fail: function (res) {
        wx.showToast({
          title: '请检查网络',
          icon: 'none',
          duration: 2000
        })
      },
      complete: function (res) {
        // console.log(res)
      }
    })
  }
  )
}
function delUrl(url,data){
  for (let key in data) {
    if (data[key].toString() !== '') {
      url += "&" + key + "=" + data[key];
    }
  }
  url = url.replace('&', '?')  //  替换第一个&为？
  return url
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  http: http,
  delUrl: delUrl
}
