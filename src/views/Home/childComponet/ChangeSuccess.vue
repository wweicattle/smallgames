<template>
  <div class="change-success">
    <van-popup v-model="show" :close-on-click-overlay="false">
      <img src="static/img/Winningpage/changesuccess/success.png" alt="" />
      <div class="text-cotnain">
        <div class="score-num">
          你的成绩为： <span class="detail-num">120分</span>
        </div>
        <div class="success-defeat">成功击败了99%的玩家</div>
        <div class="score-content">
          <ul>
            <li>
              <span class="title">最佳成绩</span
              ><span class="score">120分</span>
            </li>
            <li>
              <span class="title">最佳排名</span
              ><span class="score">120分</span>
            </li>
          </ul>
        </div>
        <div class="luck-draw">今天还有三次机会抽奖</div>
        <van-button round type="info" size="large" @click="goLuckDrawBtn"> 赶紧去抽奖 </van-button>
      </div>
      <div class="button-content">
        <van-button round type="info" class="ranking-list">排行榜</van-button>
        <van-button round type="info" class="return-home" @click="$router.push('/')">返回关卡</van-button>
      </div>
    </van-popup>


    <!-- 进行抽奖组件 -->
    <gift-page v-if="isshowGift">

    </gift-page>

  </div>
</template>

<script>
import GiftPage from "./GiftPage"
export default {
  data() {
    return {
      show: true,
      isshowGift:false
    };
  },
  created() {},
  mounted() {},
  methods: {
      goLuckDrawBtn(){
          this.$emit("closeNum")
          this.$router.push("/gift");
      }
  },
  components:{
      GiftPage
  }
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
      padding: 15px 0;
      font-size: 15px;
      font-weight: 500;
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
      letter-spacing:2px;
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
    //   bottom: 40px;
  }
}
</style>
