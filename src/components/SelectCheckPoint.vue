<template>
  <div class="check-point-contain">
    <van-popup v-model="show">
      <div class="select-luck">选择关卡</div>
      <ul>
        <template v-for="(i, index) in lucklevel">
          <li :key="index">
            <img
              :src="umlockiconArr[i - 1]"
              alt=""
              @click="checkPointBtn(index)"
              :class="{ highBox: index == nowindex }"
            />
            <span>{{ index + 1 }}</span>
          </li>
        </template>
        <template v-for="(i, index) in 6 - lucklevel">
          <li :key="6 - index">
            <img
              src="static/img/unluck/7.png"
              alt=""
              @click="checkPointBtn(6 - index)"
              :class="{ highBox: 6 - index == nowindex }"
            />
            <span>{{ index + lucklevel + 1 }}</span>
          </li>
        </template>
      </ul>
      <div class="clickBox" @click="beginGamesBtn">
        <img src="static/img/begingameIcon.png" alt="" />
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lucklevel: 4,
      show: true,
      nowindex: 0,
      umlockiconArr: [
        "static/img/unluck/1.png",
        "static/img/unluck/2.png",
        "static/img/unluck/3.png",
        "static/img/unluck/4.png",
        "static/img/unluck/5.png",
        "static/img/unluck/6.png",
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    beginGamesBtn() {
      switch (this.nowindex) {
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/firstpage");
          break;
        default:
          // this.$toast.
          this.$notify({
            color: "#fff",
            background: "rgb(255,125,112)",
            message: "该关卡暂未解锁!",
          });
      }
    },
    checkPointBtn(index) {
      this.nowindex = index;
    },
  },
};
</script>

<style scoped lang="scss">
.check-point-contain {
  height: 100%;
  position: fixed;
  background: url("~assets/22.png");
  width: 100%;
  .highBox {
    transform: scale(1.2);
  }

  .van-popup {
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: relative;
    overflow: hidden;
    .clickBox {
      color: #fff;
      position: absolute;
      top: 440px;
      left: 0;
      right: 0;
      margin: auto;
      width: 80px;
      height: 120px;
      text-align: center;
      img {
        width: 80%;
      }
    }
    ul {
      // background: rgb(255,125,112);
      background-image: linear-gradient(
        to bottom,
        rgb(255, 125, 112),
        rgb(255, 119, 106),
        rgb(255, 87, 74)
      );
      border-radius: 8px;
      padding: 15px;
      position: absolute;
      top: 150px;
      left: 0;
      right: 0;
      margin: auto;
      width: 240px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        margin: 10px 0;
        text-align: center;
        width: 33%;
        // height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 46px;
          height: 46px;
        }
        span {
          padding: 5px 0 8px 0;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          font-family: Georgia, "Times New Roman", Times, serif;
        }
      }
    }
    .select-luck {
      text-align: center;
      margin: 0 auto;
      font-size: 26px;
      font-weight: 600;
      width: 240px;
      color: #fff;
      margin-top: 70px;
    }
  }
}
</style>
