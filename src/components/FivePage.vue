<template>
  <div class="first-page-contain">
    <luck-draw
      :backImage="backImage"
      :footerImage="footerImage"
      :houseImageArr="houseImageArr"
      :timeAnimaiton="timeset"
      :scoreNums="scoreNums"
      :stepsScore="stepsScore"
      :checkPointNum="6"
    ></luck-draw>
  </div>
</template>

<script>
import LuckDraw from "views/Home";
import levelSetting from "utils/levelSetting";
export default {
  data() {
    return {
      stepsScore: levelSetting[5][5].stepsScore,
      scoreNums: levelSetting[5][5].scoreNums,
      timeset: levelSetting[5][5].timeSet,
      backImage: levelSetting[5][5].photos.backImage,
      footerImage: levelSetting[5][5].photos.footerImage,
      houseImageArr: levelSetting[5][5].photos.houseImageArr,
    };
  },
  created() {
    let state = this.$route.params.canplay;
    if (!state) {
      window.location.href = window.localStorage.getItem("initPage");
    }
  },
  mounted() {},
  methods: {},
  components: {
    LuckDraw,
  },
};
</script>

<style scoped lang="scss">
.first-page-contain {
  height: 100%;
}
</style>
