<template>
  <div class="fail-success">
    <van-popup v-model="show" :close-on-click-overlay="false">
      <img
        class="bird-img"
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/Winningpage/bird.png"
        alt=""
      />
      <img
        class="back-img"
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/Winningpage/fail.png"
        alt=""
      />
      <div class="text-cotnain">
        <div class="score-num">
          你的成绩为： <span class="detail-num">{{ loadUser.curScore }}分</span>
        </div>
        <div class="success-defeat">成绩必须达到{{ scoreNums }}分才能抽奖</div>
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
        <van-button round type="info" size="large" @click="clickOnceBtn">
          再玩一次
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
          @click="$router.push('/')"
          >返回首页</van-button
        >
      </div>
    </van-popup>
  </div>
</template>

<script>
import { getGameResult } from "network/home";

export default {
  props: {
    scoreNums: {
      type: Number,
    },
    loadUser: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      show: true,
      maxScore: null,
      bestRank: null,
    };
  },
  created() {
    this.$toast.loading({
      message: "加载中..",
      forbidClick: true,
      duration: 0,
    });
  },
  mounted() {
    this.getGameResult(this.loadUser);
  },
  methods: {
    // 游戏关卡结束
    getGameResult(param) {
      getGameResult(param).then((da) => {
        if (da.data.errcode == 0) {
          this.$toast.clear();
          this.bestRank = da.data.data.bestRank;
          this.maxScore = da.data.data.maxScore;
          this.defeatsPercen = da.data.data.defeatsPercen;
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
      this.$router.push("/ranklist");
    },
    clickOnceBtn() {
      // 进行重新加载主页
      this.$emit("refreshHome");
    },
  },
};
</script>

<style scoped lang="scss">
.fail-success {
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
  @keyframes birdLeft {
    from {
    }
    to {
      right: 100%;
    }
  }
  .bird-img {
    top: 20px;
    position: absolute;
    // right: 0;
    width: 30%;
    z-index: 1009;
    right: 0;
    animation: birdLeft 3s linear 0s forwards 1;
  }
  .back-img {
    width: 100%;
    margin-top: -20px;
  }
  .text-cotnain {
    left: 9px;
    right: 0;
    margin: auto;
    width: 200px;
    top: 190px;
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
      // font-weight: 500;
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
      margin-top: 50px;
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
    top: 450px;
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
    //   bottom: 40px;
  }
}
</style>
