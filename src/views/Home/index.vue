<template>
  <div
    class="home-contain"
    :key="index"
    :style="{ 'background-image': 'url(' + backImage + ')' }"
    v-if="isrepeatRender"
    ref="homeContainRef"
  >
    <!-- 盒子发生碰撞时进行 -->
    <div
      class="shineCopy"
      ref="lineref"
      v-if="isshowshinecopy"
      :style="{ width: linefailwidth, height: linefailheihgt }"
    ></div>

    <!--  -->
    <div class="test" ref="bigbox">
     
      <!-- 头像区域 -->
      <div class="actar-contain">
        <img :src="peractar" alt="" />
        <span class="score-num">{{ scoreNum }}</span>
      </div>
      <div class="music-content" ref="music" @click.stop="pauseMusicBtn">
        <van-icon name="music-o" />
        <div class="pause-line" v-if="!musicState">\</div>
      </div>

      <div
        class="line"
        v-if="isshowline"
        :style="{ width: lineClass, animation: lineAnimation }"
      ></div>
      <!-- animation: myfirst 1s linear 0s infinite alternate; -->
      <div class="box-content" ref="box" :style="animationSpeed">
        <img :src="houseImageArr[0]" style="width: 100%" @load="imgloaded" />
      </div>
    </div>

    <!-- 下部真实堆积的房子 -->
    <div class="real-house-contain" ref="house">
      <!--  -->
      <div class="house">
        <img :src="footerImage" alt="" />
      </div>
    </div>

    <!-- 房子的最高高度的参照 -->
    <div class="font-content" ref="footH"></div>

    <!-- 挑战成功组件 -->
    <change-success :loadUser="loadUser" v-if="isshowSucess"></change-success>

    <!-- 挑战失败组件 -->
    <change-fail
      v-if="isshowFail"
      :scoreNums="scoreNums"
      :loadUser="loadUser"
    ></change-fail>

    <!-- 显示规则组件 -->
    <regular-page
      v-if="isshowwRegular"
      @closeRgular="regularBtn"
      :backImage="backImage"
      :footerImage="footerImage"
      :regularImg="houseImageArr[0]"
    ></regular-page>
  </div>
</template>

