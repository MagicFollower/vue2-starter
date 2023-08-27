<template>
  <div>
    <p>当前时间：{{ currentTime }}</p>
    <my-hello :msg="'hello → '+randomNumber" @event-from-child="changeNumber">
      <span>---inner default slot---</span><br/>

      <template v-slot:my-slot>
        <span>---inner named slot1---</span><br/>
        <span>---inner named slot1---</span><br/>
      </template>
      <!-- 多个named-slot，后者会覆盖前者，但是这是不推荐的做法!!! -->
      <!-- v-slot可以使用#简写，#可以理解为锚点，将这部分数据插入到指定的锚点中 -->
      <template #my-slot>
        <span>---inner named slot2---</span><br/>
        <span>---inner named slot2---</span><br/>
      </template>

      <span>---inner default slot---</span><br/>
    </my-hello>
    <br/>
    <button @click="changeNumber()">生成随机数</button>
  </div>
</template>

<script>


import HelloWorld from '@/components/HelloWorld.vue';
import moment from 'moment';

export default {
  name: 'App',
  components: {
    'my-hello': HelloWorld
  },
  created() {
    this.timer = setInterval(() => {
      // Java        : yyyy-MM-dd HH:mm:ss.SSS
      // JS(moment)  : YYYY-MM-DD HH:mm:ss.SSS
      this.currentTime = moment(new Date()).format('YYYY/M/D H:m:s.SSS');
    }, 1000);
  },
  computed: {},
  data() {
    return {
      'timer': null,
      currentTime: new Date().toLocaleString(),
      randomNumber: 0
    };
  },
  methods: {
    changeNumber(num) {
      this.randomNumber = num ?? Math.floor(Math.random() * 100 + 1);
    }
  },
  beforeDestroy() {
    // clearTimeout、clearInterval
    clearInterval(this.timer);
  }
};
</script>