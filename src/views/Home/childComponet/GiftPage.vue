<template>
  <div class="gift-contain">
    <img src="static/img/gift/gift.png"  ref="img" alt="" v-if="!isshowLuck"/>
    <img src="static/img/gift/giftsuccess.png" alt="" v-else >
  </div>
</template>

<script>
export default {
  data() {
    return {
        isshowLuck:false
    };
  },
  created() {},
  mounted() {
    console.log(this.$refs.img);
    let that = this;
    that.$refs.img.addEventListener("animationend", this.ss);
    that.$refs.img.addEventListener("webkitAnimationEnd", this.ss);
    // setTimeout(() => {
    that.$refs.img.addEventListener("click", () => {
      that.$refs.img.classList.add("test");
    });
    // });
  },
  methods: {
    ss() {
     this.isshowLuck=true
    },
  },
};
</script>

<style scoped lang="scss">
.gift-contain {
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .test {
    animation: myfirst2 1s ease 0s 1 normal forwards;
  }
  img {
    width: 80%;
    left: 0;
    right: 0;
    top: 90px;
    margin: auto;
    position: absolute;
  }
}

@keyframes myfirst2 {
  0% {
    /* transform: translate(150px,150px) ; */
    transform: scale(1.2);
  }

  20% {
    /* transform: scale(1, 1); */
    /* top: 100px;
                left: 100px; */

    transform: scale(1.3);
  }

  30% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.35, 1.35);
  }

  45% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.3);
  }

  60% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.35, 1.35);
  }

  75% {
    /* top: 100px;
                left: 100px; */

    transform: scale(1.3);
  }

  90% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.35, 1.35);
  }

  100% {
    /* top: 100px;
                left: 100px; */
    transform: scale(1.3);
  }
}
</style>
