<template>
  <div
    class="home-contain"
    :key="index"
    :style="{ 'background-image': 'url(' + backImage + ')' }"
    v-if="isrepeatRender"
  >
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
        <img src="~assets/avator.png" alt="" />
        <span class="score-num">{{ scoreNum }}</span>
      </div>

      <div class="line" v-if="isshowline" :style="{ width: lineClass }"></div>
      <div class="box-content" ref="box">
        <img :src="houseImageArr[0]" style="width: 100%" />
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
    <change-success
      v-if="isshowSucess"
      @closeNum="num = false"
    ></change-success>

    <!-- 挑战失败组件 -->
    <change-fail v-if="isshowFail" @refreshHome="failBtn"></change-fail>

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
export default {
  props: {
    backImage: {
      type: String,
      default: "static/img/firstLevel/homeback.png",
    },
    footerImage: {
      type: String,
      default: `static/img/firstLevel/footerImg.png`,
    },
    houseImageArr: {
      type: Array,
      default() {
        return [
          "static/img/firstLevel/house1.png",
          "static/img/firstLevel/house2.png",
        ];
      },
    },
  },
  data() {
    return {
      isrepeatRender: true,
      index: 1,
      scoreNum: 0,
      cloneBox: null,
      house: null,
      footH: null,
      bigbox: null,
      bottom: null,
      totalH: null,
      //   isshowfailline:false,
      num: true,
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
    };
  },
  created() {},
  mounted() {
    const debounce = (fn, wait) => {
      let timer = null;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arguments);
        }, wait);
      };
    };
    const fn = debounce((e) => {
      this.homeBtn();
    }, 70);
    document.querySelector(".home-contain").addEventListener("click", fn);
    // 这是设置动态背景的
    let home = document.querySelector(".home-contain");
    home.style.backgroundImage = `url(${this.backImage})`;
    home.style.backgroundSize = `cover`;

    // console.log(this.$refs.box);
    // let s = document.querySelector(".real-house-contain");
    // console.log(s);
    // s.addEventListener("transitionend", () => {
    //   console.log(22222222222222222222);
    // });

    // let ss = document.querySelector(".box-content");
    // ss.addEventListener("transitionend", () => {
    //   console.log(22222222222222222222);
    // });
    // ss.addEventListener("webkitTransitionEnd", () => {
    //   console.log(22222222222222222222);
    // });
  },
  methods: {
    failBtn() {
      let obj = {
        backImage: this.backImage,
        footerImage: this.footerImage,
        regularImg: this.houseImageArr[0],
        newRoute:this.$route.path
      };
      this.$router.push("/regularpage");

      console.log(obj);
      eventBus.$emit("editphoto", obj);
      window.localStorage.setItem("obj", JSON.stringify(obj));
    },
    regularBtn() {
      // this.isshowwRegular = false;
      // this.scoreNum = 0;
      // this.totalH = null;
      // this.house = null;
      this.$router.push("/home");
      // setTimeout(() => {
      //   this.num = true;
      // });
    },
    // s() {
    //   console.log(222);
    //   this.cloneBox.style.top = 0;
    //   this.cloneBox.style.animationPlayState = "running";

    //   this.bigbox.appendChild(this.cloneBox);
    //   this.isshowline = true;
    //   this.lineClass = this.house.firstElementChild.clientWidth + "px";
    //   this.num = true;
    // },
    marginedit() {
      // 进行房子的高度进行替换
      this.newimgindex = ++this.newimgindex;
      if (this.newimgindex == this.houseImageArr.length) this.newimgindex = 0;
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
          this.isshowline = true;
          this.lineClass = this.house.firstElementChild.clientWidth + "px";
          this.num = true;
        }, 1000);
      } else {
        //   进行添加新的模块
        this.cloneBox.style.top = 0;
        this.cloneBox.style.animationPlayState = "running";
        this.cloneBox.display = "block";
        this.cloneBox.children[0].style.display = "block";
        this.cloneBox.children[0].src = this.houseImageArr[this.newimgindex];

        this.bigbox.appendChild(this.cloneBox);
        this.isshowline = true;
        this.lineClass = this.house.firstElementChild.clientWidth + "px";
        this.num = true;
      }
    },
    homeBtn() {
      // 出现上部房子才可点击下落的事件
      if (this.num) {
        // 点击后房子下落之后不能再次点击,除重新出现新的房子可再次点击
        this.num = false;
        console.log(222);
        // 获取每一次新的房子dom，用该方法可以每次获取第一个box-content。
        let box = document.querySelector(".box-content");
        // 停止顶部房子变化，要开始下落
        box.style.animationPlayState = "paused";
        // 点击 线条进行隐藏
        this.isshowline = false;

        this.house = this.$refs.house;
        this.footH = this.$refs.footH;
        this.bigbox = this.$refs.bigbox;

        this.$nextTick(() => {
          let top = box.getBoundingClientRect().top;
          let w = box.getBoundingClientRect().width;
          let h = box.getBoundingClientRect().height;
          let houseH = getComputedStyle(this.house).height;
          let bodyH = getComputedStyle(document.querySelector(".home-contain"))
            .height;
          //该判断是要减去下面房子的高度所偏移的bottom。这样才可以进行滑道啊正确的房子底部
          if (this.bottom) {
            this.totalH =
              bodyH.split("p")[0] -
              houseH.split("p")[0] -
              top -
              h -
              this.bottom.split("p")[0];
          } else {
            this.totalH = bodyH.split("p")[0] - houseH.split("p")[0] - top - h;
          }
          box.addEventListener("transitionend", () => {
            console.log(22222222222222222222);
          });
          // 下滑的top值
          box.style.top = this.totalH + "px";

          // 克隆一个房子，递归到顶部
          this.cloneBox = box.cloneNode(true);

          setTimeout(() => {
            // 将下落的房子append到底部房子上，之后顶部房子会下移
            box.style.top = 0;
            box.style.left = 0;
            box.style.width = w + "px";
            box.style.height = h + "px";
            box.style.position = "relative";
            box.style.margin = "auto";
            // 设置img白边
            box.children[0].style.display = "block";

            // box.style.background = "#f40";
            //每次插入新的房子前，把原来的第一个房子dom获取
            let oldFirstNode = this.house.firstElementChild;
            this.house.insertBefore(box, oldFirstNode);
            this.scoreNum = this.scoreNum + 10;

            //是否有出现碰撞，之后进行比较线条
            if (w > getComputedStyle(oldFirstNode).width.split("p")[0]) {
              // let div = document.createElement("div");
              // div.style.position = "absolute";
              // div.style.zIndex = 1309;
              // div.style.top = 0;
              // div.style.bottom = 0;
              // div.style.right = 0;
              // div.style.left = 0;
              // div.style.background = "#f40";
              // div.style.width = getComputedStyle(t).width;
              // div.style.height = h + 40 + "px";
              // div.style.margin = "auto";
              // div.style.borderLeft = "2px dotted #000";
              // div.style.borderRight = "2px dotted #000";
              // div.classList.add("shine");
              // 比较两个房子的时候，出现线条时的动态宽高
              this.linefailwidth = getComputedStyle(oldFirstNode).width;
              this.linefailheihgt = h + 40 + "px";
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
                if (this.scoreNum >= 40) {
                  this.isshowSucess = true;
                } else {
                  this.isshowFail = true;
                }
              }, 1500);
              return;
            } else {
              // 没有出现房子碰撞，可能会下移
              this.marginedit();
            }
          }, 1000);
          //   console.log(house.clientHeight);
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
};
</script>

<style  lang="scss" >
.home-contain {
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
      //   background: red;

      /* padding: -200px 200px 200px -200px; */

      /* width: 200px;
                height: 200px; */
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
    border: 1px solid #eee;
    height: 180px;
    padding-top: 70px;
    position: relative;
    .actar-contain {
      top: 10px;
      left: 10px;
      position: absolute;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .score-num {
        font-size: 18px;
        padding-left: 5px;
        vertical-align: 5px;
        color: #fff;
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
      animation: myfirst 1s linear 0s infinite alternate;
      // background-image: url(~assets/home.png) ;
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
      top: 50px;
      //   width: 120px;
      // padding-top: 70px;
      height: 120px;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      //   background: red;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
      z-index: 1001;
      animation: myfirst1 1s ease 0s infinite alternate;
    }
  }

  @keyframes myfirst {
    from {
    }
    to {
      transform: scale(0.25);
    }
  }
  @keyframes myfirst1 {
    0% {
      //   background: red;
      //    width: 50px;
      //   height: 50px;
    }

    50% {
      //   background: red;
      /* padding: -100px 100px 100px -100px; */
      /* width: 100px;
                height: 100px; */
    }

    100% {
      //   background: red;

      /* padding: -200px 200px 200px -200px; */

      /* width: 200px;
                height: 200px; */
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
