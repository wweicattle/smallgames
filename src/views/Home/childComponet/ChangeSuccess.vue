<template>
  <div class="change-success">
    <van-popup v-model="show" :close-on-click-overlay="false">
      <img
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/Winningpage/success.png"
        alt=""
      />
      <div class="text-cotnain">
        <div class="score-num">
          你的成绩为： <span class="detail-num">{{ loadUser.curScore }}分</span>
        </div>
        <div class="success-defeat">
          成功击败了{{ defeatsPercen }}.00%的玩家
        </div>
        <div class="score-content">
          <ul>
            <li>
              <span class="title">最佳成绩</span
              ><span class="score">{{ maxScore }}分</span>
            </li>
            <li>
              <span class="title">最佳排名</span
              ><span class="score">NO.{{ bestRank }}</span>
            </li>
          </ul>
        </div>
        <div class="luck-draw">
          {{ !hiddenNextText ? "挑战成功即可解锁下一关" : "" }}
        </div>
        <van-button
          round
          type="info"
          size="large"
          @click="goLuckDrawBtn"
          class="go-luck"
        >
          赶紧去抽奖
        </van-button>
      </div>
      <div class="button-content">
        <van-button
          round
          type="info"
          class="ranking-list"
          @click="jumpMysizeBtn"
          >排行榜</van-button
        >
        <van-button
          round
          type="info"
          class="return-home"
          @click="nextPointBtn"
          >{{ loadUser.checkPoint == 6 ? "返回首页" : "下一关" }}</van-button
        >
      </div>
    </van-popup>

    <!-- 进行抽奖组件 -->
    <gift-page v-if="isshowGift"> </gift-page>
  </div>
</template>

<script>
import { getGameResult, getToken } from "network/home";
import GiftPage from "./GiftPage";
import { eventBus } from "utils/eventbus";
export default {
  data() {
    return {
      hiddenNextText: false,
      show: true,
      isshowGift: false,
      maxScore: 1000,
      bestRank: 1,
      defeatsPercen: 100,
      highestPass: null,
    };
  },
  props: {
    loadUser: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    console.log(this.loadUser);
    this.$toast.loading({
      message: "加载中..",
      forbidClick: true,
      duration: 0,
    });
    // // 关卡加1，游戏 挑战成功！
    // this.highestPass = Number(window.localStorage.getItem("luckPointsNum"));
    // // 当前关数
    // let nowIndex = this.loadUser.checkPoint;
    // if (this.highestPass == nowIndex) {
    //   if (this.highestPass == 6) {
    //     return;
    //   } else {
    //     window.localStorage.setItem("luckPointsNum", this.highestPass + 1);
    //   }
    // }
  },
  mounted() {
    // console.log(this.loadUser);

    // 保存关卡数，之后会判断是否 返回首页
    window.localStorage.setItem("pointsNum", this.loadUser.checkPoint);
    // 上传分数
    let { isAddYear } = this.loadUser;
    delete this.loadUser.isAddYear;
    if (!isAddYear) {
      this.getGameResult(this.loadUser);
    } else {
      // this.bestRank = 1;
      // this.maxScore = 1000;
      // this.defeatsPercen =100;
      // 隐藏解锁下一关文字
      this.hiddenNextText = true;
      this.$toast.clear();
      return;
    }
  },
  methods: {
    // 下一关
    nextPointBtn() {
      switch (this.loadUser.checkPoint) {
        case 0:
          this.$router.push({ name: "zeropage", params: { canplay: true } });
          break;
        case 1:
          this.$router.push({ name: "firstpage", params: { canplay: true } });
          break;
        case 2:
          this.$router.push({ name: "twopage", params: { canplay: true } });
          break;
        case 3:
          this.$router.push({ name: "threepage", params: { canplay: true } });
          break;
        case 4:
          this.$router.push({ name: "fourpage", params: { canplay: true } });
          break;
        case 5:
          this.$router.push({ name: "fivepage", params: { canplay: true } });
          break;
        default:
          this.$router.push({ name: "index" });
          break;
      }
    },
    // 游戏关卡结束
    getGameResult(param) {
      getGameResult(param).then((da) => {
        if (da.data.errcode == 0) {
          this.$toast.clear();
          this.bestRank = da.data.data.bestRank;
          this.maxScore = da.data.data.maxScore;
          this.defeatsPercen = (da.data.data.winPercent * 100).toFixed(0) || 0;
        } else {
          this.$toast.clear();
          this.$notify({
            type: "warning",
            message: "上传结果失败！请刷新重试",
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
      });
    },
    jumpMysizeBtn() {
      this.$router.push({ name: "ranklist", params: { canplay: true } });
    },
    goLuckDrawBtn() {
      this.$router.push({
        name: "gift",
        params: { canLuck: true, checkoutPonint: this.loadUser.checkPoint },
      });
    },
  },
  components: {
    GiftPage,
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.change-success {
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  .van-popup {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  img {
    width: 100%;
  }
  .text-cotnain {
    left: 9px;
    right: 0;
    margin: auto;
    width: 200px;
    top: 210px;
    position: fixed;
    z-index: 1001;
    text-align: center;
    .score-num {
      font-weight: 600;
      font-size: 18px;
      .detail-num {
        font-size: 21px;
        font-weight: 700;
      }
    }
    .success-defeat {
      padding: 10px 0 20px 0;
      font-size: 15px;
    }
    .score-content {
      //   width: 220px;
      //   margin-left: -10px;
      //   box-sizing: border-box;
      ul {
        padding: 4px 0;
        box-sizing: border-box;
        height: 50px;
        border: 1px solid #000;
        border-left: none;
        border-right: none;

        display: flex;
        li {
          &:first-child {
            border-right: 1px solid #000;
          }
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          span.title {
            font-size: 13px;
            color: rgb(255, 87, 107);
          }
          .score {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }
    }
    .luck-draw {
      color: #000;
      padding: 10px 0 20px 0;
      font-size: 17px;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      font-weight: 700;
    }

    .van-button {
      font-weight: 700;
      background: rgb(255, 87, 107);
      color: #fff;
      height: 36px;
      border: none;
      outline: none;
      letter-spacing: 2px;
      font-size: 17px;
    }
    .go-luck {
      animation: throlle 1s ease 0s 1 normal;
    }
    @keyframes throlle {
      0% {
        transform: scale(1);
      }

      25% {
        transform: scale(1.15);
      }

      50% {
        transform: scale(1.2);
      }

      75% {
        transform: scale(1.15);
      }

      100% {
        transform: scale(1);
      }
    }
  }
  .button-content {
    padding-left: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 470px;
    position: fixed;
    z-index: 1003;
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
    .final {
      color: #4c4747;
      opacity: 0.6;
    }
    //   bottom: 40px;
  }
}
</style>
