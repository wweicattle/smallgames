<template>
  <div class="check-point-contain">
    <ul>
      <!-- <li><van-button>1</van-button></li>
      <li><van-button>2</van-button></li>
      <li><van-button>3</van-button></li>
      <li><van-button>4</van-button></li>
      <li><van-button>5</van-button></li> -->
      <template v-for="(i, index) in 6">
        <li :key="index" @click="checkPointBtn(index)">
          <van-button>{{ i }}</van-button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    checkPointBtn(index) {
      switch (index) {
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/firstpage");
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.check-point-contain {
  width: 100%;
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    li {
      padding: 20px 0;
      text-align: center;
      width: 33%;
    }
  }
}
</style>
