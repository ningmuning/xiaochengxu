// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    indicatorDots:true,
    autoplay:true,
    interval:2000
  },

  setScrollTop: function () {
    this.setData({
      scrollTop: this.data.scrollTop + 30
    })
  },
  setScrollBottom:function(){
    this.setData({
      scrollTop: this.data.scrollTop - 30
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    wx.showLoading({
      title: 'Loading',
  })
  setTimeout(function() {
    wx.hideLoading();
    wx.stopPullDownRefresh();
  }, 2000)
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