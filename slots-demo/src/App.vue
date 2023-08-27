<template>
  <div>
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

export default {
  name: 'App',
  components: {
    'my-hello': HelloWorld
  },
  computed: {},
  data() {
    return {
      randomNumber: 0
    };
  },
  methods: {
    changeNumber(num) {
      this.randomNumber = num ?? Math.floor(Math.random() * 100 + 1);
    }
  }
};
</script>