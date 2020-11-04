<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data: function () {
    return {};
  },
  mounted() {
    console.log(2222);
    console.log(window.location.search);
    // //进入项目进行判断是否企业 用户
    // let userStates = window.localStorage.getItem("userStates");
    // if (userStates == "undefined" || !userStates) {
    //   let code = window.location.search.slice(1).split("&")[0].split("=")[0];
    //   let userStates = window.location.search
    //     .slice(1)
    //     .split("&")[0]
    //     .split("=")[1];
    //   if (code == "code") {
    //     window.localStorage.setItem("userStates", userStates);
    //   }
    // }
  },
  components: {},
  methods: {},
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);
html,
#app {
  -webkit-touch-callout: none;
  -moz-touch-callout: none;
  -ms-touch-callout: none;
  touch-callout: none;
  user-select: none;
  -webkit-user-select: none; /*禁用手机浏览器的用户选择功能 */
  -moz-user-select: none;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-size: contain;
}
img {
  // pointer-events: none;
}
</style>
