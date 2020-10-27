<template>
  <div>
    <transition name="bounce">
      <div v-if="ss" class="total-content">
        <van-notice-bar
          left-icon="volume-o"
          text="请仔细阅读活动说明查看规则等。"
          scrollable
        />
        <div class="skill-contain">
          <van-tabs
            v-model="active"
            animated
            @click="acitveItemBtn"
          >
            <van-tab v-for="(val, index) in titleArr" :title="val" :key="index">
            </van-tab>
          </van-tabs>
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
      ss: false,
      active: 0,
      titleArr: ["活动说明", "排行榜", "我的奖品"],
    };
  },
  created() {},
  mounted() {
    console.log(this.$route.path)
    // if(this.$route.path=="/mysize"&&(!window.localStorage.getItem("activeItem"))){
    //   window
    // };
    let stattenum = window.localStorage.getItem("activeItem");
    this.active = Number(stattenum);
    this.ss = true;
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
    $route(newVal,oldVal) {
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
};
</script>

<style scoped lang="scss">
.van-notice-bar {
  padding: 0 20px;
}
.skill-contain {
  margin: 0 25px;
  height: 100%;
  box-sizing: border-box;
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
