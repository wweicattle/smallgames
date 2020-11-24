<template>
  <div class="home-contain">
    <div class="com-icon">
      <img
        @click="watchUserInfo"
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/homes/lilanz.png"
        alt=""
      />
      <van-popup
        v-model="showUserInfo"
        position="top"
        :style="{ height: '30%' }"
      >
        {{ userInfo }}{{userWxis}}
      </van-popup>
      <div class="game-name">2020利郎岁末福利会</div>
    </div>
    <div class="header">
      <img
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/homes/header.png"
        alt=""
      />
    </div>
    <div class="center">
      <img
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/homes/center.png"
        alt=""
      />
    </div>
    <div class="footer">
      <img
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/homes/begingame.png"
        alt=""
      />
      <div class="begin-icon" @click="beginGameBtn"></div>
      <div class="active" @click="clickBack('active')"></div>
      <div class="mysize" @click="mysizeBtn"></div>
      <div class="ranklist" @click="clickBack('ranklist')"></div>
      <div class="luck" @click="clickBack('luckpeople')"></div>
    </div>
  </div>
</template>

<script>
import { getToken, getUserState, getUser } from "network/home";

export default {
  data() {
    return {
      useInfo: JSON.parse(window.localStorage.getItem("userInfo")),
      imgNum: 0,
      showUserInfo: false,
      userInfo: window.localStorage.getItem("userInfo"),
      userWxis:window.localStorage.getItem("wxid")+window.localStorage.getItem("newToken"),
      // usestate:window.localStorage.getItem("userInfo"),
      imgArr: [
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/footerImg.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel2/footerImg.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/footerImg.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/footerImg.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/footerImg.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/house1.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel2/house1.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel2/house2.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house1.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house2.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house3.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house4.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house5.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house1.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house2.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house3.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house4.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house5.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house1.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house2.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house3.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house4.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house5.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house6.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house7.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house1.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house2.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house3.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house4.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house5.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/Winningpage/fail.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/Winningpage/success.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/homeback.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel2/homeback.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/homeback.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/homeback.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/homeback.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/homeback.png",
      ],
    };
  },
  created() {
    // 首页进行加载数据资源中
    let userIndetify = window.localStorage.getItem("userIndetify");
    if (!userIndetify) {
      this.$toast.loading({
        message: "加载资源中..",
        forbidClick: true,
        duration: 0,
      });
    }
    // 判断过期时间是否重新
    if (
      Date.now() - Number(window.localStorage.getItem("timeOver")) >=
      12 * 3600 * 1000
    ) {
      window.localStorage.removeItem("token");
    }
    //预加载图片
    this.preloadImg(this.imgArr);
  },
  mounted() {},
  methods: {
    mysizeBtn() {
      window.location.href = "http://flh.lilanz.com/myprize/index.html";
    },
    clickBack(url) {
      if (!window.localStorage.getItem("token")) {
        this.$toast.loading({
          message: "身份过期，重新登录中",
          forbidClick: true,
          duration: 1500,
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        this.$router.push({ name: url, params: { canplay: true } });
      }
    },

    watchUserInfo() {
      this.showUserInfo = true;
    },
    beginGameBtn() {
      let useInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      let userStates = window.localStorage.getItem("userStates");
      if (!useInfo || !userStates || !window.localStorage.getItem("token")) {
        this.$toast.loading({
          message: "身份过期，重新登录中",
          forbidClick: true,
          duration: 1500,
        });
        window.localStorage.removeItem("token")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        // this.$router.push("/checkoutpoint");
        this.$router.push({ name: "checkoutpoint", params: { canplay: true } });
      }
    },
    //实现图片的预加载
    preloadImg(srcArr) {
      let that = this;
      if (srcArr instanceof Array) {
        for (var i = 0; i < srcArr.length; i++) {
          var oImg = new Image();
          oImg.src = srcArr[i];
          oImg.onload = function () {
            that.imgNum = that.imgNum + 1;
          };
        }
      }
    },
  },
  watch: {
    imgNum(newVal) {
      if (newVal == this.imgArr.length) {
        // let token = window.localStorage.getItem("token");
        // if (token) {
        this.$toast.clear();
        // }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home-contain {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: url("https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/homes/homeback.jpg");
  background-size: cover;
  .com-icon {
    text-align: center;
    img {
      margin-top: 20px;
      width: 24%;
    }
    .game-name {
      padding-top: 2px;
      letter-spacing: 2.5px;
      font-size: 19px;
      color: #fff;
      font-weight: 600;
      position: relative;
      z-index: 1000;
    }
  }
  .header {
    width: 40%;
    position: absolute;
    top: 0;
    right: 50px;
    img {
      width: 100%;
    }
  }
  .center {
    width: 70%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 120px;
    // right: 60px;
    img {
      width: 100%;
    }
  }
  .footer {
    width: 80%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: calc((100% - 521px) / 2);
    // bottom: 0;
    img {
      width: 100%;
    }
    .begin-icon {
      width: 150px;
      height: 50px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
    }
    .active {
      width: 116px;
      height: 36px;
      position: absolute;
      left: 0;
      top: 60px;
    }
    .mysize {
      width: 116px;
      height: 36px;
      position: absolute;
      right: 0;
      top: 60px;
    }
    .ranklist {
      width: 116px;
      height: 36px;
      position: absolute;
      left: 0;
      top: 110px;
    }
    .luck {
      width: 116px;
      height: 36px;
      position: absolute;
      right: 0;
      top: 110px;
    }
  }
}
</style>
