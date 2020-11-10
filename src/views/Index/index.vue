<template>
  <div class="home-contain">
    <div class="com-icon">
      <img
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/homes/lilanz.png"
        alt=""
      />
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
      <div class="begin-icon" @click="$router.push('/checkoutpoint')"></div>
      <div class="active" @click="$router.push('active')"></div>
      <div class="mysize" @click="$router.push('mysize')"></div>
      <div class="ranklist" @click="$router.push('ranklist')"></div>
      <div class="luck" @click="$router.push('luckpeople')"></div>

      <!-- <van-button type="primary" @click="$router.push('/checkoutpoint')"
        >开始游戏
      </van-button> -->
      <!-- <van-button type="primary" @click="$router.push('/skillbag')"
        >锦囊</van-button
      > -->
    </div>
  </div>
</template>

<script>
import { getToken, getUserState, getUser } from "network/home";

export default {
  data() {
    return {
      imgNum: 0,
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
    //预加载图片
    this.preloadImg(this.imgArr);
  },
  mounted() {
    // 获取 token
    let token = window.localStorage.getItem("token");
    if (!token || token == "undefined") {
      this.$toast.loading({
        message: "加载数据中..",
        forbidClick: true,
        duration: 0,
      });
    }

   
  },
  methods: {
    //实现图片的预加载
    preloadImg(srcArr) {
      let that = this;
      if (srcArr instanceof Array) {
        for (var i = 0; i < srcArr.length; i++) {
          var oImg = new Image();
          oImg.src = srcArr[i];
          oImg.onload = function () {
            console.log(that);
            console.log(333333333333);
            that.imgNum = that.imgNum + 1;
          };
        }
      }
    },
  },
  watch: {
    imgNum(newVal) {
      console.log(newVal);
      if (newVal == this.imgArr.length) {
        this.$toast.clear();
        // this.$toast.success("数据加载成功！");
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
