<template>
  <div
    class="home-contain"
    style="backgroundImage: url('static/img/homes/homeback.jpg')"
  >
    <div class="com-icon">
      <img src="static/img/homes/lilanz.png" alt="" />
    </div>
    <div class="header">
      <img src="static/img/homes/header.png" alt="" />
    </div>
    <div class="center">
      <img src="static/img/homes/center.png" alt="" />
    </div>
    <div class="footer">
      <img src="static/img/homes/begingame.png" alt="" />
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
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
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
  // background: url("/static/img/homes/homeback.png");
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
