<template>
  <div class="gift-contain">
    <div class="luck-after" v-show="contentLuck">
      <div v-if="isluckAlready">
        <img
          src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/gift/giftsuccess.png"
          alt=""
          @load="imgload"
        />
        <div class="button-content">
          <div class="luck-gift">{{ prizeName }}</div>
          <div class="luck-detail">
            <van-button round type="info" @click="watchluckBtn">
              查看我的奖品
            </van-button>
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
        <img
          src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/gift/giftFail.png"
          alt=""
          @load="imgload"
        />
        <div class="button-content">
          <div class="luck-details">
            <van-button round type="info" @click="$router.push('/regularpage')">
              再玩一次
            </van-button>
          </div>
          <div class="button-box">
            <van-button
              round
              type="info"
              class="ranking-list"
              @click="
                $router.push({ name: 'ranklist', params: { canplay: true } })
              "
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
import { goToPrize, getUserState } from "network/home";
export default {
  name: "giftresult",
  data() {
    return {
      isluckAlready: null,
      checkPoint: null,
      prizeName: null,
      contentLuck: false,
    };
  },
  created() {
    let state = this.$route.params.canplay;
    if (!state) {
      window.location.href = window.localStorage.getItem("initPage");
    }
    this.$toast.loading({
      message: "加载中..",
      forbidClick: true,
      duration: 0,
    });
  },
  mounted() {},

  methods: {
    // 查看奖品
    watchluckBtn() {
      window.location.href = "http://flh.lilanz.com/myprize/index.html";
    },
    imgload() {
      // this.$toast.clear();
    },
    getUserLuckResult(num) {
      let url = {
        checkPoint: this.checkPoint,
        userid: num,
      };
      // 开始抽奖
      goToPrize(url)
        .then((da) => {
          if (da.data.errcode == 0) {
            this.$toast.clear();
            if (da.data.data && typeof da.data.data == "object") {
              this.contentLuck = true;
              // 成功的奖品
              this.isluckAlready = true;
              this.prizeName = da.data.data.prizeName;
              window.localStorage.setItem(
                "cluckState",
                JSON.stringify({ state: 1, mes: da.data.data.prizeName })
              );
            } else {
              this.contentLuck = true;
              this.isluckAlready = false;
              window.localStorage.setItem(
                "cluckState",
                JSON.stringify({ state: 2 })
              );
            }
          } else {
            this.$toast.clear();
            this.contentLuck = true;
            this.$notify({
              type: "warning",
              message: da.data.errmsg || "抽奖失败!请重试",
            });
            setTimeout(() => {
              this.$dialog
                .confirm({
                  title: "警告",
                  message: "获取信息错误，重新加载？",
                })
                .then(() => {
                  window.localStorage.removeItem("token");
                  window.location.reload();
                })
                .catch(() => {
                  // on cancel
                });
            }, 1500);
          }
        })
        .catch((da) => {
          this.$notify({
            type: "warning",
            message: "错误信息" + da,
          });
        });
    },
    showLuck(num) {
      switch (Number(num)) {
        case 1:
          this.getUserLuckResult(1);
          break;
        case 0:
          this.getUserLuckResult(0);
          break;
        default:
          this.getUserLuckResult(1);
          break;
      }
    },
    beginLuck() {
      let userstate = window.localStorage.getItem("userIndetify");
      if (userstate == 1 || userstate == 0 || userstate == "undefined") {
        this.showLuck(userstate);
      } else {
        let code = window.localStorage.getItem("userStates");
        getUserState(code).then((da) => {
          if (da.data.errcode == 0) {
            let state = da.data.data.userid;
            window.localStorage.setItem("userIndetify", state);
            this.showLuck(state);
          } else {
            this.$notify({
              type: "warning",
              message: (da.data.errmsg || "用户身份鉴权异常!") + "请重试",
            });
          }
        });
      }
    },
  },
  activated() {
    // 进入该页面隐藏
    this.contentLuck = false;
    // 获取当前关卡数
    this.checkPoint = this.$route.params.checkoutPonint;
    if (this.checkPoint) {
      // 开始抽奖
      this.beginLuck();
    } else {
      this.$toast.clear();
      let obj = JSON.parse(window.localStorage.getItem("cluckState"));
      if (obj.state == 1) {
        this.prizeName = obj.mes;
        this.contentLuck = true;
        this.isluckAlready = true;
      } else {
        this.contentLuck = true;
        this.isluckAlready = false;
      }
    }
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
