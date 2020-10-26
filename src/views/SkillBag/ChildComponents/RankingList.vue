<template>
  <div class="rank-contain">
    <div class="score">分数排行榜</div>
    <div class="column">
      <ul>
        <li><span>排行</span></li>
        <li><span>昵称</span></li>
        <li><span>最高分</span></li>
      </ul>
      <img src="static/img/RankList/rankcolumn.png" alt="" />
    </div>
    <div class="rank-detail">
      <ul>
        <li>
          <span><img src="static/img/RankList/1.png" alt="" /></span>
          <span>890</span>
          <span class="num-one">89000</span>
        </li>
        <li>
          <span><img src="static/img/RankList/2.png" alt="" /></span>
          <span>890</span>
          <span class="num-two">89000</span>
        </li>
        <li>
          <span><img src="static/img/RankList/3.png" alt="" /></span>
          <span>890</span>
          <span class="num-three">89000</span>
        </li>
        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>

        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>

        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>4</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>5</span>
          <span>890</span>
          <span>89000</span>
        </li>
        <li>
          <span>6</span>
          <span>890</span>
          <span>89000</span>
        </li>
      </ul>
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
.rank-contain {
  //   background: #f40;
  height: calc(100% - 60px);
  font-size: 14px;
  box-sizing: border-box;
  color: #000;
  .score {
    font-size: 21px;
    font-weight:500;
    text-align: center;
    padding: 20px 0;
  }
  .column {
    color: #000;
    font-weight: 600;
    position: relative;
    margin-bottom: 5px;
    ul {
      height: 100%;
      width: 100%;
      position: absolute;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        width: 70px;
        text-align: center;
      }
    }
    img {
      width: 100%;
    }
  }
  .rank-detail {
    height: calc(100% - 100px);
    overflow-y: scroll;
    padding-bottom: 60px;
    li {
      height: 32px;
      img {
        width: 20px;
      }
      display: flex;
      justify-content: space-around;
      margin: 5px 0px;
      align-items: center;
      border-bottom: 1px solid #ccc;
      span {
        display: block;
        text-align: center;
        width: 70px;
      }
    }
    .num-one{
        font-size: 21px;
    }
    .num-two{
        font-size: 18px;
    }
    .num-three{
        font-size: 17px;
    }
  }
}
</style>
