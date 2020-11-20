wx.config({
  debug: false,
  appId: da.data.data[0], // 必填，公众号的唯一标识
  timestamp: da.data.data[1], // 必填，生成签名的时间戳
  nonceStr: da.data.data[2], // 必填，生成签名的随机串
  signature: da.data.data[3], // 必填，签名，见附录1
  jsApiList: [
    "updateAppMessageShareData",
    "updateTimelineShareData",
    "closeWindow",
    "onMenuShareAppMessage",
  ], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
wx.ready(function () {
  let {
    origin,
    pathname
  } = window.location;
  var link = `${origin}${pathname}#/index`,
    title = "LILANZ盖房子大挑战",
    desc = "据说手快的人已经连闯3关了，你敢来接招吗？",
    thumb =
    "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/sharephoto.jpg";
  wx.updateAppMessageShareData({
    title: title, // 分享标题
    desc: desc,
    link: link.split("#")[0] + "#" + link.split("#")[1], // 分享链接
    imgUrl: thumb, // 分享图标
    success: function () {},
    cancel: function () {},
  });
  wx.onMenuShareAppMessage({
    title: title, // 分享标题
    desc: desc,
    link: link.split("#")[0] + "#" + link.split("#")[1], // 分享链接
    imgUrl: thumb, // 分享图标
    success: function () {},
    cancel: function () {},
  });

  wx.updateTimelineShareData({
    title: title, // 分享标题
    link: link.split("#")[0] + "#" + link.split("#")[1], // 分享链接
    imgUrl: thumb, // 分享图标
    success: function () {},
    cancel: function () {},
  });
});

wx.error(function (res) {});
