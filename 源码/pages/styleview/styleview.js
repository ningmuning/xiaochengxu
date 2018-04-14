// pages/styleview/styleview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[{
      image:"/images/jd1.jpg"
    },
    {
      image:"/images/jd2.jpg"
    },
    {
      image:"/images/jd3.jpg"
    }, 
    {
      image: "/images/jd4.jpg"
    }, 
    {
      image:"/images/jd5.jpg"
    }],
    logos:[{
      image:"/images/logo1.png",
      title:"学姐超市"
    },
    {
      image: "/images/logo2.png",
      title: "全球购"
    },
      {
        image: "/images/logo3.png",
        title: "服装城"
      }
      , {
        image: "/images/logo4.png",
        title: "即刻到家"
      }
      , {
        image: "/images/logo5.png",
        title: "携程旅行"
      }
      , {
        image: "/images/logo6.png",
        title: "充值中心"
      }
      , {
        image: "/images/logo7.png",
        title: "极客金融"
      }
      , {
        image: "/images/logo8.png",
        title: "学姐超市"
      }
      , {
        image: "/images/logo9.png",
        title: "上劵公司"
      }, {
        image: "/images/logo10.png",
        title: "爱心之城"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
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
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}