<template>
  <div class="first-page-contain">
    <luck-draw
      :backImage="backImage"
      :footerImage="footerImage"
      :houseImageArr="houseImageArr"
      :timeAnimaiton="timeset"
       :scoreNums="scoreNums"
      :stepsScore="stepsScore"
      :isSecond="true"
      :checkPointNum="3"

    ></luck-draw>
  </div>
</template>

<script>
import LuckDraw from "views/Home";
import levelSetting from "utils/levelSetting";
export default {
  data() {
    return {
      stepsScore:levelSetting[2][2].stepsScore,
      scoreNums:levelSetting[2][2].scoreNums,
      timeset: levelSetting[2][2].timeSet,
      backImage: levelSetting[2][2].photos.backImage,
      footerImage: levelSetting[2][2].photos.footerImage,
      houseImageArr: levelSetting[2][2].photos.houseImageArr,
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
