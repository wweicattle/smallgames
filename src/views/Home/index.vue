<template>
  <div class="home-contain" @click="homeBtn">
    <div class="test" ref="bigbox">
      <!-- {{this.scoreNUm}} -->
      <div class="line" v-if="isshowline" :style="{ width: lineClass }"></div>
      <div class="box-content" ref="box">
        <!-- <div v-if="isshowfailline"></div> -->
      </div>
    </div>

    <!-- <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, officia?
    </div> -->
    <div class="tests" ref="house">
      <div class="house">
        房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子房子
      </div>
    </div>
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
      houseFirstNode: null,
      oldwidth: null,
    };
  },
  created() {},
  mounted() {},
  methods: {
    marginedit() {
      if (this.house.clientHeight > this.footH.clientHeight) {
        this.house.style.bottom =
          -(this.house.clientHeight - this.footH.clientHeight) + "px";
      }
      this.bottom = this.house.style.bottom;

      this.$nextTick(() => {
        //   进行添加新的模块

        setTimeout(() => {
          console.log(32222222);

          this.cloneBox.style.top = 0;
          this.cloneBox.style.animationPlayState = "running";
          // this.cloneBox.top="0";
          // this.cloneBox.top="0";
          this.$refs.bigbox.appendChild(this.cloneBox);
          this.isshowline = true;
          this.lineClass = this.house.firstElementChild.clientWidth + "px";
          this.num = true;
          console.log(this.cloneBox);
          console.log(this.footH.clientHeight);
          console.log(this.house.clientHeight);
        }, 2000);
      });
    },
    homeBtn() {
      if (this.num) {
        this.isshowline = false;
        this.num = false;
        let house = this.$refs.house;
        this.house = this.$refs.house;

        let footH = this.$refs.footH;
        this.footH = this.$refs.footH;

        let bigbox = this.$refs.bigbox;
        this.bigbox = this.$refs.bigbox;
        //   let box = this.$refs.box;
        let box = document.querySelector(".box-content");

        let top = box.getBoundingClientRect().top;
        box.style.animationPlayState = "paused";
        console.log(getComputedStyle(box).marginTop);
        this.$nextTick(() => {
          let w = box.getBoundingClientRect().width;
          let h = box.getBoundingClientRect().height;
          console.log(w, h);
          let houseH = getComputedStyle(this.house).height;
          let bodyH = getComputedStyle(document.querySelector(".home-contain"))
            .height;
          // console.log(top, h, houseH, bodyH);
          //该判断是要减去下面房子的高度所减去的bottom。
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

          //   bigbox.style.position = "static";
          //   box.style.marginLeft = "auto";
          //   box.style.marginRight = "auto";
          //   box.style.marginTop = 0;
          //   box.style.marginBottom= 0;
          //   box.style.margin = "0 auto";

          box.style.top = this.totalH + "px";

          // 判断是否游戏失败！
          console.log(h);
          //   if (this.houseFirstNode) {
          //     this.oldwidth = getComputedStyle(this.houseFirstNode).width;
          //     if (this.oldwidth.split("p")[0] < w) {
          //       //   console.log("defeat");
          //       //   console.log(+5);

          //       //   console.log(box);
          //       setTimeout(() => {
          //         console.log(122222);
          //         console.log(w,h);
          //         // console.log(getComputedStyle(box).height);
          //         // console.log(getComputedStyle(box).width);

          //         // this.houseFirstNode.appendChild(div);
          //         // let div = document.createElement("div");
          //         // div.style.position = "absolute";
          //         // div.style.top = 0;
          //         // div.style.bottom = 0;
          //         // div.style.right = 0;
          //         // div.style.left = 0;
          //         // div.style.width = "100px";
          //         // div.style.height = "100px";
          //         // div.style.margin = "auto";
          //         // div.style.borderLeft = "1px dotted #000";
          //         // div.style.borderRight = "1px dotted #000";
          //       }, 1000);
          //       console.log("defaat");
          //       return;
          //     }
          //   }

          //   if()

          //   box.style.marginRight = auto;

          //   bigbox.style.top = 0;

          this.cloneBox = box.cloneNode();
          //   console.log(this.cloneBox);
          setTimeout(() => {
            box.style.top = 0;
            box.style.leboxt = 0;
            box.style.width = w + "px";
            box.style.height = h + "px";
            // box.style.zIndex = 1004;
            box.style.position = "relative";
            box.style.margin = "auto";
            box.style.background = "yellow";
            console.log(house, box);
            let t = house.firstElementChild;
            house.insertBefore(box, house.firstElementChild);
            this.houseFirstNode = house.firstElementChild;

            this.scoreNUm = ++this.scoreNUm;
            // box.style.display = "none";
            console.log(house.firstElementChild);
            if (
              getComputedStyle(house.firstElementChild).width.split("p")[0] >
              getComputedStyle(t).width.split("p")[0]
            ) {
              let div = document.createElement("div");
              div.style.position = "absolute";
              div.style.zIndex = 1309;
              //   div.sclass = 1309;

              div.style.top = 0;
              div.style.bottom = 0;
              div.style.right = 0;
              div.style.left = 0;
              //   div.style.background = "#f40";

              div.style.width = getComputedStyle(t).width;
              div.style.height = h + 40 + "px";
              div.style.margin = "auto";
              //   div.style.borderLeft = "2px dotted red";
              //   div.style.borderRight = "2px dotted red";
              house.firstElementChild.appendChild(div);
              div.classList.add("shine");

              return;
            }

            this.marginedit();
          }, 1000);
          //   console.log(house.clientHeight);
        });
      } else {
        return;
      }
    },
  },
  //   computed:{
  //       lineClass(){
  //           this
  //       }
  //   }
};
</script>

<style  lang="scss" >
.home-contain {
  @keyframes myfirst2 {
    0% {
      //   background: red;
      //    width: 50px;
      //   height: 50px;
      border-left: 2px dotted #fff;
      border-right: 2px dotted #fff;
    }
    // 10% {
    //   border-left: none;
    //   border-right: none;
    // }
    25% {
      //   border-left: 2px dotted #fff;
      border-left: none;
      border-right: none;
      //   border-right: 2px dotted #fff;
    }
    // 30% {
    //   border-left: 2px dotted #fff;
    //   border-right: 2px dotted #fff;
    // }
    50% {
      //   background: #fff;
      /* padding: -100px 100px 100px -100px; */
      /* width: 100px;
                height: 100px; */
      border-left: 2px dotted #fff;
      border-right: 2px dotted #fff;
      //   border-left: none;
      //   border-right: none;
    }
    // 70% {
    //   border-left: 2px dotted #fff;
    //   border-right: 2px dotted #fff;
    // }
    75% {
      border-left: none;
      border-right: none;
    }
    100% {
      border-left: 2px dotted #fff;
      border-right: 2px dotted #fff;
      //   background: red;

      /* padding: -200px 200px 200px -200px; */

      /* width: 200px;
                height: 200px; */
    }
  }
  .shine {
    animation: myfirst2 8s ease 0s infinite alternate;
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
      transition: all 1s;
      position: relative;
      z-index: 100;
      animation: myfirst 1s ease 0s infinite alternate;
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

  .tests {
    position: fixed;
    // height: 20vh;
    transition: all 3s;

    // background: rgb(31, 165, 76);
    width: 100vw;
    bottom: 0;
    z-index: 1000;
    .house {
      bottom: 0;
      border: 1px solid orange;
      //   width: 100vw;
      transition: all 1s;

      // width: 100%;
      // height:;
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
