<template>
  <div
    @click="clickBtn"
    class="regular-contain"
    :style="{ 'background-image': 'url(' + backImage + ')' }"
  >
    <van-overlay :show="show" @click="show = false"> </van-overlay>
    <div class="box-content" ref="box">
      <img :src="regularImg" />
    </div>
    <div class="detail-content">
      <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam accusamus
      eius velit expedita libero dignissimos possimus officiis autem sint
      consequatur? -->
    </div>
    <img :src="footerImage" alt="" />
    <img
      class="regular-remind"
      src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/homes/gameRegular.png"
      alt=""
    />
  </div>
</template>

<script>
// import { eventBus } from "utils/eventbus";

export default {
  props: {
    // backImage: {
    //   type: String,
    // },
    // footerImage: {
    //   type: String,
    // },
    // regularImg: {
    //   type: String,
    // },
  },
  data() {
    return {
      show: true,
      backImage: null,
      footerImage: null,
      regularImg: null,
      newRoute: null,
    };
  },
  created() {},
  mounted() {
    let obj = JSON.parse(window.localStorage.getItem("obj"));
    this.backImage = obj.backImage;
    this.footerImage = obj.footerImage;
    this.regularImg = obj.regularImg;
    this.newRoute = obj.newRoute;

    // })
  },
  methods: {
    clickBtn() {
      this.$router.push({ name: this.newRoute.slice(1), params: { canplay: true } });
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.regular-contain {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
  // background-image: url("~assets/IMG/homeback.png");
  background-size: cover;
  .detail-content {
    position: fixed;
    z-index: 1;
    color: #fff;
  }
  @keyframes myfirst {
    from {
    }
    to {
      transform: scale(0.25);
    }
  }

  .box-content {
    margin-top: 20px;
    overflow: hidden;
    left: 50%;
    margin-left: -130px;
    top: 0;
    width: 260px;
    height: 140px;
    transition: all 1s;
    position: relative;
    z-index: 100;
    animation: myfirst 1s linear 0s infinite alternate;
    // background-image: url(~assets/home.png) ;
    background-size: cover;
    display: block;
    animation: myfirst 1.5s linear 0s infinite alternate;
    img {
      width: 100%;
      display: block;
    }
  }
  img {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .regular-remind {
    top: 30px;
    z-index: 1;
    width: 100%;
    position: fixed;
    // bottom: 10px;
  }
}
</style>
