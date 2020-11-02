<template>
  <div class="luck-contain">
    <div class="luck-icon">
      <img
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/icon/lucktitle.png"
        alt=""
      />
    </div>
    <div class="per-content">
      <router-view></router-view>
      <div class="header">
        <div class="title-content">
          <span>昵称</span>
          <span>手机号</span>
          <span>中奖礼品 </span>
        </div>
        <ul class="luck-per">
          <template v-for="(i, index) in 40">
            <li :key="index">
              <span>猪的想象</span>
              <span>152****9200</span>
              <span>保温杯500ML</span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.luck-contain {
  height: 100%;
  background: url("https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/icon/luckpeople.png");
  background-size: cover;
  .luck-icon {
    width: 60%;
    margin: 0 auto;
    img {
      width: 100%;
      position: relative;
      z-index: 2;
    }
  }

  .per-content {
    position: relative;
    top: -20px;
    background: #fff;
    color: #000;
    width: 90%;
    height: calc(100% - 130px);
    border-radius: 30px;
    margin: 0 auto;
    padding: 0 10px;
    padding-bottom: 20px;
    box-sizing: border-box;
    overflow: hidden;
    .header {
      height: 100%;
      overflow-y: scroll;
      .title-content {
        margin: 20px 0 10px 0;
        font-weight: 600;
        font-size: 17px;
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
      }
      ul {
        li {
          display: flex;
          justify-content: space-around;
          padding: 10px 0;
          &:nth-of-type(odd) {
            background: rgb(254, 201, 192);
          }
          &:nth-of-type(even) {
            background: rgb(234, 234, 234);
          }
        }
      }
    }
  }
}
</style>
