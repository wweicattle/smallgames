<template>
  <div class="first-page-contain">
    <luck-draw
      :backImage="backImage"
      :footerImage="footerImage"
      :houseImageArr="houseImageArr"
      :timeAnimaiton="timeset"
       :scoreNums="scoreNums"
      :stepsScore="stepsScore"
      :checkPointNum="4"

    ></luck-draw>
  </div>
</template>

<script>
import LuckDraw from "views/Home";
import levelSetting from "utils/levelSetting";
export default {
  data() {
    return {
      stepsScore:levelSetting[3][3].stepsScore,

      scoreNums:levelSetting[3][3].scoreNums,
      timeset: levelSetting[3][3].timeSet,
      backImage: levelSetting[3][3].photos.backImage,
      footerImage: levelSetting[3][3].photos.footerImage,
      houseImageArr: levelSetting[3][3].photos.houseImageArr,
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
