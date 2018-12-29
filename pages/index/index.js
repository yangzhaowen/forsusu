Page({
  data:{
    // imgUrls: [
    //   'http://47.106.197.178/picture/1.jpg',
    //   'http://47.106.197.178/picture/2.jpg',
    //   'http://47.106.197.178/picture/3.jpg',
    //   'http://47.106.197.178/picture/4.jpg'
    // ],
    videoUrls: [
      // 'http://47.106.197.178/picture/d1.mp4',
      // 'http://47.106.197.178/picture/d2.mp4',
      'http://47.106.197.178/picture/susu.mp4',
      'http://47.106.197.178/picture/susu1.mp4',
      'http://47.106.197.178/picture/susu2.mp4'
    ],
    selects: [
      // { src: "http://47.106.197.178/picture/d3.jpg", text: "爱红唇" },
      // { src: "http://47.106.197.178/picture/d4.jpg", text: "爱吃" },
      // { src: "http://47.106.197.178/picture/d5.jpg", text: "爱自拍" },
      // { src: "http://47.106.197.178/picture/d6.jpg", text: "爱宅" },
      { src: "http://47.106.197.178/picture/7.jpg",  text:"爱红唇"},
      { src: "http://47.106.197.178/picture/8.jpg", text: "爱吃" },
      { src: "http://47.106.197.178/picture/5.jpg", text: "爱自拍" },
      { src: "http://47.106.197.178/picture/6.jpg", text: "爱宅" }
    ],
    doings: [
      { src: "http://47.106.197.178/picture/ni.jpg" },
      { src: "http://47.106.197.178/picture/zai.jpg" },
      { src: "http://47.106.197.178/picture/gan.jpg" },
      { src: "http://47.106.197.178/picture/sha.jpg" }
    ],
  },
  clickImage:function(e){
    var id = e.target.id;
    // this.setData({ id: e.target.id});
    // console.log(e.target.id);
    console.log(id);
    wx.navigateTo({
      url: '../logs/logs?id='+id,
      success: function(res) {
        console.log(111);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  clickDo: function (e) {
    var doId = e.target.id;
    // this.setData({ id: e.target.id});
    // console.log(e.target.id);
    console.log('this is '+doId);

    wx.navigateTo({
      url: '../do/do?doId=' + doId,
      success: function (res) {
        console.log(111);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  clickBtm:function(){
    wx.navigateTo({
      url: '../like/like',
      success: function(res) {
        console.log(111);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})