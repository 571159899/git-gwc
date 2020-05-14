// pages/fs/fs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['我已到店','16:00', '17:00', '18:00', '19:00'],
    index:0,
    radio:'1',
    lists:'',
    alls:'',
    prics:'',
    demand:'口味、偏好等需求'

  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let num = wx.getStorageSync('num')
    let note = wx.getStorageSync('notes')
    console.log(num)
    let all = 0
    let pric = 0
    for(let i in num){
      num[i].price = num[i].price*num[i].num
      pric += num[i].price
      all += num[i].num 
    }
    this.setData({
      lists:num,
      alls:all,
      prics : pric,
      demand:note
    })
    // console.log(num)
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

  },
  jump:function(){
    wx.navigateTo({
      url: '../remarks/remarks',
    })
  }
})