<template>
  <div id="app">
    <!-- <van-notice-bar
      left-icon="volume-o"
      text="该为测试版本,禁止对外公布,中奖奖品不发货"
      ref="ss"
      :scrollable="false"
    /> -->
    <keep-alive include="giftresult"> <router-view> </router-view></keep-alive>
  </div>
</template>
<script>
import { getShareContent } from "network/home.js";

// 确保已有wxid,进行用户分享标题设计
// import "utils/shareContent.js"
export default {
  name: "App",
  data: function () {
    return {
      appidNum: null,
      timestampNum: null,
      nonceStrNum: null,
      signature: null,
    };
  },
  created() {
    this.$nextTick(() => {});
  },
  mounted() {
    if (window.localStorage.getItem("newToken")) {
      // 进行转发朋友圈设置标题
      getShareContent().then((da) => {
        console.log(da);
        if (da.data.errcode == 0) {
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
            let { origin, pathname } = window.location;
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
        } else {
        }
      });
    }
  },
  components: {},
  methods: {},
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);
html,
#app {
  -webkit-touch-callout: none;
  -moz-touch-callout: none;
  -ms-touch-callout: none;
  touch-callout: none;
  user-select: none;
  -webkit-user-select: none; /*禁用手机浏览器的用户选择功能 */
  -moz-user-select: none;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-size: contain;
}
</style>
