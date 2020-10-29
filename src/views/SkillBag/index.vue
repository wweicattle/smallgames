<template>
  <div class="skill-contain" red ref="skill">
    <transition name="bounce">
      <div v-if="isshowskill" class="total-content">
        <van-notice-bar
          left-icon="volume-o"
          text="请仔细阅读活动说明查看规则等。"
          scrollable
        />
        <div class="skill-contain">
          <van-tabs v-model="active" animated @click="acitveItemBtn">
            <van-tab v-for="(val, index) in titleArr" :title="val" :key="index">
            </van-tab>
          </van-tabs>
    
          <div class="return-index" @click="isshowskill=false">
            <van-icon name="clear" />
          </div>
        </div>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "skillbag",
  data() {
    return {
      isshowskill: false,
      active: 0,
      titleArr: ["活动说明", "排行榜", "我的奖品"],
    };
  },
  created() {},
  mounted() {
    this.isshowskill = true;
    this.$refs.skill.addEventListener("animationend", () => {
      if (!this.isshowskill) {
        this.$router.push("/")
      } 
    });
    let stattenum = window.localStorage.getItem("activeItem");
    console.log(stattenum);
    this.active = Number(stattenum);
  },
  methods: {
    acitveItemBtn(name) {
      // 进行状态 保存本地 之后进行重新刷新
      window.localStorage.setItem("activeItem", name);
    },
  },
  watch: {
    active: {
      handler(newVal) {
        switch (newVal) {
          case 0:
            this.$router.push("/active");
            break;
          case 1:
            this.$router.push("/rankinglist");
            break;
          case 2:
            this.$router.push("/mysize");
            break;
        }
      },
      immediate: true,
    },
    $route(newVal, oldVal) {
      console.log(newVal.path);
      switch (newVal.path) {
        case "/mysize":
          this.active = 2;
          window.localStorage.setItem("activeItem", 2);
          break;
        case "/active":
          this.active = 0;
          window.localStorage.setItem("activeItem", 0);
          break;
        case "/rankinglist":
          this.active = 1;
          window.localStorage.setItem("activeItem", 1);
          break;
      }
    },
  },
  beforeDestroy() {},
  destroyed() {
    // this.ss=false
    // this.$router.push("/")
  },
};
</script>

<style scoped lang="scss">
.van-notice-bar {
  padding: 0 20px;
}
.skill-contain {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  .van-tabs {
    padding: 0 24px;
  }
  .return-index {
    position: absolute;
    right: 10px;
    top: -6px;
    bottom: 0;
    margin: auto;
    height: 20px;
    font-size: 20px;
    color: #999;
    .van-icon {
    }
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate(375px, -667px);
  }
  50% {
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
