<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import Poster from "components/Poster"
export default {
  name: "App",
  data: function () {
    return {};
  },
  components: {},
};
</script>
<style lang="scss">
@import url(./assets/css/base.css);
html,
#app {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-image: url("~assets/home.png");
}
</style>
