<template>
  <div class="rank-contain">
    <van-divider style="color: #fff">只展示前100名</van-divider>
    <div class="rank-title">排行榜</div>
    <div class="header-per">
      <ul>
        <li>
          <div class="actar">
            <img
              :src="headerrank[1] ? headerrank[1].headImg : ''"
              alt=""
              class="actar-header"
            />
            <img
              class="icon"
              src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/RankList/2.png"
              alt=""
            />
          </div>
          <div class="name-num">
            <span class="rank-name">
              {{
                headerrank[1]
                  ? headerrank[1].nickName.slice(0, 1).padEnd(5, ".")
                  : ""
              }}
            </span>
            <span class="rank-score">
              {{ headerrank[1] ? headerrank[1].totalScore : "" }}分
            </span>
          </div>
        </li>
        <li>
          <div class="actar number-one">
            <img
              class="actar-header"
              :src="headerrank[0] ? headerrank[0].headImg : ''"
              alt=""
            />
            <img
              class="icon"
              src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/RankList/1.png"
              alt=""
            />
          </div>
          <div class="name-num">
            <span class="rank-name">
              {{
                headerrank[0]
                  ? headerrank[0].nickName.slice(0, 1).padEnd(5, ".")
                  : ""
              }}
            </span>
            <span class="rank-score">
              {{ headerrank[0] ? headerrank[0].totalScore : "" }}分
            </span>
          </div>
        </li>

        <li>
          <div class="actar">
            <img
              class="actar-header"
              :src="headerrank[2] ? headerrank[2].headImg : ''"
              alt=""
            />
            <img
              class="icon"
              src="https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/RankList/3.png"
              alt=""
            />
          </div>
          <div class="name-num">
            <span class="rank-name">
              {{
                headerrank[2]
                  ? headerrank[2].nickName.slice(0, 1).padEnd(5, ".")
                  : ""
              }}
            </span>
            <span class="rank-score">
              {{ headerrank[2] ? headerrank[2].totalScore : "" }}分
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="person-detail">
      <ul>
        <template v-for="(i, index) in allrank">
          <li :key="index">
            <span class="per-num"> NO.{{ index + 4 }}</span>
            <div class="per-avator">
              <van-image lazy-load :src="allrank[index].headImg" />
              <span class="per-name">{{ allrank[index].nickName.slice(0,1).padEnd(3,".") }}</span>
            </div>
            <span class="per-score">{{ allrank[index].totalScore }}分 </span>
          </li>
        </template>
        <van-divider style="color: #fff">{{
          pernums >=100 ? "只展示前100名" : "当前用户只有" + pernums + "人"
        }}</van-divider>

        <li class="my-rank">
          <div class="tag"><van-tag round type="danger">我的排名</van-tag></div>
          <span class="per-num">
            NO.{{ myrank[0] ? myrank[0].rank : "" }}
          </span>
          <div class="per-avator">
            <!-- <img :src="perAcatar" alt="" /> -->
            <van-image lazy-load :src="perAcatar" />
            <span class="per-name">{{ perName }}</span>
          </div>
          <span class="per-score">
            {{ myrank[0] ? myrank[0].score : "" }}分
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRankList } from "network/home";
export default {
  data() {
    return {
      myrank: [],
      allrank: [],
      headerrank: [],
      pernums: 100,
    };
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
    getRankList().then((da) => {
      this.$toast.clear();
      if (da.data.errcode == 0) {
        let data = da.data.data;
        this.pernum = data.allRank.length;
        // 如果人数小于10人显示当前人数
        if (this.pernum < 100) {
          this.pernums = this.pernum;
        }
        this.headerrank = data.allRank.slice(0, 3);
        this.allrank = data.allRank.slice(3);
        this.myrank = data.myRank;
      } else {
        this.$notify({
          type: "warning",
          message: "获取排行榜失败！请重试",
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
  computed: {
    perAcatar() {
      let actar = JSON.parse(window.localStorage.getItem("userInfo"));
      return actar ? actar.headImg : "";
    },
    perName() {
      let name = JSON.parse(window.localStorage.getItem("userInfo"));
      return name ? name.nickName : "";
    },
  },
};
</script>

<style  lang="scss">
.rank-contain {
  padding: 0 30px;
  height: 100%;
  overflow-y: scroll;
  background: url("https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/icon/mysizeindex.jpg");
  background-size: cover;
  .rank-title {
    text-align: center;
    margin: 22px 0;
    color: #fff;
    font-size: 26px;
    font-weight: 600;
  }
  .header-per {
    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      li {
        width: 33.33%;
        text-align: center;
        .actar {
          position: relative;
          margin: 0 auto;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url("https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/RankList/circle.png");
          background-size: 100%;
          .actar-header {
            width: 86%;
            height: 86%;
            border-radius: 50%;
          }
          .icon {
            position: absolute;
            bottom: 0;
            width: 18px;
            right: 0;
          }
        }
        .number-one {
          transform: scale(1.2);
          .actar-header {
            width: 84%;
            height: 84%;
          }
        }
        .name-num {
          display: flex;
          flex-direction: column;
          .rank-name {
            color: #fff;
            font-size: 16px;
            padding: 14px 0 2px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .rank-score {
            color: yellow;
            font-size: 19px;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }

  .line {
    margin-top: 20px;
    border-bottom: 1px dotted #fff;
  }
  .person-detail {
    ul {
      width: 100%;
      padding: 0 14px;
      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        align-items: center;
        .per-num {
          color: #fff;
          font-size: 16px;
          width: 56px;
        }
        .per-avator {
          margin-left: -12px;
          height: 35px;
          display: flex;
          align-items: center;
          color: #fff;
          font-size: 15px;
          // width: 100px;
          .van-image {
            margin-right: 5px;
            width: 35px;
            height: 35px;
            img {
              border-radius: 50%;
            }
          }
          .per-name {
            width: 50px;
            display: inline-block;
          }
        }
        .per-score {
          color: #fff;
          font-size: 15px;
          width: 60px;
          text-align: center;
        }
      }
      .my-rank {
        border: 1px solid #d86d7b;
        border-radius: 14px;
        position: relative;
        margin-bottom: 60px;
        padding-bottom: 7px;
        background: #ff6f62;
        .tag {
          position: absolute;
          top: 0;
          left: 0;
        }
        .van-image {
          margin-right: 5px;
          width: 35px;
          height: 35px;
          img {
            border-radius: 50%;
          }
        }
        .per-num {
          color: #fff;
        }
        .per-avator {
          color: #fff;
        }
        .per-score {
          color: #fff;
        }
      }
    }
  }
}
</style>
