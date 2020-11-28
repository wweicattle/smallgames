<template>
  <div class="luck-contain">
    <div class="luck-icon">
      <img
        src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/icon/lucktitle.png"
        alt=""
        @load="imgload"
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
          <div v-if="isshowPer">
            <template v-for="(i, index) in luckpersonArr">
              <li :key="index">
                <span class="nick-name">{{ i.nickName }}</span>
                <span class="tel">{{ i.tel }}</span>
                <span class="prize-name">{{ i.prizeName }}</span>
              </li>
            </template>
          </div>
          <div v-else>
            <van-empty image="error" description="无中奖用户！" />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getPrizeList } from "network/home";

export default {
  data() {
    return {
      luckpersonArr: [],
      isshowPer: null,
    };
  },
  created() {
    let state = this.$route.params.canplay;
    if (!state) {
      window.location.href = window.localStorage.getItem("initPage");
    }
    this.$toast.loading({
      message: "加载中..",
      forbidClick: true,
      duration: 0,
    });
  },

  mounted() {
    getPrizeList().then((da) => {
      this.$toast.clear();
      if (da.data.errcode == 0) {
        let data = da.data.data;
        this.luckpersonArr = data;
        this.isshowPer = data.length > 0 ? true : false;
      } else {
        this.$notify({
          type: "warning",
          message: "获取中奖名单失败！请重试",
        });
        setTimeout(() => {
          this.$dialog
            .confirm({
              title: "警告",
              message: "获取信息错误，重新加载？",
            })
            .then(() => {
              window.localStorage.removeItem("token");
              window.location.reload();
            })
            .catch(() => {
              // on cancel
            });
        }, 1500);
      }
    });
  },
  methods: {
    imgload() {
      this.$toast.clear();
    },
  },
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
        top: 0;
        position: -webkit-sticky;
        position: sticky;
        font-weight: 600;
        font-size: 17px;
        display: flex;
        justify-content: space-around;
        padding: 30px 0 10px 0;
        background: #fff;
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
          .nick-name {
            width: 40px;
          }
          .tel {
            width: 60px;
          }
          .prize-name {
            display: inline-block;
            width: 70px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
