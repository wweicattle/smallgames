<template>
  <div class="rank-contain">
    <div class="column">
      <ul>
        <li><span>排行</span></li>
        <li><span>昵称</span></li>
        <li><span>最高分</span></li>
      </ul>
      <!-- <img src="static/img/RankList/rankcolumn.png" alt="" /> -->
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
  padding: 0 26px;
  height: calc(100vh - 82px);
  font-size: 14px;
  box-sizing: border-box;
//   background: #f40;
  color: #000;
  .column {
    color: #000;
    font-weight: 600;
    position: relative;
    margin: 10px 0;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding: 12px 0 1px 0;
      li {
        width: 70px;
        text-align: center;
      }
    }
  }
  .rank-detail {
    overflow-y: scroll;
    // border: 1px solid red;
    height: calc(100% - 50px);
    li {
      height: 32px;
      img {
        width: 20px;
      }
      display: flex;
      justify-content: space-around;
      margin: 10px 0px;
      align-items: center;
      border-bottom: 1px solid #ccc;
      span {
        display: block;
        text-align: center;
        width: 70px;
      }
      &:last-child{
          margin-bottom: 40px;
      }
    }
    .num-one {
      font-size: 21px;
    }
    .num-two {
      font-size: 18px;
    }
    .num-three {
      font-size: 17px;
    }
  }
}
</style>
