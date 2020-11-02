<template>
  <div class="gift-contain">
    <img
      class="gift"
      src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/gift/gift.png"
      ref="img"
      alt=""
      v-if="!isshowLuck"
    />
    <div class="luck-after" v-else>
      <div v-if="isluckAlready">
        <img src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/gift/giftsuccess.png" alt="" />
        <div class="button-content">
          <div class="luck-gift">一等奖</div>
          <div class="luck-detail">
            <van-button round type="info"> 查看奖品详情 </van-button>
          </div>
          <div class="button-box">
            <van-button
              round
              type="info"
              class="ranking-list"
              @click="$router.push('/ranklist')"
              >排行榜</van-button
            >
            <van-button
              round
              type="info"
              class="return-home"
              @click="$router.push('/')"
              >返回首页</van-button
            >
          </div>
        </div>
      </div>
      <div v-else>
        <img src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/gift/giftFail.png" alt="" />
        <div class="button-content">
          <div class="luck-details">
            <van-button round type="info" @click="$router.push('/regularpage')">
              再玩一次
            </van-button>
          </div>
          <div class="button-box">
            <van-button round type="info" class="ranking-list"
              >排行榜</van-button
            >
            <van-button
              round
              type="info"
              class="return-home"
              @click="$router.push('/')"
              >返回首页</van-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshowLuck: false,
      isluckAlready: false,
    };
  },
  created() {},
  mounted() {
    if (!this.$route.params.canLuck) {
      this.$toast.fail("不能抽奖！")
    } else {
      let that = this;
      // 礼物开奖动画结束后
      that.$refs.img.addEventListener("animationend", this.showLuckAfter);
      that.$refs.img.addEventListener("webkitAnimationEnd", this.showLuckAfter);
      that.$refs.img.addEventListener("click", () => {
        that.$refs.img.classList.add("test");
      });
    }
  },
  methods: {
    showLuckAfter() {
      this.isshowLuck = true;
    },
  },
};
</script>

<style scoped lang="scss">
.gift-contain {
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .luck-after {
    img {
      width: 85%;
    }
  }
  .test {
    animation: myfirst2 1s ease 0s 1 normal forwards;
  }
  img {
    width: 74%;
    left: 0;
    right: 0;
    // top: 20px;
    margin: auto;
    position: absolute;
  }
  img.gift {
    top: 40px;
  }
  .button-content {
    width: 100%;
    top: 330px;
    position: fixed;
    .luck-gift {
      font-weight: 600;
      font-size: 17px;
      color: #fff;
      text-align: center;
    }
    .luck-detail {
      margin: 40px 0;
      text-align: center;
      .van-button {
        padding: 0 30px;
        font-weight: 700;
        background: rgb(255, 111, 98);
        color: #fff;
        height: 36px;
        border: none;
        outline: none;
        letter-spacing: 2px;
        font-size: 17px;
      }
    }
    .luck-details {
      margin: 40px 0;
      text-align: center;
      .van-button {
        padding: 0 50px;
        font-weight: 700;
        background: rgb(238, 185, 113);
        color: #000;
        height: 36px;
        border: none;
        outline: none;
        letter-spacing: 2px;
        font-size: 17px;
      }
    }
    .button-box {
      padding-left: 10px;
      display: flex;
      justify-content: center;
      width: 100%;
      // top: 470px;
      // position: fixed;
      // z-index: 1003;
      .van-button {
        //   margin-right: 25px;
        color: #000;
        font-weight: 600;
        font-size: 17px;
        border: none;
        outline: none;
        width: 110px;
      }
      .ranking-list {
        margin-right: 20px;
        background: rgb(234, 202, 0);
      }
      .return-home {
        margin-left: 20px;

        background: rgb(88, 202, 235);
      }
    }

    //   bottom: 40px;
  }
}

@keyframes myfirst2 {
  0% {
    /* transform: translate(150px,150px) ; */
    transform: scale(1.2);
  }

  20% {
    /* transform: scale(1, 1); */
    /* top: 100px;
                left: 100px; */

    transform: scale(1.3);
  }

  30% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.32, 1.32);
  }

  45% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.3);
  }

  60% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.32, 1.32);
  }

  75% {
    /* top: 100px;
                left: 100px; */

    transform: scale(1.3);
  }

  90% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.32, 1.32);
  }

  100% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.3);
  }
}
</style>
