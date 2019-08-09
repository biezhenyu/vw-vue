<template>
  <div class="home">
    <h3 class="title">测试vw</h3>
    <van-skeleton title avatar :row="3" />
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  created() {
    this._test();
  },
  methods: {
    async _test() {
      const {code = null, data = []} = await this.$api.test.test();
      if (code === 0) {
        console.log(data);
      }
      
    }
  }

};
</script>

<style lang="less" scoped>
.title {
  font-size: 30px;
  text-align: center;
}
</style>

