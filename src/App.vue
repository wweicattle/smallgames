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
</style>