<script>
import ChangeSuccess from "./childComponet/ChangeSuccess";
import ChangeFail from "./childComponet/ChangeFail";
import RegularPage from "./childComponet/RegularPage";
import { eventBus } from "utils/eventbus";
import { getUser, getToken } from "network/home";
export default {
  name: "homePage",
  props: {
    checkPointNum: {
      type: Number,
      default: null,
    },
    isSecond: {
      type: Boolean,
      default: false,
    },
    scoreNums: {
      type: Number,
    },
    stepsScore: {
      type: Number,
    },
    timeAnimaiton: {
      type: String,
      default: "1s",
    },
    backImage: {
      type: String,
      default:
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/homeback.png",
    },
    footerImage: {
      type: String,
      default: `https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/footerImg.png`,
    },
    houseImageArr: {
      type: Array,
      default() {
        return [
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/house1.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/house2.png",
        ];
      },
    },
  },
  data() {
    return {
      peractar: null,
      musicState: 1,
      isrepeatRender: true,
      index: 1,
      scoreNum: 0,
      cloneBox: null,
      house: null,
      footH: null,
      bigbox: null,
      bottom: null,
      totalH: null,
      num: false,
      isshowline: false,
      lineClass: null,
      oldwidth: null,
      isshowshinecopy: true,
      linefailwidth: null,
      linefailheihgt: null,
      // 下落动画结束
      downAnimationEnd: null,
      newimgindex: 0,
      isshowSucess: false,
      isshowFail: false,
      isshowwRegular: false,
      loadUser: {},
      userInfo: null,
    };
  },
  created() {
    // 初始化头像
    this.userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    this.peractar = this.userInfo.headImg;
  },
  mounted() {
    // 节流防止频繁点击
    this.throttle();
    // 进行添加游戏音乐
    this.initMusic(
      [
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/sound/bg.mp3",
        "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/sound/bling.mp3",
      ],
      true
    );

    if (window.localStorage.getItem("musicState") == "pause") {
      this.musicState = 1;
      this.pauseMusicBtn();
    }
  },
  methods: {
    // 点击 节流
    throttle() {
      let that = this;
      // 发起节流，防止点击太频繁
      let throttleTime = function (func, wait) {
        let prev = 0;
        return function () {
          let now = Date.now();
          // 进行判断是否用户点击了禁止播放音效
          if (now - prev > wait) {
            if (window.localStorage.getItem("musicState") != "pause") {
              //点击的声音
              that.y.play();
            }

            func.apply(this);
            prev = now;
          }
        };
      };
      let throole = throttleTime(this.homeBtn, 150);
      document
        .querySelector(".home-contain")
        .addEventListener("click", throole);
    },
    // 组件初始化创建音效
    initMusic(srcArr, isloop) {
      this.x = document.createElement("AUDIO");
      this.x.setAttribute("src", srcArr[0]);
      this.x.loop = isloop;
      this.x.autoplay = true;
      this.x.volume = 0.2;
      this.y = document.createElement("AUDIO");
      this.y.setAttribute("src", srcArr[1]);
      this.y.volume = 0.2;
      this.y.playbackRate = 3;
      this.$refs.homeContainRef.appendChild(this.x);
      this.$refs.homeContainRef.appendChild(this.y);
    },
    // 音乐声音设置
    pauseMusicBtn() {
      if (this.musicState) {
        this.$refs.music.style.animation = "none";
        this.musicState = 0;
        this.x.pause();
        this.y.pause();
        window.localStorage.setItem("musicState", "pause");
      } else {
        console.log(this.x);
        this.$refs.music.style.animation = "music 2s linear 0s infinite";
        this.musicState = 1;
        this.x.play();
        this.y.play();
        window.localStorage.setItem("musicState", "play");
      }
    },
    //设置 上部盒子加载完之后才有点击落下事件
    imgloaded() {
      this.num = true;
    },
    imgload() {
      this.num = true;
      // 出现参照线条
      this.isshowline = true;
    },
    // 房子下移
    marginedit() {
      // 进行房子的高度进行替换
      this.newimgindex = ++this.newimgindex;
      console.log(this.newimgindex);
      console.log(this.isSecond);

      // 这是判断 第三关，因为这一关的图片有问题，让他一直处于最上面的一张图片
      if (this.newimgindex == this.houseImageArr.length && this.isSecond) {
        this.newimgindex = this.houseImageArr.length - 1;
      } else if (this.newimgindex == this.houseImageArr.length) {
        this.newimgindex = 0;
      }

      // if (this.newimgindex == this.houseImageArr.length) {
      //   this.newimgindex=0
      // }
      // 真实房子是否需要偏移
      if (this.house.clientHeight > this.footH.clientHeight) {
        // 偏移的bottom
        this.house.style.bottom =
          -(this.house.clientHeight - this.footH.clientHeight) + "px"; //   进行添加新的模块
        // 把偏移的bottom进行保存,当
        this.bottom = this.house.style.bottom;
        setTimeout(() => {
          this.cloneBox.style.top = 0;
          this.cloneBox.style.animationPlayState = "running";
          this.cloneBox.display = "block";
          this.cloneBox.children[0].style.display = "block";
          this.cloneBox.children[0].src = this.houseImageArr[this.newimgindex];
          this.bigbox.appendChild(this.cloneBox);
          this.lineClass = this.house.firstElementChild.clientWidth + "px";
          this.imgload();
        }, 1000);
      } else {
        //   进行添加新的模块
        this.cloneBox.style.top = 0;
        this.cloneBox.style.animationPlayState = "running";
        this.cloneBox.display = "block";
        this.cloneBox.children[0].style.display = "block";
        this.cloneBox.children[0].src = this.houseImageArr[this.newimgindex];
        this.bigbox.appendChild(this.cloneBox);
        this.lineClass = this.house.firstElementChild.clientWidth + "px";
        this.imgload();
      }
    },
    // 点击房子事件
    homeBtn() {
      // 出现上部房子才可点击下落的事件
      if (this.num) {
        // 点击后房子下落之后不能再次点击,除重新出现新的房子可再次点击
        this.num = false;
        // 点击 线条进行隐藏
        this.isshowline = false;
        // 获取每一次新的房子dom，用该方法可以每次获取第一个box-content。
        let box = document.querySelector(".box-content");
        // 停止顶部房子变化，要开始下落
        box.style.animationPlayState = "paused";
        this.house = this.$refs.house;
        this.footH = this.$refs.footH;
        this.bigbox = this.$refs.bigbox;
        this.$nextTick(() => {
          let top = box.getBoundingClientRect().top.toFixed(0);
          let w = box.getBoundingClientRect().width.toFixed(2);
          let h = box.getBoundingClientRect().height.toFixed(2);
          let houseH = getComputedStyle(this.house).height;
          let bodyH = getComputedStyle(document.querySelector(".home-contain"))
            .height;
          //该判断是要减去下面房子的高度所偏移的bottom。这样才可以进行滑道啊正确的房子底部
          if (this.bottom) {
            this.totalH =
              Number(bodyH.split("p")[0]).toFixed(0) -
              Number(houseH.split("p")[0]).toFixed(0) -
              top -
              h -
              this.bottom.split("p")[0];
          } else {
            this.totalH =
              Number(bodyH.split("p")[0]).toFixed(0) -
              Number(houseH.split("p")[0]).toFixed(0) -
              top -
              h;
          }

          // 下滑的top值
          box.style.top = this.totalH.toFixed(0) + "px";
          // 克隆一个房子，递归到顶部
          this.cloneBox = box.cloneNode(true);

          setTimeout(() => {
            // 重新获取房子尺寸，避免之后房子大小变化
            let w = box.getBoundingClientRect().width.toFixed(2);
            let h = box.getBoundingClientRect().height.toFixed(2);
            // 将下落的房子append到底部房子上，之后顶部房子会下移
            box.style.top = 0;
            box.style.left = 0;
            box.style.width = w + "px";
            box.style.height = h + "px";
            box.style.position = "relative";
            box.style.margin = "auto";
            // 设置img白边
            box.children[0].style.display = "block";
            box.children[0].style.width = w + "px";
            box.children[0].style.height = h + "px";

            // box.style.background = "#f40";
            //每次插入新的房子前，把原来的第一个房子dom获取
            let oldFirstNode = this.house.firstElementChild;
            this.house.insertBefore(box, oldFirstNode);

            //是否有出现碰撞，之后进行比较线条
            if (
              Number(w) > getComputedStyle(oldFirstNode).width.split("p")[0]
            ) {
              // 比较两个房子的时候，出现线条时的动态宽高
              this.linefailwidth = getComputedStyle(oldFirstNode).width;
              this.linefailheihgt = h + 60 + "px";
              this.$refs.lineref.style.display = "block";
              box.appendChild(this.$refs.lineref);

              // 进行显示挑战成功或者失败页面
              this.$toast.loading({
                message: "加载中...",
                forbidClick: true,
                duration: 0, // 持续展示 toast
              });
              setTimeout(() => {
                // 清除加载提示框
                this.$toast.clear();
                // 进行收藏关卡页面保存本地存储，之后会进行使用
                let obj = {
                  backImage: this.backImage,
                  footerImage: this.footerImage,
                  regularImg: this.houseImageArr[0],
                  newRoute: this.$route.path,
                };
                window.localStorage.setItem("obj", JSON.stringify(obj));

                let url = {
                  checkPoint: this.checkPointNum,
                  curScore: this.scoreNum,
                  result: this.scoreNum >= this.scoreNums ? "win" : "fai",
                };

                this.loadUser = url;

                //看是否游戏结束后是否超过分数 可抽奖
                if (this.scoreNum >= this.scoreNums) {
                  this.isshowSucess = true;
                } else {
                  this.isshowFail = true;
                }
              }, 1500);
              return;
            } else {
              // 盒子无碰撞进行分数叠加
              this.scoreNum = this.scoreNum + this.stepsScore;
              // 没有出现房子碰撞，可能会下移
              this.marginedit();
            }
          }, 1000);
        });
      } else {
        return;
      }
    },
  },
  watch: {},
  components: {
    ChangeSuccess,
    ChangeFail,
    RegularPage,
  },
  computed: {
    animationSpeed() {
      let animation = `myfirst ${this.timeAnimaiton} linear 0s infinite alternate`;
      return {
        animation,
      };
    },
    lineAnimation() {
      return `myfirst1 ${this.timeAnimaiton} ease 0s infinite alternate`;
    },
  },
};
</script>

