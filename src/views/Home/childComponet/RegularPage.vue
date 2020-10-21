<template>
  <div @click="clickBtn">
    这是一个规则的说Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Suscipit hic officiis sapiente, reprehenderit qui porro. Placeat deserunt
    architecto aut, vel minima facilis est sequi? Reiciendis vel cum impedit
    natus animi eos. Fugit molestiae culpa expedita alias quod qui iusto, hic
    quas magni soluta dicta laboriosam blanditiis nulla accusamus! Molestias
    exercitationem nam nesciunt incidunt quasi, quidem assumenda eveniet harum
    doloribus dolorem voluptas nulla ipsam esse et repudiandae. Sequi excepturi
    quos laboriosam totam porro impedit perspiciatis aperiam dolor, officia
    sapiente magni officiis eum. Dolores consequatur maiores quos totam
    obcaecati ducimus adipisci quae vero, a rerum hic provident id officia
    quidem velit saepe!
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    clickBtn() {
        // this.$emit("closeRgular")
        window.location.href="/home"
    }
  },
};
</script>

<style scoped lang="less">
</style>
