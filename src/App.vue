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

.bal::before {
  content: "";
  height: 200px;
  width: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: -100%;
}

.bal::after {
  content: "";
  height: 200px;
  width: 2px;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: -100%;
}
@keyframes myfirst2 {
  0% {
    //   background: red;
    //    width: 50px;
    //   height: 50px;
    border-left: 1px dotted red;
    border-right: 1px dotted red;
  }
  10% {
    border-left: none;
    border-right: none;
  }
  30% {
    border-left: 1px dotted red;
    border-right: 1px dotted red;
  }
  50% {
    //   background: red;
    /* padding: -100px 100px 100px -100px; */
    /* width: 100px;
                height: 100px; */
    border-left: none;
    border-right: none;
  }
  70% {
    border-left: 1px dotted red;
    border-right: 1px dotted red;
  }
  80% {
    border-left: none;
    border-right: none;
  }
  100% {
    border-left: 1px dotted red;
    border-right: 1px dotted red;
    //   background: red;

    /* padding: -200px 200px 200px -200px; */

    /* width: 200px;
                height: 200px; */
  }
}
// @keyframes myfirst2 {
//   0% {
//     //   background: red;
//     //    width: 50px;
//     //   height: 50px;
//     border-left: 1px dotted red;
//     border-right: 1px dotted red;
//   }
//   10% {
//     border-left: none;
//     border-right: none;
//   }
//   30% {
//     border-left: 1px dotted red;
//     border-right: 1px dotted red;
//   }
//   50% {
//     //   background: red;
//     /* padding: -100px 100px 100px -100px; */
//     /* width: 100px;
//                 height: 100px; */
//     border-left: none;
//     border-right: none;
//   }
//   70% {
//     border-left: 1px dotted red;
//     border-right: 1px dotted red;
//   }
//   80% {
//     border-left: none;
//     border-right: none;
//   }
//   100% {
//     border-left: 1px dotted red;
//     border-right: 1px dotted red;
//     //   background: red;

//     /* padding: -200px 200px 200px -200px; */

//     /* width: 200px;
//                 height: 200px; */
//   }
// }
// .shine {
//   animation: myfirst2 2s ease 0s infinite alternate;
// }
</style>
