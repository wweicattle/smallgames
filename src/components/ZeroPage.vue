<template>
  <div class="first-page-contain">
    <luck-draw
      :backImage="backImage"
      :footerImage="footerImage"
      :houseImageArr="houseImageArr"
      :timeAnimaiton="timeset"
      :scoreNums="scoreNums"
      :stepsScore="stepsScore"
    ></luck-draw>
  </div>
</template>

<script>
import LuckDraw from "views/Home";
import levelSetting from "utils/levelSetting";
export default {
  data() {
    return {
      stepsScore: levelSetting[0][0].stepsScore,
      scoreNums: levelSetting[0][0].scoreNums,
      timeset: levelSetting[0][0].timeSet,
      backImage: levelSetting[0][0].photos.backImage,
      footerImage: levelSetting[0][0].photos.footerImage,
      houseImageArr: levelSetting[0][0].photos.houseImageArr,
    };
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    LuckDraw,
  },
  watch: {
   
  },
};
</script>

<style scoped lang="scss">
.first-page-contain {
  height: 100%;
}
</style>
