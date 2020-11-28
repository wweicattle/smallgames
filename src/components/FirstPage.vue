<template>
  <div class="first-page-contain">
    <luck-draw
      :backImage="backImage"
      :footerImage="footerImage"
      :houseImageArr="houseImageArr"
      :timeAnimaiton="timeset"
      :scoreNums="scoreNums"
      :stepsScore="stepsScore"
      :checkPointNum="2"

    ></luck-draw>
  </div>
</template>

<script>
import LuckDraw from "views/Home";
import levelSetting from "utils/levelSetting";
export default {
  data() {
    return {
      stepsScore:levelSetting[1][1].stepsScore,

      scoreNums:levelSetting[1][1].scoreNums,
      timeset: levelSetting[1][1].timeSet,
      backImage: levelSetting[1][1].photos.backImage,
      footerImage: levelSetting[1][1].photos.footerImage,
      houseImageArr: levelSetting[1][1].photos.houseImageArr,
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
