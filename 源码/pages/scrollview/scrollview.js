// pages/scrollview/scrollview.js
var views=["red","yellow","blue","red"]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:0,
    scrollIntoView:"red"
  },

  toUpper:function(){
    console.log("toUpper");
  },
  toLower:function(){
    console.log("toLower");
  },
  setScrollTop:function(){
    this.setData({
      scrollTop:this.data.scrollTop+10
    })
  },
  setScrollIntoView:function(){
    for(var i=0;i<views.length;i++){
     console.log("xxx");
     if (views[i] == this.data.scrollIntoView){
       this.setData({
         scrollIntoView:views[i+1]
       })
       break;
     }
    //  break;
    }
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