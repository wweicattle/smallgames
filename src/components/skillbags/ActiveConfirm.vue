<template>
  <div class="active-contain">
    <van-notice-bar
      left-icon="volume-o"
      text="请仔细阅读活动说明查看规则等。"
      scrollable
    />
    <img
      src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/homes/confirm.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.active-contain {
  height: 100%;
  overflow-y: scroll;
  .van-notice-bar {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
  img {
    width: 100%;
  }
}
</style>
