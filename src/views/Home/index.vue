<template>
  <div class="home-contain" @click="homeBtn">
    <!-- 房子间彭碰撞出现的线条 -->
    <div
      class="shineCopy"
      ref="lineref"
      v-if="isshowshinecopy"
      :style="{ width: linefailwidth, height: linefailheihgt }"
    ></div>

    <!--  -->
    <div class="test" ref="bigbox">
      <div class="line" v-if="isshowline" :style="{ width: lineClass }"></div>
      <div class="box-content" ref="box">
        <img src="~assets/logo.png" alt="" style="height:100%;width:100%" />
        <!-- <div v-if="isshowfailline"></div> -->
      </div>
    </div>

    <!-- 下部真实堆积的房子 -->
    <div class="real-house-contain" ref="house">
      <!--  -->
      <div class="house">
        房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子
      </div>
    </div>

    <!-- 房子的最高高度的参照 -->
    <div class="font-content" ref="footH">底部房子的最高高度</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scoreNUm: 0,
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
    };
  },
  created() {},
  mounted() {
    this.$refs.house.addEventListener("transitionend", this.s);
  },
  methods: {
    s() {
      console.log(222);
      this.cloneBox.style.top = 0;
      this.cloneBox.style.animationPlayState = "running";
      this.bigbox.appendChild(this.cloneBox);
      this.isshowline = true;
      this.lineClass = this.house.firstElementChild.clientWidth + "px";
      this.num = true;
    },
    marginedit() {
      // 两个房子碰撞判断
      if (this.house.clientHeight > this.footH.clientHeight) {
        // 偏移的bottom
        this.house.style.bottom =
          -(this.house.clientHeight - this.footH.clientHeight) + "px";
      }
      // 把偏移的bottom进行保存,当
      this.bottom = this.house.style.bottom;

      this.$nextTick(() => {
        //   进行添加新的模块
        setTimeout(() => {
          this.cloneBox.style.top = 0;
          this.cloneBox.style.animationPlayState = "running";
          this.bigbox.appendChild(this.cloneBox);
          this.isshowline = true;
          this.lineClass = this.house.firstElementChild.clientWidth + "px";
          this.num = true;
        }, 1000);
      });
    },
    homeBtn() {
      // 出现上部房子才可点击下落的事件
      if (this.num) {
        // 获取每一次新的房子dom，用该方法可以每次获取第一个box-content。
        let box = document.querySelector(".box-content");
        // 停止顶部房子变化，要开始下落
        box.style.animationPlayState = "paused";
        // 点击 线条进行隐藏
        this.isshowline = false;
        // 点击后房子下落之后不能再次点击,除重新出现新的房子可再次点击
        this.num = false;
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
          // 下滑的top值
          box.style.top = this.totalH + "px";

          // 克隆一个房子，递归到顶部
          this.cloneBox = box.cloneNode();

          setTimeout(() => {
            // 将下落的房子append到底部房子上，之后顶部房子会
            box.style.top = 0;
            box.style.left = 0;
            box.style.width = w + "px";
            box.style.height = h + "px";
            box.style.position = "relative";
            box.style.margin = "auto";
            box.style.background = "#f40";
            //每次插入新的房子前，把原来的第一个房子dom获取
            let oldFirstNode = this.house.firstElementChild;
            this.house.insertBefore(box, oldFirstNode);
            this.scoreNUm = ++this.scoreNUm;

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
  watch: {
    downAnimationEnd() {},
  },
};
</script>

<style  lang="scss" >
.home-contain {
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
      //   background: red;

      /* padding: -200px 200px 200px -200px; */

      /* width: 200px;
                height: 200px; */
    }
  }
  .shine {
    animation: myfirst2 2s ease 0s infinite normal;
    -webkit-animation: myfirst2 2s ease 0s infinite normal;

    // // -o-animation: myfirst2 8s ease 0s infinite alternate;
    // // -ms-animation: myfirst2 8s ease 0s infinite alternate;
  }
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  //   background: #f40;
  position: relative;
  .test {
    border: 1px solid #eee;
    height: 180px;
    // padding-left: 160px;
    // 可以变化高度
    padding-top: 70px;
    position: relative;

    .box-content {
      left: 50%;
      margin-left: -20px;
      top: 0;
      width: 40px;
      height: 40px;
      background: yellow;
      transition: top 1s;
      // -webkit-transition: all 1s;
      position: relative;
      z-index: 100;
      animation: myfirst 1s ease 0s infinite alternate;
      // background-image: url(~assets/home.png) ;
      background-size:cover;
      img{}
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
      //   width: 120px;
      height: 20px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      //   background: red;
      border-left: 1px dotted #000;
      border-right: 1px dotted #000;
      z-index: 1001;
      animation: myfirst1 1s ease 0s infinite alternate;
    }
  }

  @keyframes myfirst {
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
      transform: scale(5, 3);
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
      transform: scale(1, 5);
    }
  }

  .real-house-contain {
    position: fixed;
    // height: 20vh;
    transition: all 1s;
    // background: rgb(31, 165, 76);
    width: 100vw;
    bottom: 0;
    z-index: 1000;
    .house {
      bottom: 0;
      border: 1px solid orange;
    }
  }
  .font-content {
    position: fixed;
    bottom: 0;
    height: 50vh;
    width: 100vw;
    // background: #000;
  }
}
</style>
