<template>
  <div class="active-contain">
    <van-notice-bar
      left-icon="volume-o"
      text="请仔细阅读活动说明查看规则。"
      scrollable
    />
    <div class="active-mysize">
      <img src="~assets/IMG/mysize.png" alt="" />
      <div class="active-regular">
        <ul>
          <li>1.搭建房子，建的房屋层数越高分数越高</li>
          <li>2.用户通过规定的分数即可解锁下一关,共6关。</li>
          <li>3.不限制用户游戏次数,每关挑战成功,即可抽奖一次。</li>
          <li>4.本次的活动最终解释权归利郎所有。</li>
          <!-- <li>
            5.第七关,第八关,分数不记入最终排行榜。且只需分数大于100即可抽奖一次
          </li> -->
        </ul>

        <div class="table-score">
          <table>
            <tr>
              <td></td>
              <td>通关层数</td>
              <td>解锁分数</td>
              <td>叠加分数</td>
            </tr>
            <tr>
              <td>第一关</td>
              <td>4层</td>
              <td>40分</td>
              <td>10分/层</td>
            </tr>
            <tr>
              <td>第二关</td>
              <td>4层</td>
              <td>80分</td>
              <td>20分/层</td>
            </tr>

            <tr>
              <td>第三关</td>
              <td>5层</td>
              <td>150分</td>
              <td>30分/层</td>
            </tr>
            <tr>
              <td>第四关</td>
              <td>6层</td>
              <td>240分</td>
              <td>40分/层</td>
            </tr>
            <tr>
              <td>第五关</td>
              <td>6层</td>
              <td>300分</td>
              <td>50分/层</td>
            </tr>
            <tr>
              <td>第六关</td>
              <td>8层</td>
              <td>400分</td>
              <td>50分/层</td>
            </tr>
          </table>
        </div>
        <ul class="remind-content">
          <!-- <li>*根据关卡的级别逐渐调整方块变大变小的速度 适当增加游戏难度</li> -->
          <li>
            **第七关,第八关,分数不记入最终排行榜。且只需分数大于100即可抽奖一次
          </li>
        </ul>
        <div class="active-time">
          <span> 活动时间 </span>
          <div>2020年12月3日--2021年2月3日</div>
        </div>
      </div>

      <img
        src="~assets/IMG/luck.png"
        alt=""
        class="luck-thing"
        @load="imgload"
      />
      <img src="~assets/IMG/howtoluck.png" alt="" class="how-luck" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    let state = this.$route.params.canplay;
    if (!state) {
      window.location.href = window.localStorage.getItem("initPage");
    }
  },
  mounted() {
    this.$toast.loading({
      message: "加载中..",
      forbidClick: true,
      duration: 0,
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
.active-contain {
  height: 100%;
  background: rgb(254, 108, 83);
  overflow-y: scroll;
  .van-notice-bar {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1009;
  }
  .active-mysize {
    margin-top: 50px;
    text-align: center;
    position: relative;
    img {
      // position: absolute;
      // left: 0;
      // right: 0;
      // margin: auto;
      width: 240px;
    }
    .active-regular {
      font-size: 14px;
      color: rgb(254, 108, 83);
      width: 330px;
      background: #fff;
      margin: 0 auto;
      margin-top: -24px;
      border-radius: 30px;
      padding: 50px 34px 0 34px;
      ul {
        text-align: left;
        li {
          padding: 7px 0;
          line-height: 20px;
        }
      }
      .active-time {
        line-height: 24px;
        font-weight: 600;
        font-size: 17px;
        padding: 25px 0 35px 0;
      }
      .table-score {
        margin: 20px 0;
        table tr:first-child {
          background-color: rgb(230, 189, 189);
        }
        table td,
        table th {
          color: #000;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(156, 186, 95);
          padding: 7px;
          font-size: 12px;
          font-family: Verdana;
          border: 1px solid #e0c8c8;
        }
        table {
          margin: 0 auto;
          border-collapse: collapse;
          font-family: Georgia, "Times New Roman", Times, serif !important;
        } /*合并间距*/
      }
      .remind-content {
        font-size: 12px;
      }
    }
    .luck-thing {
      margin: 30px 0;
      width: 330px;
    }
    .how-luck {
      width: 330px;
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }

  // img {
  //   width: 100%;
  // }
}
</style>
