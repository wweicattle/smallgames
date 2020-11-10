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
        <div class="luck-draw">挑战成功即可解锁下一关</div>
        <van-button round type="info" size="large" @click="goLuckDrawBtn">
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
          :class="{ final: loadUser.checkPoint == 6 }"
          @click="nextPointBtn"
          >{{ loadUser.checkPoint == 6 ? "最后一关" : "下一关" }}</van-button
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
export default {
  data() {
    return {
      show: true,
      isshowGift: false,
      maxScore: null,
      bestRank: null,
      defeatsPercen: null,
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
    // 关卡加1，游戏 挑战成功！
    this.highestPass = Number(window.localStorage.getItem("luckPointsNum"));
    // 当前关数
    let nowIndex = this.loadUser.checkPoint;
    if (this.highestPass == nowIndex) {
      if (this.highestPass == 6) {
        return;
      } else {
        window.localStorage.setItem("luckPointsNum", this.highestPass + 1);
      }
    }
  },
  mounted() {
    this.getGameResult(this.loadUser);
  },
  methods: {
    // 下一关
    nextPointBtn() {
      switch (this.loadUser.checkPoint) {
        case 0:
          this.$router.push("/zeropage");
          break;
        case 1:
          this.$router.push("/firstpage");
          break;
        case 2:
          this.$router.push("/twopage");
          break;
        case 3:
          this.$router.push("/threepage");
          break;
        case 4:
          this.$router.push("/fourpage");
          break;
        case 5:
          this.$router.push("/fivepage");
          break;
        default:
          break;
      }
    },
    // 游戏关卡结束
    getGameResult(param) {
      getGameResult(param).then((da) => {
        console.log(da);
        if (da.data.errcode == 0) {
          this.bestRank = da.data.data.bestRank;
          this.maxScore = da.data.data.maxScore;
          this.defeatsPercen = (da.data.data.winPercent * 100).toFixed(0) || 0;
        } else {
          this.$notify({
            type: "warning",
            message: "上传结果失败！请刷新重试",
          });
        }
      });
    },
    jumpMysizeBtn() {
      this.$router.push("/ranklist");
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
    left: 0;
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
      opacity: .6;
    }
    //   bottom: 40px;
  }
}
</style>
