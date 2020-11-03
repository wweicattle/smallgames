<template>
  <div class="first-page-contain">
    <luck-draw
      :backImage="backImage"
      :footerImage="footerImage"
      :houseImageArr="houseImageArr"
      :timeAnimaiton="timeset"
       :scoreNums="scoreNums"
      :stepsScore="stepsScore"
      :checkPointNum="5"

    ></luck-draw>
  </div>
</template>

<script>
import LuckDraw from "views/Home";
import levelSetting from "utils/levelSetting";
export default {
  data() {
    return {
      scoreNums:levelSetting[4][4].scoreNums,
      stepsScore:levelSetting[4][4].stepsScore,

      timeset: levelSetting[4][4].timeSet,
      backImage: levelSetting[4][4].photos.backImage,
      footerImage: levelSetting[4][4].photos.footerImage,
      houseImageArr: levelSetting[4][4].photos.houseImageArr,
    };
  },
  created() {},
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
