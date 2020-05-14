// pages/cha/cha.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    currentTab: 0,
    bgwc:'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/8YUQ4vKPKp.vxIKbDZcdtqzuyOPRCGOjDpBL5J5EfxU0DuYYceYFu4KrsCdDkYWdYTQ9cdnxYnG6xa2EQm17VQ!!/b&bo=IAAgAAAAAAADByI!&rf=viewer_4&t=5',
    rgwc:'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/yCLjTthScCcjc0qcPSGYBvlEfDKyVhPW7eAcIjYhtYf6U16LHsbcyimoRSg22JFy3g5ZBjuKFFG2LMwawVLHNKH6cydO*..kKa5rc..d2ek!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5',
    price:'0.00',
    show: false,
    zj:'',
    show1: false,
    dj0:'',
    lists:'',
    lingshi:[
      {
        img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
        new:'苹果',
        price:'10.00',
        jia:'+',
        id:1,
        num:0
      },
      {
        img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
        new:'香蕉',
        price:'20.00',
        jia:'+',
        id:2,
        num:0
      },
      {
            img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
            new:'桃子',
            price:'70.00',
            jia:'+',
            id:3,
            num:0
          },
          {
            img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
            new:'葡萄',
            price:'80.00',
            jia:'+',
            id:4,
            num:0
          }
    ],
    // chuangyi:[
    //   {
    //     img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
    //     new:'奈雪 冻干酸牛奶 可以嚼的浓缩营养',
    //     price:'30.00',
    //     jia:'+',
    //     id:0
    //   },
    //   {
    //     img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
    //     new:'奈雪 冻干酸牛奶 可以嚼的浓缩营养',
    //     price:'40.00',
    //     jia:'+',
    //     id:1
    //   }
    // ],
    // xinyi:[
    //   {
    //     img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
    //     new:'奈雪 冻干酸牛奶 可以嚼的浓缩营养',
    //     price:'50.00',
    //     jia:'+',
    //     id:0
    //   },
    //   {
    //     img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
    //     new:'奈雪 冻干酸牛奶 可以嚼的浓缩营养',
    //     price:'60.00',
    //     jia:'+',
    //     id:1
    //   }
    // ],
    // chali:[
    //   {
    //     img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
    //     new:'奈雪 冻干酸牛奶 可以嚼的浓缩营养',
    //     price:'70.00',
    //     jia:'+',
    //     id:0
    //   },
    //   {
    //     img:'http://m.qpic.cn/psc?/V10oC4UV0EaaRx/8YUQ4vKPKp.vxIKbDZcdth5n8m2YXpFuKckS*N9TR5P4FDJqmIhGS.JMhQ0x*iTg.AS4Sk2NcFQjUAWQwOtp6Q!!/b&bo=tQDRAAAAAAADB0Y!&rf=viewer_4&t=5',
    //     new:'奈雪 冻干酸牛奶 可以嚼的浓缩营养',
    //     price:'80.00',
    //     jia:'+',
    //     id:1
    //   }
    // ],
    tj:0,
    sj:[]
  },
  switchNav: function(e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      flag: id
    });
  },
  catchTouchMove: function (res) {
    return false
  },
  onClose() {
    this.setData({ 
      show: false,
    
    });
  },
  onClose1() {
    this.setData({ show1: false });
  },
  showPopup(e) {
   
    let that = this
    var sy = e.currentTarget.dataset.index
    var obj1 = that.data.lingshi[sy]

    that.setData({ 
      show: true,
      lists:obj1
    })
    console.log(this.data.lists)
  },
  showPopup1() {
    this.setData({ show1: true });
  },
  onChange(event) {
    // console.log(event)
    
    for(var i in this.data.lingshi){
      if(this.data.lingshi[i].id == event.currentTarget.dataset.index1){
        // this.data.lists.num = event.detail
         this.data.lingshi[i].num = event.detail
         break;
      }
    }
this.setData({
  lingshi:this.data.lingshi
})
console.log(this.data.lingshi)
this.pay()
    if(this.data.zj > 0){
     this.setData({
       bgwc:'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/yCLjTthScCcjc0qcPSGYBvlEfDKyVhPW7eAcIjYhtYf6U16LHsbcyimoRSg22JFy3g5ZBjuKFFG2LMwawVLHNKH6cydO*..kKa5rc..d2ek!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5'
     })
    }else if(this.data.zj == 0){
      this.setData({
        bgwc:'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/8YUQ4vKPKp.vxIKbDZcdtqzuyOPRCGOjDpBL5J5EfxU0DuYYceYFu4KrsCdDkYWdYTQ9cdnxYnG6xa2EQm17VQ!!/b&bo=IAAgAAAAAAADByI!&rf=viewer_4&t=5',
        zj:''
      })
    }
    // console.log(this.data.lingshi);
  },
  dianji:function(e){
this.setData({
  lingshi:this.data.lingshi
})
// console.log(this.data.lingshi)
    this.setData({
      show:false
    })
   this.pay()
  },
  pay:function(){
    var a = 0
    var b = 0
for(var i in this.data.lingshi){
   var zj = this.data.lingshi[i].num*this.data.lingshi[i].price
   b += this.data.lingshi[i].num
   a += zj
}
this.setData({
  zj:b,
  price:a
})
  },
  qk:function(){
    for(var i in this.data.lingshi){
        this.data.lists.num = 0
         this.data.lingshi[i] = this.data.lists
    }
this.setData({
  lingshi:this.data.lingshi
})
this.pay()
if(this.data.zj > 0){
  this.setData({
    bgwc:'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/yCLjTthScCcjc0qcPSGYBvlEfDKyVhPW7eAcIjYhtYf6U16LHsbcyimoRSg22JFy3g5ZBjuKFFG2LMwawVLHNKH6cydO*..kKa5rc..d2ek!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5'
  })
 }else if(this.data.zj == 0){
   this.setData({
     bgwc:'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/8YUQ4vKPKp.vxIKbDZcdtqzuyOPRCGOjDpBL5J5EfxU0DuYYceYFu4KrsCdDkYWdYTQ9cdnxYnG6xa2EQm17VQ!!/b&bo=IAAgAAAAAAADByI!&rf=viewer_4&t=5',
     zj:''
   })
 }
  },
  onChange1:function(event){
//     for(var i in this.data.lingshi){
//       if(this.data.lingshi[i].id == event.currentTarget.dataset.index1){
//         this.data.lists.num = event.detail
//          this.data.lingshi[i] = this.data.lists
//       }
//     }
// this.setData({
//   lingshi:this.data.lingshi
// })
// this.pay()
//     if(this.data.zj > 0){
//      this.setData({
//        bgwc:'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/yCLjTthScCcjc0qcPSGYBvlEfDKyVhPW7eAcIjYhtYf6U16LHsbcyimoRSg22JFy3g5ZBjuKFFG2LMwawVLHNKH6cydO*..kKa5rc..d2ek!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5'
//      })
//     }else if(this.data.zj == 0){
//       this.setData({
//         bgwc:'http://m.qpic.cn/psc?/V10oC4UV0bWbu4/8YUQ4vKPKp.vxIKbDZcdtqzuyOPRCGOjDpBL5J5EfxU0DuYYceYFu4KrsCdDkYWdYTQ9cdnxYnG6xa2EQm17VQ!!/b&bo=IAAgAAAAAAADByI!&rf=viewer_4&t=5',
//         zj:''
//       })
//     }
  }
})