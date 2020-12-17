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
      isExistYear="true"
    ></luck-draw>
  </div>
</template>

<script>
import LuckDraw from "views/Home";
import levelSetting from "utils/levelSetting";
export default {
  data() {
    return {
      stepsScore: levelSetting[7][7].stepsScore,
      scoreNums: levelSetting[7][7].scoreNums,
      timeset: levelSetting[7][7].timeSet,
      backImage: levelSetting[7][7].photos.backImage,
      footerImage: levelSetting[7][7].photos.footerImage,
      houseImageArr: levelSetting[7][7].photos.houseImageArr,
    };
  },
  created() {},
  mounted() {
    let state = this.$route.params.canplay;
    if (!state) {
      window.location.href = window.localStorage.getItem("initPage");
    }
  },
  methods: {},
  components: {
    LuckDraw,
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.first-page-contain {
  height: 100%;
}
</style>
