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
              @load="imgload"
            />
            <span :class="{ highBox: index == nowindex }">{{
              Number(index) + 1
            }}</span>
          </li>
        </template>
        <template v-for="(i, index) in 6 - lucklevel">
          <li :key="index + lucklevel">
            <img
              src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/unluck/7.png"
              alt=""
              @click="checkPointBtn(index + lucklevel)"
              :class="{ highBox: index + lucklevel == nowindex }"
            />
            <span>{{ Number(index) + Number(lucklevel) + 1 }}</span>
          </li>
        </template>
        <div class="new-point">
          <li
            @click="
              indexState = 7;
              copynowindex = 6;
            "
            :class="{ highBox: indexState == 7 }"
          >
            <img
              src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/pointOne.png"
            />
          </li>
          <li
            @click="
              indexState = 8;
              copynowindex = 7;
            "
            :class="{ highBox: indexState == 8 }"
          >
            <img
              src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/pointTwo.png"
            />
          </li>
        </div>
      </ul>

      <div class="clickBox" @click="beginGamesBtn">
        <img
          src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/unluck/begin.png"
          alt=""
        />
      </div>
    </van-popup>
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
    </div>
  </div>
</template>

<script>
import { getUser, goToPrizeTest, goToGame } from "network/home";
export default {
  data() {
    return {
      indexState: null,
      watchLoadNums: 0,
      lucklevel: null,
      show: true,
      nowindex: 0,
      copynowindex: 0,
      umlockiconArr: [
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/unluck/1.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/unluck/2.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/unluck/3.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/unluck/4.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/unluck/5.png",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/unluck/6.png",
      ],
    };
  },
  created() {
    // setInterval(() => {
    //   goToPrizeTest().then((da) => {
    //     if (da.data.errcode == 0) {
    //       if (da.data.data && typeof da.data.data == "object") {
    //         alert("success")
    //       } else {
    //         console.log(da.data.data);
    //       }
    //     }
    //   });
    // }, 1000);
    // wwcattle
    let state = this.$route.params.canplay;
    if (!state) {
      window.location.href = window.localStorage.getItem("initPage");
    }
    // this.$toast.loading({
    //   message: "加载中..",
    //   forbidClick: true,
    //   duration: 0,
    // });
    let obj = {
      wxid: Number(window.localStorage.getItem("wxid")),
      token: window.localStorage.getItem("newToken"),
    };
    // wwcattle
    getUser(obj).then((da) => {
      console.log(obj);
      console.log(da);
      this.$toast.clear();
      if (da.data.errcode == 0) {
        da.data.data.headImg =
          da.data.data.headImg != "undefined"
            ? da.data.data.headImg
            : "http://oos-fj2.ctyunapi.cn/lilanz/mall_public/img/smthumb.jpg";
        // window.localStorage.setItem("userInfo", JSON.stringify(da.data.data));
        // 获取关卡数
        let lucknum = da.data.data.highestPass;
        // if (lucknum == "undefined" || !lucknum) {
        //   this.lucklevel = 1;
        // } else {
        this.highestPass = Number(lucknum) == 7 ? 6 : Number(lucknum);
        this.lucklevel = this.highestPass;
        // }
      } else {
        this.$dialog
          .confirm({
            title: "警告",
            message: "获取关卡信息失败，重新加载？",
          })
          .then(() => {
            window.localStorage.removeItem("token");
            window.location.reload();
          })
          .catch(() => {
            // on cancel
          });
      }
    });
  },
  mounted() {},
  methods: {
    // 上传关卡次数
    beginToGame(params) {
      goToGame(params)
        .then((da) => {
          if (da.data.errcode == 0) {
            console.log(da);
            console.log("用户上传当前关卡成功！");
          } else {
            console.log(da);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    imgload() {
      this.watchLoadNums = ++this.watchLoadNums;
    },
    beginGamesBtn() {
      // 上传点击关卡数，统计关卡次数
      this.beginToGame({ checkPoint: this.copynowindex + 1 });
      switch (this.copynowindex) {
        case 0:
          // this.$router.push("/zeropage");
          this.$router.push({ name: "zeropage", params: { canplay: true } });

          break;
        case 1:
          // this.$router.push("/firstpage");
          this.$router.push({ name: "firstpage", params: { canplay: true } });

          break;
        case 2:
          // this.$router.push("/twopage");
          this.$router.push({ name: "twopage", params: { canplay: true } });
          break;
        case 3:
          // this.$router.push("/threepage");
          this.$router.push({ name: "threepage", params: { canplay: true } });
          break;
        case 4:
          // this.$router.push("/fourpage");
          this.$router.push({ name: "fourpage", params: { canplay: true } });
          break;
        case 5:
          // this.$router.push("/fivepage");
          this.$router.push({ name: "fivepage", params: { canplay: true } });
          break;
        case 6:
          // this.$router.push("/fivepage");
          this.$router.push({ name: "addYearPage", params: { canplay: true } });
          break;
        case 7:
          // this.$router.push("/fivepage");
          this.$router.push({
            name: "addYearPageTwo",
            params: { canplay: true },
          });
          break;
        default:
          this.$notify({
            color: "#fff",
            background: "rgb(255,125,112)",
            message: "该关卡暂未解锁!",
          });
      }
    },
    checkPointBtn(index) {
      // 当点击关卡时，下面关卡不高亮
      this.indexState = null;
      // 进行点击的关卡进行高亮
      this.nowindex = index;
      // 进行判断是否 该关卡 没有解锁，没有 解锁直接就100让他不可能
      if (index + 1 > this.lucklevel) return (this.copynowindex = 100);
      this.copynowindex = index;
    },
  },
  watch: {
    // nowindex(newVal) {
    //   if (newVal>=0) this.indexState = null;
    // },
    indexState(newVal) {
      if (newVal) this.nowindex = null;
    },
    watchLoadNums(newVal) {
      if (newVal == this.lucklevel) {
        this.$toast.clear();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.check-point-contain {
  height: 100%;
  position: fixed;
  background-image: url("https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/homes/homeback.jpg");
  background-size: cover;
  width: 100%;
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
  }
  .highBox {
    transform: scale(1.3);
    color: #fff !important;
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
      top: 445px;
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
      background-image: linear-gradient(
        to bottom,
        rgb(255, 125, 112),
        rgb(255, 119, 106),
        rgb(255, 87, 74)
      );
      border-radius: 8px;
      padding: 18px 10px;
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      margin: auto;
      width: 280px;
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
          padding: 8px 0 8px 0;
          color: #9c806c;
          font-size: 18px;
          font-weight: 600;
          font-family: Georgia, "Times New Roman", Times, serif;
        }
      }
      .new-point {
        display: flex;
        width: 90%;
        justify-content: space-evenly;
        border-top: 1px dotted #fff;
        padding-top: 5px;
      }
    }
    .select-luck {
      text-align: center;
      margin: 0 auto;
      font-size: 26px;
      font-weight: 600;
      width: 240px;
      color: #fff;
      margin-top: 40px;
    }
  }
}
</style>
