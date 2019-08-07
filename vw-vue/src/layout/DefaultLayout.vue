<!-- 作为一个中间件存在，提供嵌套路由使用，并无其他功能 -->
<template>
  <div class="layout">
    <router-view />
  </div>
  
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
@Component({
  components: {
  },
})
export default class DefaultLayout extends Vue {
  
}
</script>

<style lang="less">
</style>
