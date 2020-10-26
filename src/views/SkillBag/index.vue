<template>
  <transition name="bounce">
    <div class="skill-contain" v-if="ss">
      <van-tabs v-model="active" animated @click="acitveItemBtn" type="card">
        <van-tab v-for="(val, index) in titleArr" :title="val" :key="index">
        </van-tab>
      </van-tabs>
      <router-view></router-view>
    </div>
  </transition>
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
    this.ss = true;
  },
  methods: {
    acitveItemBtn(name) {
      this.active = name;
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
  },
};
</script>

<style scoped lang="scss">
.skill-contain {
  padding-top: 10px;
  margin: 0 25px;
  height: 100%;
  box-sizing: border-box;
  //   background: #f40;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate(375px,-667px);
  }
  50% {
  }
  100% {
    transform: translate(0,0);
  }
}
</style>