<style  lang="scss" >
// #faeaed
.home-contain {
  user-select: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  .shineCopy {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1010;
    margin: auto;
    display: none;
    border: 0px solid red;
    animation: myfirst2 2s ease 0s infinite normal;
  }
  @keyframes myfirst2 {
    0% {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
    25% {
      border-left: none;
      border-right: none;
    }
    50% {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
    75% {
      border-left: none;
      border-right: none;
    }
    100% {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
  }
  @-webkit-keyframes myfirst2 {
    0% {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
    25% {
      border-left: none;
      border-right: none;
    }
    50% {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
    75% {
      border-left: none;
      border-right: none;
    }
    100% {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
  }
  @-moz-keyframes myfirst2 {
    0% {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
    25% {
      border-left: none;
      border-right: none;
    }
    50% {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
    75% {
      border-left: none;
      border-right: none;
    }
    100% {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
  }
  .shine {
    animation: myfirst2 2s ease 0s infinite normal;
    -webkit-animation: myfirst2 2s ease 0s infinite normal;
  }

  .test {
    // border: 1px solid #eee;
    height: 180px;
    padding-top: 80px;
    position: relative;
    // 显示notice样式
    .van-notice-bar {
      opcity: 0.8;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }
    .actar-contain {
      top: 23px;
      left: 10px;
      position: absolute;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .score-num {
        user-select: none;
        -webkit-user-select: none; /*禁用手机浏览器的用户选择功能 */
        -moz-user-select: none;
        font-size: 18px;
        padding-left: 5px;
        vertical-align: 5px;
        color: #fff;
      }
    }
    .music-content {
      // top: 20px;
      top: 25px;
      right: 20px;
      width: 40px;
      height: 40px;
      position: absolute;
      font-size: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      background: rgb(235, 225, 222);
      animation: music 2s linear 0s infinite;
      // z-index: 1002;
      .pause-line {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        font-size: 32px;
        transform: rotate(-25deg);
      }
    }
    @keyframes music {
      from {
      }
      to {
        transform: rotate(360deg);
      }
    }
    .box-content {
      overflow: hidden;
      left: 50%;
      margin-left: -140px;
      top: 0;
      width: 280px;
      transition: all 1s;
      position: relative;
      z-index: 100;
      background-size: cover;
      display: block;

      img {
        display: block;
      }
      .line-fail {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 300px;
        height: 200%;
        z-index: 102;
      }
    }
    .line {
      top: 75px;
      height: 100px;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      border-left: 1px dotted rgb(102, 97, 97);
      border-right: 1px dotted rgb(102, 97, 97);
      z-index: 1099;
      // animation: myfirst1 1s ease 0s infinite alternate;
    }
  }

  @keyframes myfirst {
    from {
    }
    to {
      transform: scale(0.16);
    }
  }
  @keyframes myfirst1 {
    0% {
    }

    50% {
    }

    100% {
      transform: scale(1, 0.2);
    }
  }

  .real-house-contain {
    position: fixed;
    transition: all 1s;
    width: 100vw;
    bottom: 0;
    z-index: 1000;
    .house {
      bottom: 0;
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .font-content {
    position: fixed;
    bottom: 0;
    height: 40%;
    width: 100vw;
    // background: #000;
  }
}
</style>
