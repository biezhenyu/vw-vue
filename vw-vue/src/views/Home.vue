<template>
  <div class="home">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import $api from '../api/index';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private list: any[] = [];
  private loading: boolean = false;
  private finished: boolean = false;

  private mounted() {
    this._testApi();
  }

  private async _testApi(): Promise<any> {
    const {code = null, data = []} = await $api.login.test();
    if (code === 0) {
      console.log(data);
    }
  }


  private onLoad(): void {
    // 异步更新数据
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1);
      }
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.list.length >= 40) {
        this.finished = true;
      }
    }, 500);
  }
}
</script>


