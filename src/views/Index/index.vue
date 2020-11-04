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
import { getUserInfo, getToken, getUserState } from "network/home";

export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log(22222222222222);
    // 获取 tokens
    let token = window.localStorage.getItem("token");
    let tokens = window.localStorage.getItem("tokens");
    if (!tokens || tokens == "undefined") {
      console.log(token);
      getToken(token).then((da) => {
        console.log(da);
        if (da.data.errcode == 0) {
          window.localStorage.setItem("tokens", da.data.data.token);
          window.localStorage.setItem("wxid", da.data.data.wxid);
        } else {
          this.$notify({
            type: "warning",
            message: "获取用户Token失败！请重试",
          });
        }
      });
    }

    // // 判断是否内部人员
    // getUserState().then((da) => {
    //   console.log(da);
    // });
  },
  methods: {},
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
