<template>
  <div class="first-page-contain">
    <luck-draw
      :backImage="backImage"
      :footerImage="footerImage"
      :houseImageArr="houseImageArr"
    ></luck-draw>
  </div>
</template>

<script>
import LuckDraw from "views/Home";
export default {
  data() {
    return {
      backImage: "static/img/firstLevel2/homeback.png",
      footerImage: "static/img/firstLevel2/footerImg.png",
      houseImageArr: [
        "static/img/firstLevel2/house1.png",
        "static/img/firstLevel2/house2.png",
      ],
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
